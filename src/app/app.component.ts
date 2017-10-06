import { Component, OnInit } from '@angular/core';
import { SlService } from './sl.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  response;
  LIL = {
    name: 'Liljeholmen',
    updated: 0,
    data: {
      buses: [],
      metros: [],
      trams: []
    }
  };
  SVV = {
    name: 'Sjöviksvägen',
    updated: 0,
    data: {
      buses: [],
      trams: []
    }
  };
  SVT = {
    name: 'Sjövikstorget',
    updated: 0,
    data: {
      buses: [],
      trams: []
    }
  };
  MVK = {
    name: 'Marievik',
    updated: 0,
    data: {
      buses: []
    }
  };

  constructor( private SL: SlService ) {}

  ngOnInit() {
    this.getTimes();
  }

  getTimes(): void {
//    this.SL.getRealtime('9112').subscribe(res => {
//      console.log(res.ResponseData);
//      this.response = res.ResponseData;
//    });
    this.SL.getMock().subscribe(res => {
      this.LIL.updated = 1;
      this.LIL.data.buses = res.ResponseData.Buses;
      this.LIL.data.metros = res.ResponseData.Metros;
      this.LIL.data.trams = res.ResponseData.Trams;
    });
  }
}
