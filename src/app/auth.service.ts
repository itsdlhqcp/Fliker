import { Injectable } from '@angular/core';
import 'firebase/auth';
import firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login (email:string,password:string){
   return firebase.auth().createUserWithEmailAndPassword(email,password);
  }

  
  signup(email: String,password:String,
    first_name:string,last_name:string){
   
  }
}
