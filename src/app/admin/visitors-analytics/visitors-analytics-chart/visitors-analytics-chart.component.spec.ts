import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorsAnalyticsChartComponent } from './visitors-analytics-chart.component';

describe('VisitorsAnalyticsChartComponent', () => {
  let component: VisitorsAnalyticsChartComponent;
  let fixture: ComponentFixture<VisitorsAnalyticsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorsAnalyticsChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorsAnalyticsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
