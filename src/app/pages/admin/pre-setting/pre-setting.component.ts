import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pre-setting',
  templateUrl: './pre-setting.component.html',
  styleUrls: ['./pre-setting.component.scss']
})
export class PreSettingComponent implements OnInit {

  Condition = 1;
  constructor() {}

  ngOnInit() {}

  ShowUserManagement(){
    this.Condition = 1;
  }

  ShowSecurity(){
    this.Condition = 2;
  }

  ShowEmail(){
    this.Condition = 3;
  }

  ShowSystemSetting(){
    this.Condition = 4;
  }

}
