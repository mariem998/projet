import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Agency } from '../Models/agency';
import { User } from '../Models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://3.89.76.189:8081/api/user';

  constructor(private http: HttpClient) { }

  getAllAgencies(): Observable<Agency[]> {
    return this.http.get<Agency[]>(`${this.apiUrl}/getAllAgencies`);
  }

  deleteAgency(agencyId: number): Observable<void> {
    const url = `${this.apiUrl}/deleteAgency/${agencyId}`;

    return this.http.delete(url, { responseType: 'text' }).pipe(
      catchError((error: any) => {
        console.error('Error deleting agency:', error);
        throw error;
      }),
      map((response: any) => {
        console.log(response);
        return;
      })
    );
  }

  deleteUser(userId: number): Observable<void> {
    const url = `${this.apiUrl}/deleteUser/${userId}`;

    return this.http.delete(url, { responseType: 'text' }).pipe(
      catchError((error: any) => {
        console.error('Error deleting user:', error);
        throw error;
      }),
      map((response: any) => {
        console.log(response);
        return;
      })
    );
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/getAllUsers`);
  }
}
