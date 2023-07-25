import { WeatherModel } from './../../weather-model';
import { Component, OnInit } from '@angular/core';
import { MainPageService } from '../main-page.service';
// import { NavBarComponent } from 'src/app/nav-bar/nav-bar.component';


@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css'],
})
export class MainViewComponent implements OnInit {
  constructor(private mainPageService: MainPageService) {

  }

  data: any = {};
  // windSpeed: any = 0;

  weatherModel: WeatherModel = {
    temperature: 0,
    realFeelTemperature: 0,
    windSpeed: 0,
    pressure: 0,
  };

  ngOnInit(): void {
    this.mainPageService.getData().subscribe((data) => {
      this.data = data;
      this.weatherModel = {
        temperature: this.data?.main?.temp,
        realFeelTemperature: this.data?.main?.feels_like,
        windSpeed: parseInt((this.data.wind.speed * 3.6).toFixed(2)),
        pressure: this.data?.main?.pressure,
        city: this.data?.name,
      };
      // this.windSpeed = (this.data.wind.speed * 3.6).toFixed(2);
      console.log(this.weatherModel.city);
    });
  }
}

