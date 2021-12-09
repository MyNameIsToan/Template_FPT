import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreSettingUsermanagementComponent } from './pre-setting-usermanagement.component';

describe('PreSettingUsermanagementComponent', () => {
  let component: PreSettingUsermanagementComponent;
  let fixture: ComponentFixture<PreSettingUsermanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreSettingUsermanagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreSettingUsermanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
