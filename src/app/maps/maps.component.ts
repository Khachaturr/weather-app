import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  lat = 51.678418;
  lng = 7.809007;

  onchouse(event){
    console.log(event)
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
