import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreSettingSystemSettingComponent } from './pre-setting-system-setting.component';

describe('PreSettingSystemSettingComponent', () => {
  let component: PreSettingSystemSettingComponent;
  let fixture: ComponentFixture<PreSettingSystemSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreSettingSystemSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreSettingSystemSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
