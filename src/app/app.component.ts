import { Component } from '@angular/core';
import { AbstractControl, AbstractControlOptions, FormBuilder, FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scribe';
  userError: any;
  message: string = "";
  options: AbstractControlOptions = {
    validators: this.checkIfMatchingPassword
  };

  myForm = this.fb.group({
    firstName: ['', [Validators.required,Validators.pattern,Validators.min]],
    lastName: ['', [Validators.required,Validators.min]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required,Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required]]
  }, this.options)

  constructor(private fb: FormBuilder) {
    
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
