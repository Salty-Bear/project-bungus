import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { GoogleAuthProvider, GithubAuthProvider, idToken, user } from '@angular/fire/auth';
import { BehaviorSubject} from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: AngularFireAuth,
    private router : Router,
    private http: HttpClient) { }

  isUserLoggedIn = new BehaviorSubject<boolean>(false)

/* ############################################################
  Creating Sign in with google service for logging in
 ############################################################ */

  googleSignIn() {
    return this.fireAuth.signInWithPopup(new GoogleAuthProvider).then(
      (res: any) =>{

        this.fireAuth.idToken.subscribe(
          (token: any) => {
            localStorage.setItem('token', JSON.stringify(token));
          }
        );

        this.router.navigate(['/dashboard'])
        this.isUserLoggedIn.next(true)
      },
      err =>{
        alert(err.message)
      }
    )

  }


/* ############################################################
  Creating Sign in with Github service for logging in
 ############################################################ */

    githubSignIn() {
      return this.fireAuth.signInWithPopup(new GithubAuthProvider).then(
        res => {
          this.router.navigate(['/dashboard'])
          localStorage.setItem('token',JSON.stringify(res.user?.uid))
        },
        err =>{
          alert(err.message)
        }
      )
    }

  }

