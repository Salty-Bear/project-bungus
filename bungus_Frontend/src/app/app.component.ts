import { Component } from '@angular/core';
import { AccessTokenService } from 'src/services/access-token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bungus_Frontend';

  constructor(private accessToken: AccessTokenService) { }

  getToken() {
    this.accessToken.getToken().subscribe({
      next: (response: any) => {
        console.log(response);

        localStorage.setItem('access_token', response.access_token);

      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

}
