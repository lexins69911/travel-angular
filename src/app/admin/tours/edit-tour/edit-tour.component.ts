import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { Tour } from 'src/app/model';
import { loadFile } from 'src/app/utilitites';

@Component({
  selector: 'app-edit-tour',
  templateUrl: './edit-tour.component.html',
  styleUrls: ['./edit-tour.component.scss']
})
export class EditTourComponent implements OnInit {
  @Input() tour: Tour;

  form: FormGroup;

  get images(): FormArray {
    return this.form.get('images') as FormArray;
  }

  constructor(public ref: NbDialogRef<EditTourComponent>, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.tour ??= {} as any;

    this.form = this.fb.group({
      description: this.tour.description,
      range: {
        start: this.tour.startDate ? new Date(this.tour.startDate) : new Date(),
        end: this.tour.endDate ? new Date(this.tour.endDate) : new Date()
      },
      city: this.tour.city || '',
      country: this.tour.country || '',
      price: this.tour.price || 0,
      images: this.fb.control(this.tour.images || []),
      hotel: this.fb.group({
        rating: (this.tour.hotel || {}).rating || 0,
        name: (this.tour.hotel || {}).name || ''
      })
    })
  }

  addImage() {
    loadFile('image/png,image/svg+xml,image/jpg,image/jpeg')
      .then(fileList => fileList.item(0))
      .then(
        importedImage =>
          new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(importedImage);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
          })
      )
      .then(base64Image => {
        this.images.patchValue([...this.images.value, base64Image])
      })
      .catch(() => { });
  }

  removeImage(i: number) {
    this.images.patchValue((this.images.value as string[]).filter((_, index) => index !== i));
  }

  handleSave() {
    const { range, ...common } = this.form.value;
    this.ref.close({
      id: this.tour.id,
      ...common,
      startDate: +range.start,
      endDate: +range.end,
    })
  }
}
