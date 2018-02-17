import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {MaterializeModule} from 'angular2-materialize' ;
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {RouterModule,Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { Component } from '@angular/core/src/metadata/directives';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

export const firebase = {
  apiKey: "AIzaSyCI5BDcKoHYre2-YAVeVFPLrrMu_J_rDIQ",
  authDomain: "blackpanther-6880b.firebaseapp.com",
  databaseURL: "https://blackpanther-6880b.firebaseio.com",
  projectId: "blackpanther-6880b",
  storageBucket: "blackpanther-6880b.appspot.com",
  messagingSenderId: "778400565752"

}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebase),
    MaterializeModule,
    RouterModule.forRoot([
      {
          path : "",
          component : HomeComponent

      }
    ]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
