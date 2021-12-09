import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreReportComponent } from './pre-report.component';

describe('PreReportComponent', () => {
  let component: PreReportComponent;
  let fixture: ComponentFixture<PreReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
