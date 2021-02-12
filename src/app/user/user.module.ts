import { NgModule } from '@angular/core';

import { SharedModule } from 'src/shared/shared.module';
import { MainPageComponent } from "./main-page/main-page.component";
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { RouterModule } from "@angular/router";
import { ToursComponent } from './tours/tours.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { NbGlobalLogicalPosition, NbToastrModule } from '@nebular/theme';

@NgModule({
  declarations: [MainPageComponent, SearchBarComponent, ToursComponent, ContactsComponent, AboutUsComponent],
  imports: [
    SharedModule,
    NbToastrModule.forRoot({
      position: NbGlobalLogicalPosition.BOTTOM_END
    }),
    RouterModule.forChild([{
      path: '',
      component: MainPageComponent,
    }, {
      path: 'tours',
      component: ToursComponent,
    }, {
      path: 'about-us',
      component: AboutUsComponent,
    }, {
      path: 'contacts',
      component: ContactsComponent,
    }]),
    CKEditorModule,
  ]
})
export class UserModule {
}
