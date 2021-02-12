import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'app-status-cell',
  template: `{{statusMap[value]}}`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusCellComponent implements ViewCell {
  @Input() value: any;
  @Input() rowData: any;

  statusMap = {
    'IN_PROGRESS': 'Ожидает обработки',
    'CLOSED': 'Закрыто',
    'PAID': 'Оплачено',
    'AWAITING_PAYMENT': 'Ожидает оплаты',
  }
}
