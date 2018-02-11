import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class MetarService {
  
  
  
  constructor(private http: HttpClient) {
  }
  getMetar(): Observable<any> {
    return this.http.get('https://stvstr.herokuapp.com/api/metar');
  }
  getMetarDecoded(): Observable<any> {
    return this.http.get('https://stvstr.herokuapp.com/api/metar/decoded');
  }
}