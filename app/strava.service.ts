import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class StravaService {
  
  constructor(private http: HttpClient) {
  }
  getUser(): Observable<any> {
    return this.http.get('https://stvstr.herokuapp.com/api/strava/user/get');
  }
  getBike(): Observable<any> {
    return this.http.get('https://stvstr.herokuapp.com/api/strava/bike/get');
  }
  getActivities(): Observable<any> {
    return this.http.get('https://stvstr.herokuapp.com/api/strava/activities/get');
  }
}