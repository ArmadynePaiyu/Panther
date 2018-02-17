import { Injectable, NgZone } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { error } from 'selenium-webdriver';

@Injectable()
export class AuthService {
  constructor(_auth:AngularFireAuth) {
  }

  get CurrentUser():Observable<firebase.User>{
    return Observable.create(obs=>{
      return firebase.auth().onAuthStateChanged(
        user=>obs.next(user),
        error=>obs.error(error),
        ()=>obs.complete()
      );
    })
  }
  SignUp=function(email, password):void{
    firebase.auth().createUserWithEmailAndPassword(email, password).then(user=>console.log(user),error=>alert(error.message));
  }
  LogInEmail=function(email, password):void{
    firebase.auth().signInWithEmailAndPassword(email,password).then(user=>console.log(user),error=>alert(error.message));
  }
  LoginGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
    .then(obj=>console.log(obj))
    .catch(error=>alert(error));
  }
  LogOut=function():void{
    firebase.auth().signOut().then(user=>this.TakeOut(),error=>alert(error.message));
  }
}
