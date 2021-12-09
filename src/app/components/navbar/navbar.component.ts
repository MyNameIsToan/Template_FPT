import {Component, ElementRef, OnInit} from '@angular/core';
import {NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public focus: boolean;
  public listTitles: any[];
  public location: Location;
  public sidenavOpen = true;

  constructor(location: Location,
              private element: ElementRef,
              private router: Router) {
    this.location = location;
    this.router.events
      .subscribe(event => {
        if (event instanceof NavigationStart) {
          // Show loading indicator

        }

        if (event instanceof NavigationEnd) {
          // Hide loading indicator

          if (window.innerWidth < 1200) {
            document.body.classList.remove('g-sidenav-pinned');
            document.body.classList.add('g-sidenav-hidden');
            this.sidenavOpen = false;
          }
        }

        if (event instanceof NavigationError) {
          // Hide loading indicator

          // Present error to user
          console.log(event.error);
        }
      });
  }

  ngOnInit(): void {
  }

  public toggleSidenav(): void {
    if (document.body.classList.contains('g-sidenav-pinned')) {
      document.body.classList.remove('g-sidenav-pinned');
      document.body.classList.add('g-sidenav-hidden');
      this.sidenavOpen = false;
    } else {
      document.body.classList.add('g-sidenav-pinned');
      document.body.classList.remove('g-sidenav-hidden');
      this.sidenavOpen = true;
    }
  }

  public openSearch(): void {
    document.body.classList.add('g-navbar-search-showing');

    setTimeout(() => {
      document.body.classList.remove('g-navbar-search-showing');
      document.body.classList.add('g-navbar-search-show');
    }, 150);

    setTimeout(() => {
      document.body.classList.add('g-navbar-search-shown');
    }, 300);
  }

  public closeSearch(): void {
    document.body.classList.remove('g-navbar-search-shown');
    setTimeout(() => {
      document.body.classList.remove('g-navbar-search-show');
      document.body.classList.add('g-navbar-search-hiding');
    }, 150);

    setTimeout(() => {
      document.body.classList.remove('g-navbar-search-hiding');
      document.body.classList.add('g-navbar-search-hidden');
    }, 300);

    setTimeout(() => {
      document.body.classList.remove('g-navbar-search-hidden');
    }, 500);
  }
}
