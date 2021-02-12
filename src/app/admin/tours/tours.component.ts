import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Tour } from 'src/app/model';

import { TourService } from '../../tour.service';
import { EditTourComponent } from './edit-tour/edit-tour.component';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss'],
})
export class ToursComponent {
  @ViewChild('confirmDialog', { static: true }) confirmDialog: TemplateRef<any>;
  tours$ = this.api.getTours();

  constructor(private readonly api: TourService, private dialog: NbDialogService, private toastr: NbToastrService) { }

  addTour() {
    this.addEditTour(null);
  }

  editTour(tour: Tour) {
    this.addEditTour(tour);
  }

  addEditTour(tour: Tour) {
    this.dialog.open(EditTourComponent, {
      hasBackdrop: true,
      context: {
        tour
      }
    }).onClose.subscribe((data: Tour | null) => {
      if (!data) {
        return;
      }
      let obs: Observable<any>;

      if (data.id === undefined) {
        delete data.id;
        obs = this.api.addTour(data);
      } else {
        obs = this.api.updateTour(data);
      }

      this.tours$ = obs.pipe(tap(() => {
        this.toastr.success('Успешно')
      }));
    });
  }

  removeTour(tour: Tour) {
    this.dialog.open(this.confirmDialog, {
      hasBackdrop: true,
    }).onClose.subscribe(result => {
      if (result) {
        this.toastr.success('Успешно удалено');

        this.tours$ = this.api.removeTour(tour.id);
      }
    })
  }
}