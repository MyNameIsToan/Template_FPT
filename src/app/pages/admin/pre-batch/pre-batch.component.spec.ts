import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreBatchComponent } from './pre-batch.component';

describe('PreBatchComponent', () => {
  let component: PreBatchComponent;
  let fixture: ComponentFixture<PreBatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreBatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
