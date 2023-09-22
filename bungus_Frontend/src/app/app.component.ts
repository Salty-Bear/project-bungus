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
    this.accessToken.getToken().subscribe(
      (res: any) => {
        console.log(res);
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

}
