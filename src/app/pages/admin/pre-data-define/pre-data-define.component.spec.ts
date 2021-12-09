import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreDataDefineComponent } from './pre-data-define.component';

describe('PreDataDefineComponent', () => {
  let component: PreDataDefineComponent;
  let fixture: ComponentFixture<PreDataDefineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreDataDefineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreDataDefineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
