import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreImportComponent } from './pre-import.component';

describe('PreImportComponent', () => {
  let component: PreImportComponent;
  let fixture: ComponentFixture<PreImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreImportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
