import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  private apiUrl = 'http://3.89.76.189:8081/api';

  constructor(private http: HttpClient) {
  }

  signupAgency(agencyData: any): Observable<any> {
    return this.checkUsernameExistsAgency(agencyData.username).pipe(
      switchMap((usernameExists) => {
        if (usernameExists) {
          return throwError('Agency already exists.');
        } else {
          return this.http.post(`${this.apiUrl}/registerAgency`, agencyData);
        }
      }),
      catchError((error) => {
        console.error('Error sign up', error);
        return throwError('Error sign up.');
      })
    );
  }

  signupUser(userData: any): Observable<any> {
    return this.checkUsernameExists(userData.username).pipe(
      switchMap((usernameExists) => {
        if (usernameExists) {
          return throwError('User already exists');
        } else {
          return this.http.post(`${this.apiUrl}/register`, userData);
        }
      }),
      catchError((error) => {
        console.error('Error sign up :', error);
        return throwError('Error sign up.');
      })
    );
  }

  private checkUsernameExists(username: string): Observable<boolean> {
    const url = `${this.apiUrl}/user/checkUsername?username=${username}`;
    return this.http.get<boolean>(url);
  }

  private checkUsernameExistsAgency(username: string): Observable<boolean> {
    const url = `${this.apiUrl}/user/checkUsernameAgency?username=${username}`;
    return this.http.get<boolean>(url);
  }

  loginUser(loginData: any): Observable<any> {
    const body = new HttpParams()
      .set('username', loginData.username)
      .set('password', loginData.password);

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');

    return this.http.post(`${this.apiUrl}/authenticate`, body.toString(), { headers })
      .pipe(
        tap((response: any) => {
          localStorage.setItem('token', response.token);
          this.getUserIdByUsername(loginData.username).subscribe(
            (userId) => {
              localStorage.setItem('userId', userId.toString());
            },
            (error) => {
              console.error('Error getting user ID:', error);
            }
          );
        }),
        catchError((error) => {
          console.error('Error:', error);
          return throwError('Error login.');
        })
      );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('token') !== null;
  }

  getUserIdFromUsername(username: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/getUserId?username=${username}`);
  }

  getUserIdByUsername(username: string): Observable<number> {
    const url = `${this.apiUrl}/user/getUserId/${username}`;
    return this.http.get<number>(url);
  }

}
