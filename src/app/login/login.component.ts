import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userError: any;
  message: string = "";
  myForm: FormGroup;
  

 
   
  constructor(public fb: FormBuilder,public authService: AuthService) {
    this.myForm = this.fb.group({
      email:  ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]]
    })
    
   }

  ngOnInit(): void {
  }

  onSubmit(form:any){
    this.authService.login(form.value.email, form.value.password)
    .then((data)=>{
      console.log(data);
      this.message= "you have been logged in successfully"
    }).catch((error)=> {
      console.log(error);
      this.userError = error;
    })
  
  }

}
