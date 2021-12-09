import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  public isMobileResolution: boolean;

  constructor() {
    this.isMobileResolution = window.innerWidth < 1200;
  }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  public isMobile(event: any): void {
    this.isMobileResolution = window.innerWidth < 1200;
  }
}
