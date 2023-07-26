import { Injectable } from '@angular/core';
import { Environment } from 'src/environment';
import { HttpClient } from '@angular/common/http';
import { NavBarComponent } from '../nav-bar/nav-bar.component';


@Injectable({
  providedIn: 'root'
})
export class MainPageService   {

  // cityName='chennai';

  constructor(private http: HttpClient,private searchInput:NavBarComponent) {
  }
  // getCityName(){
  //   this.cityName = this.searchInput.searchInput;
  // }

  apiKey = Environment.api_key;
  data:any;
  api_url = `https://api.openweathermap.org/data/2.5/weather?q=${this.searchInput.searchInput}&appid=${this.apiKey}&units=metric`;

  getData() {
    return this.http.get(this.api_url)
  }

}
