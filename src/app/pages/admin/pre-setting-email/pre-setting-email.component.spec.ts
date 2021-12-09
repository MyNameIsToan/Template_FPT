import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreSettingEmailComponent } from './pre-setting-email.component';

describe('PreSettingEmailComponent', () => {
  let component: PreSettingEmailComponent;
  let fixture: ComponentFixture<PreSettingEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreSettingEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreSettingEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
