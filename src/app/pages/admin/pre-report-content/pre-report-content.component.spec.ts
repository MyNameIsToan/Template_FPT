import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreReportContentComponent } from './pre-report-content.component';

describe('PreReportContentComponent', () => {
  let component: PreReportContentComponent;
  let fixture: ComponentFixture<PreReportContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreReportContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreReportContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
