import { Component, OnInit } from '@angular/core';
import { AbstractControl, AbstractControlOptions,FormBuilder, FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';

import 'firebase/auth';
import firebase from 'firebase';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  
  
})
export class SignupComponent implements OnInit {

  userError: any;
  message: string = "";
  options: AbstractControlOptions = {
    validators: this.checkIfMatchingPassword
  };

  // myForm: FormGroup;
 
  
 

  myForm = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    email: new FormControl('',Validators.email),
    password: new FormControl('',Validators.minLength(8)),
    confirmPassword: new FormControl('',Validators.required),
  },this.options);



  ngOnInit() :void{
   
  }
  onSubmit(signupform: any){
    // alert("Hello");
    let email: string = signupform.value.email;
    let password: string = signupform.value.password;
    let firstName: string = signupform.value.firstName;
    let lastName: string = signupform.value.lastName;

    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then((response)=>{
      console.log(response);
      let randomNumber = Math.floor(Math.random() * 1000)
         response.user?.updateProfile({
              displayName: firstName + " "+ lastName,
              photoURL: "https://robohash.org/" + randomNumber
         }).then(()=>{
          this.message = "you have been signedUp successfully!Please login"
         })
    }).catch((error)=>{
      console.log(error);
      this.userError = error;
    })
    }
    checkIfMatchingPassword(form: AbstractControl): ValidationErrors|null {
      if(form.get("password")?.value != form.get("confirmPassword")?.value) {
        return {
          "notEqualToPassword": true,
        };
      }
      return null;
    }
}
