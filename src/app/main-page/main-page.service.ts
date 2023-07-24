import { Injectable } from '@angular/core';
import { Environment } from 'src/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MainPageService {

  constructor(private http: HttpClient) {}
  apiKey = Environment.api_key;
  data!: Object;
  api_url: string = `https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=${this.apiKey}&units=metric`;

  getData() {
   return this.http.get(this.api_url)
  }

}
