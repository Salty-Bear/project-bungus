import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccessTokenService {

  constructor(private http: HttpClient) { }

  getToken(): Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    
    const body = 'grant_type=client_credentials&client_id=9c5b7572134d442991db9a5b24baa924&client_secret=45a81c2fd04a43b6a9b3c2889cf4aa49';
    
    return this.http.post('https://accounts.spotify.com/api/token', body, { headers });

  }

}
