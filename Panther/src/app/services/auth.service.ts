import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';

@Injectable()
export class AuthService {

  constructor(public ath:AngularFireAuth) { }

  WithEmailAndPassword(username,password){

    return this.ath.auth.createUserWithEmailAndPassword(username,password).then
    ((res) => {
      console.log(res);
    })

  }



}
