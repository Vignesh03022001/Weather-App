import { WeatherModel } from './weather-model';
import { Component } from '@angular/core';
import { Environment } from 'src/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Weather App';

  apiKey = Environment.api_key;

  api_url: string =
    `https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=${this.apiKey}&units=metric`;




  //  getWeather(url:string)WeatherModel{
  //   weatherIconApiUrl:string = `https://openweathermap.org/img/wn/10d@2x.png`;
  //  }
}
