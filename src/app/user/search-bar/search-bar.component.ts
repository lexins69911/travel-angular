import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import {TourService} from "src/app/tour.service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  @Output() search = new EventEmitter<FilterState>();

  form: FormGroup = this.fb.group({
    placement: '',
    range: {
      start: new Date() ,
      end: new Date(new Date().setDate(new Date().getDate() + 30))
    },
    price: 0,
  });

  constructor(private fb: FormBuilder, private router: Router, private api: TourService) {
    const state = this.router.getCurrentNavigation()?.extras?.state;
    if (state && state.filter) {
      this.form.patchValue(state.filter);
    }
  }

  ngAfterViewInit() {
    if (this.router.url.includes('tours')) {
      this.handleSearchTours();
    }
  }

  handleSearchTours() {
    console.log(this.form.value)
    this.search.emit(this.form.value);

  }
}

export interface FilterState {
  placement: string;
  range: {
    start: Date,
    end: Date
  },
  price: number
}