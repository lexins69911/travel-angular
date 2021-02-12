import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NbDialogService } from '@nebular/theme';
import { Observable } from 'rxjs';
import { Operator } from 'src/app/model';
import { TourService } from '../../tour.service';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent {
  operators$: Observable<Operator[]> = this.api.getOperators();

  constructor(private readonly api: TourService, private dialog: NbDialogService) { }

  handleAddOperator(template: TemplateRef<any>) {
    const form = new FormGroup({
      company: new FormControl(''),
      name: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      skype: new FormControl('')
    });

    this.dialog.open(template, {
      context: {
        form
      }
    }).onClose.subscribe(result => {
      console.log(form);
      if (!result) {
        return;
      }

      this.operators$ = this.api.addOperator(form.value);
    });
  }
}
