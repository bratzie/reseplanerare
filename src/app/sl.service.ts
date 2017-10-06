import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { API } from './private';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class SlService {
  API = new API();
  places = [
    { name: 'Sjövikstorget', code: 1594 },
    { name: 'Sjöviksvägen', code: 1595 },
    // { name: 'Slussen', code: 9192 },
    { name: 'Liljeholmen', code: 9294 },
    // { name: 'Alvik', code: 9112 },
  ]

  constructor( private http: Http ) {}

  getRealtime(place: string) {
    return this.http.get(`/realtime${this.API.getRealtimeParametersForPlace(place)}`).map(res => res.json());
  }

  getMock() {
    return this.http.get('assets/mock/9294.json').map(res => res.json());
  }
}
