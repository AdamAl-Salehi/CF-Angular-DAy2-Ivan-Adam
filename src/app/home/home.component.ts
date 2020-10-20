import { Component, OnInit } from '@angular/core';

@Component({
 selector: 'home',
 templateUrl: './home.component.html',
 styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  car = [
    {
      name: "Ford",
      img: "/../../assets/Ford.png",
    },{
      name: "Audi",
      img: "https://d1og9yuwrvksj4.cloudfront.net/at/A/library/A5/A5%402x_sm.png",
    },{
      name:"BMW",
      img: "https://mediapool.bmwgroup.com/cache/P9/202005/P90389688/P90389688-the-bmw-7-series-05-2020-2000px.jpg",
    }
  ];
 

 constructor() { }

 ngOnInit() {
 }

}