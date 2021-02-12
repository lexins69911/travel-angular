import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbActionsModule, NbButtonModule, NbCardModule, NbDatepickerModule, NbFormFieldModule, NbIconModule, NbInputModule, NbLayoutModule, NbListModule, NbMenuModule, NbSidebarModule, NbToastrModule, NbUserModule } from '@nebular/theme';
import { NgbCarouselModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { SafeHtmlPipe } from 'src/app/safe-html.pipe';
import { FormsModule } from '@angular/forms';

const modules = [
  CommonModule,
  FormsModule,
  HttpClientModule,
  ReactiveFormsModule,
  NbLayoutModule,
  NbMenuModule,
  NbCardModule,
  NbButtonModule,
  NbIconModule,
  NbInputModule,
  NbDatepickerModule,
  NbSidebarModule,
  NgbCarouselModule,
  NgbRatingModule,
  NbSidebarModule,
  NbListModule,
  NbUserModule,
  NbActionsModule,
  NbFormFieldModule,
  Ng2SmartTableModule
]

@NgModule({
  declarations: [
    SafeHtmlPipe,
  ],
  imports: [
    ...modules
  ],
  exports: [
    SafeHtmlPipe,
    ...modules
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: []
    }
  }
}
