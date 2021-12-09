import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreTemplateReportComponent } from './pre-template-report.component';

describe('PreTemplateReportComponent', () => {
  let component: PreTemplateReportComponent;
  let fixture: ComponentFixture<PreTemplateReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreTemplateReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreTemplateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
