import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {

    if(request.headers.get("No-Auth") === "True" ) {
      return next.handle(request);
    }

    const token = localStorage.getItem('token')!.replace(/"/g, ''); //removes double quotes from the start and end of the token

    const modifiedRequest = request.clone( { setHeaders: { Authorization: "Bearer " + token } } );

    return next.handle(modifiedRequest);

  }
}
