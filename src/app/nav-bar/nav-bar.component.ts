import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit,AfterViewInit {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
  date!: Date;
  year!: number;
  month!: string;
  dateWithDay!: string;

  windowsWidth!: number;

  public searchInput = 'chennai';

  ngOnInit() {
    this.windowsWidth = window.innerWidth;
    this.date = new Date();
    this.year = this.date.getFullYear();
    this.month = this.date.toLocaleString('en-US', { month: 'long' });
    this.dateWithDay = this.date.toLocaleString('en-US', {
      day: 'numeric',
      month: 'long',
      weekday: 'long',
      year: 'numeric',
    });
    // console.log(this.dateWithDay);
  }

  // this decorator listens to the events and execute the call back function
  @HostListener('window:resize')
  onResize() {
    this.windowsWidth = window.innerWidth;
    console.log(this.windowsWidth);
  }

  ngAfterViewInit() {
    setInterval(() => this.ngOnInit(), 24 * 60 * 60 * 1000);
  }
}
