import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreSettingSecurityComponent } from './pre-setting-security.component';

describe('PreSettingSecurityComponent', () => {
  let component: PreSettingSecurityComponent;
  let fixture: ComponentFixture<PreSettingSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreSettingSecurityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreSettingSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
