import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { GoogleAuthProvider, GithubAuthProvider, user } from '@angular/fire/auth';
import { BehaviorSubject} from 'rxjs'
import { User } from 'src/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth: AngularFireAuth,private router : Router) { }

  ngOnInit(){
  }

  isUserLoggedIn = new BehaviorSubject<boolean>(false)

/* ############################################################
  Auto Login Feature 
 ############################################################ */

 autologin(){
  let userdata:{
    email:string,
    token:string,
    username:string
  }=JSON.parse(localStorage.getItem('user') || '{}') 
  console.log(user)
  if(!user){
    return;
  }

  this.isUserLoggedIn.next(true)

 }



/* ############################################################
  Creating Sign in with google service for logging in
 ############################################################ */

  googleSignIn(){
    return this.fireauth.signInWithPopup(new GoogleAuthProvider).then(
      res =>{
        this.router.navigate(['/dashboard'])
        const user = new User(
          JSON.stringify(res.user?.email),
          JSON.stringify(res.user?.uid),
          JSON.stringify(res.user?.displayName)
        )
        localStorage.setItem('user',JSON.stringify(user));
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

