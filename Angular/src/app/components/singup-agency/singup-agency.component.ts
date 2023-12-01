import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Agency } from 'src/app/Models/agency';
import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'app-singup-agency',
  templateUrl: './singup-agency.component.html',
  styleUrls: ['./singup-agency.component.css']
})
export class SingupAgencyComponent {

  agencyData: Agency = {
    username: '',
    managerName: '',
    email: '',
    address: '',
    taxRegistrationNumber: '',
    number: '',
    password: ''
  };
  agencyDataForm: FormGroup;
  usernameExists = false;
  
  constructor(
    private formBuilder: FormBuilder,
    private authService : AuthenticateService,
    private router : Router
    ) {
      this.agencyDataForm = this.formBuilder.group({
        username: ['', [Validators.required]],
        managerName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        address: ['', [Validators.required]],
        taxRegistrationNumber: ['', [Validators.required]],
        number: ['', [Validators.required, Validators.minLength(6)]],
        password: ['', [Validators.required, Validators.minLength(6)]],
      });
    }

  onSubmit() {
  }

  signUp(){
    if (this.agencyDataForm.valid) {
      this.authService.signupAgency(this.agencyDataForm.value).subscribe(
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