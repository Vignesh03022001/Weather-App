import { Component, OnInit } from '@angular/core';
import { MainPageService } from '../main-page.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css'],
})
export class MainViewComponent implements OnInit {

  constructor(private mainPageService:MainPageService){}

    data:any = {};


    ngOnInit(): void {
      this.mainPageService.getData().subscribe((data)=>{
        this.data=data;
      })
    }
}
