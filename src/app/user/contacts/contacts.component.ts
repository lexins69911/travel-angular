import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { TourService } from "../../tour.service";
import { NbToastrService } from "@nebular/theme";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor(private fb: FormBuilder, private readonly api: TourService, private toastr: NbToastrService) { }
  form: FormGroup;

  ngOnInit(): void {
    this.form = this.fb.group({
      name: '',
      email: '',
      theme: '',
      message: '',
    });
  }

  handleSendMessage() {
    const data = this.form.getRawValue();

    this.api.addContact(data).subscribe(() => {
      this.toastr.success('Обращение отправлено!');
    });
  }
}
