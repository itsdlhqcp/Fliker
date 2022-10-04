import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import firebase from 'firebase';
import 'firebase/auth';
import { LoginComponent } from './login/login.component';


let firebaseConfig = {
  apiKey: "AIzaSyDwq-bPHzErNhsmLjG-qigrfnGwooq0NRg",
  authDomain: "hackhub-32fad.firebaseapp.com",
  projectId: "hackhub-32fad",
  storageBucket: "hackhub-32fad.appspot.com",
  messagingSenderId: "468810092742",
  appId: "1:468810092742:web:0be048ca6422b9517b07c7"
};
firebase.initializeApp(firebaseConfig);


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
