import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccessTokenService {

  constructor(private http: HttpClient) { }

  getToken(): Observable<any> {

    return this.http.get('http://localhost:8080/getToken');

  }

}
