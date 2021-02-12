import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterState } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  constructor(private router: Router) { }

  handleSearch(state: FilterState) {
    this.router.navigate(['./tours'], {
      state: { filter: state }
    });
  }
}
