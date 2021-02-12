import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import {EmailCellComponent} from "../orders/email-cell/email-cell.component";
import {TourService} from "../../tour.service";
import { NbDialogService, NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  @ViewChild('confirmDialog', { static: true }) confirmDialog: TemplateRef<any>;

  constructor(
    private readonly api: TourService, 
    private dialog: NbDialogService,
    private toastr: NbToastrService
    ) { }

  ngOnInit(): void {

  }

  settings = {
      actions: {
        add: false,
        edit: false,
        delete: true
      },
      delete: {
        confirmDelete : true,
        // deleteButtonContent: '<img src="assets/images/delete.svg" title="Delete" class="ti-trash text-danger m-r-10 w-20">',
      },
      columns: {
        name: {
          title: 'Имя',
          type: 'string'
        },
        email: {
          title: 'Email',
          type: 'custom',
          renderComponent: EmailCellComponent
        },
        theme: {
          title: 'Тема',
          type: 'string'
        },
        message: {
          title: 'Текст письма',
          type: 'string'
        },
      }
    };

  orders$ = this.api.getContactMessages();

  onDeleteConfirm(event) {
    console.log("delete works!")
    console.log(event)
    this.dialog.open(this.confirmDialog, {
      hasBackdrop: true,
    }).onClose.subscribe(result => {
      if (result) {
        this.orders$ = this.api.deleteMessage(event.data);
        this.toastr.success('Успешно удалено');
      }
    })
  }
}
