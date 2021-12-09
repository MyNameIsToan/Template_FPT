import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pre-report',
  templateUrl: './pre-report.component.html',
  styleUrls: ['./pre-report.component.scss']
})
export class PreReportComponent implements OnInit {

  Condition = 1;

  constructor() {}

  ngOnInit() {}

  ShowContent(){
    this.Condition = 1;
  }

  ShowParameter(){
    this.Condition = 2;
  }
}
