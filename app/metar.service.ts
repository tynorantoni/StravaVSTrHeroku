import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class MetarService {
  
  constructor(private http: HttpClient) {
  }
  getAll(): Observable<any> {
    return this.http.get('localhost:8080/api/krk2');
  }
}