import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'app-singup-user',
  templateUrl: './singup-user.component.html',
  styleUrls: ['./singup-user.component.css']
})
export class SingupUserComponent {
  userData: User = {
    username: '',
    email: '',
    drivingLicense: '',
    password: ''
  };
  userDataForm: FormGroup;
  usernameExists = false;
  
  constructor(
    private formBuilder: FormBuilder,
    private authService : AuthenticateService,
    private router : Router
    ) {
      this.userDataForm = this.formBuilder.group({
        username: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        drivingLicense: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(6)]],
      });
    }

  onSubmit() {
  }

  signUp() {
    if (this.userDataForm.valid) {
      this.authService.signupUser(this.userDataForm.value).subscribe(
        (response) => {
          console.log('Successful registration', response);
          this.router.navigate(['/home']);
        },
        (error) => {
          this.usernameExists = true;
           console.error('Registration error:', error);
      }
      );
    }
  }
}
