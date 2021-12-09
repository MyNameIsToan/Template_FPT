import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreReportParametersComponent } from './pre-report-parameters.component';

describe('PreReportParametersComponent', () => {
  let component: PreReportParametersComponent;
  let fixture: ComponentFixture<PreReportParametersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreReportParametersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreReportParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
