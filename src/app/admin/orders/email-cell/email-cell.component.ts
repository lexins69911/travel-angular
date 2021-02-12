import { Component, Input, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'app-email-cell',
  template: `{{value}}`,
})
export class EmailCellComponent implements ViewCell {
  @Input() value: any;
  @Input() rowData: any;
}
