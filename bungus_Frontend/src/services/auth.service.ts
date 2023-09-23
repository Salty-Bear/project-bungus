import { Injectable } from '@angular/core';
// import { AngularFireAuth} from
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { GoogleAuthProvider, GithubAuthProvider } from '@angular/fire/auth';
import { BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth: AngularFireAuth,private router : Router) { }

  isUserLoggedIn = new BehaviorSubject<boolean>(false)

/* ############################################################
  Creating Sign in with google service for logging in
 ############################################################ */

  googleSignIn(){
    return this.fireauth.signInWithPopup(new GoogleAuthProvider).then(
      res =>{
        this.router.navigate(['/dashboard'])
        localStorage.setItem('token',JSON.stringify(res.user?.uid))
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

    githubSignIn(){
      return this.fireauth.signInWithPopup(new GithubAuthProvider).then(
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

