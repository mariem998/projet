import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
    username = '';
    password = '';
    loginError = false;

  constructor(private authService: AuthenticateService, private router: Router, private http: HttpClient) {}

  onSubmit() {
    const enteredUsername = this.username;
    const enteredPassword = this.password;

    console.log('Entered Username:', enteredUsername);
    console.log('Entered Password:', enteredPassword);

    const data = {
      username: enteredUsername,
      password: enteredPassword
    };
    this.authService.loginUser(data).subscribe(
      (response) => {
        console.log('Login successful', response);
        
        this.authService.getUserIdByUsername(data.username).subscribe(
          (userId) => {
            console.log('User ID:', userId);
          },
          (error) => {
            console.error('Error getting user ID:', error);
          }
        );       
        
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('Login error:', error);
        this.loginError = true;
      }
    );
  }
}
