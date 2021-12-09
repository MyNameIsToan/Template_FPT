import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreSettingComponent } from './pre-setting.component';

describe('PreSettingComponent', () => {
  let component: PreSettingComponent;
  let fixture: ComponentFixture<PreSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
