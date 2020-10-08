import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) {

  }
  signup(value): Observable<any> {
    return this.http.post('http://localhost:4200/signup', value);
  }
}
