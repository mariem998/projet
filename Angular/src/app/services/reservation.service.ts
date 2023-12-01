import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from '../Models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private apiUrl = 'http://3.89.76.189:8081/api/reservation';

  constructor(private http: HttpClient) { }

  addReservation(carId: number,reservation: Reservation): Observable<any> {
    return this.http.post(`${this.apiUrl}/addReservation/${carId}`, reservation);
  }

  getAvailableDates(carId:number):Observable<any>{
    return this.http.get(`${this.apiUrl}/getReservation/${carId}`);
  }
}
