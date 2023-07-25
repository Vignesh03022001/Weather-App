import { Injectable, OnInit } from '@angular/core';
import { Environment } from 'src/environment';
import { HttpClient } from '@angular/common/http';
import { NavBarComponent } from '../nav-bar/nav-bar.component';


@Injectable({
  providedIn: 'root'
})
export class MainPageService implements OnInit {

  constructor(private http: HttpClient,private searchInput:NavBarComponent) {}

  cityName='chennai';
  ngOnInit(){
    this.cityName = this.searchInput.searchInput;
  }
  apiKey = Environment.api_key;
  data:any;
  api_url: string = `https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=${this.apiKey}&units=metric`;

  getData() {
    return this.http.get(this.api_url)
  }

}
