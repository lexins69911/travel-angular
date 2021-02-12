import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { AuthService } from '../auth.service';
import { TokenStorageService } from '../token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private auth: AuthService) {}

  items: NbMenuItem[] = [{
    title: "Главная",
    link: '/'
  },
  {
    title: "Туры",
    link: '/tours'
  },
  {
    title: "Контакты",
    link: '/contacts'
  },
  {
    title: "О нас",
    link: '/about-us'
  }
]

  logout() {
    console.log("logout in header")
    this.auth.logout();
  }
}
