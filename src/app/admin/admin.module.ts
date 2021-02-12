import { NgModule } from '@angular/core';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { RouterModule } from '@angular/router';
import { NbDialogModule, NbGlobalLogicalPosition, NbToastrModule } from '@nebular/theme';

import { ToursComponent } from './tours/tours.component';
import { InsightsComponent } from './insights/insights.component';
import { EditTourComponent } from './tours/edit-tour/edit-tour.component';
import { SharedModule } from 'src/shared/shared.module';
import { VisitorsAnalyticsComponent } from './visitors-analytics/visitors-analytics.component';
import { VisitorsAnalyticsChartComponent } from './visitors-analytics/visitors-analytics-chart/visitors-analytics-chart.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { OperatorsComponent } from './operators/operators.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { OrdersComponent } from './orders/orders.component';
import { PhoneCellComponent } from './orders/phone-cell/phone-cell.component';
import { EmailCellComponent } from './orders/email-cell/email-cell.component';
import { ContactsComponent } from './contacts/contacts.component';
import { StatusCellComponent } from './orders/status-cell/status-cell.component';

@NgModule({
  declarations: [AdminPanelComponent, ToursComponent, InsightsComponent, EditTourComponent, VisitorsAnalyticsComponent, VisitorsAnalyticsChartComponent, OperatorsComponent, OrdersComponent, ContactsComponent, PhoneCellComponent, EmailCellComponent, StatusCellComponent],
  imports: [
    NbToastrModule.forRoot({
      position: NbGlobalLogicalPosition.BOTTOM_END
    }),
    NbDialogModule.forChild(),
    SharedModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    CKEditorModule,
    RouterModule.forChild([{
      path: '',
      component: AdminPanelComponent,
      children: [
        {
          path: 'tours',
          component: ToursComponent
        },
        {
          path: 'insights',
          component: InsightsComponent
        },
        {
          path: 'orders',
          component: OrdersComponent
        }, {
          path: 'contacts',
          component: ContactsComponent
        }
      ]
    }]),
  ]
})
export class AdminModule {
}
