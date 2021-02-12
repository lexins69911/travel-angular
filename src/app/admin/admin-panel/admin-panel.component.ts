import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent {
  items: NbMenuItem[] = [{
    home: true,
    link: 'tours',
    title: 'Туры',
    icon: 'grid-outline',
    // pathMatch: 'prefix'
  }, 
  {
    link: 'orders',
    title: 'Заказы',
    icon: 'people-outline'
  },
  {
    link: 'contacts',
    title: 'Обращения',
    icon: 'book-open-outline',
    // pathMatch: 'prefix'
  }, ];


  constructor(public route: ActivatedRoute) {
  }

}
