import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Cars } from '../Models/cars';
import { CarDTO } from '../Models/CarDTO';
@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private apiUrl = 'http://3.89.76.189:8081/api/cars';


  constructor(private http: HttpClient) { }

  addCarWithImage(carData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/addCar`, carData);
  }

  getCarById(carId: number): Observable<CarDTO> {
    return this.http.get<CarDTO>(`${this.apiUrl}/getCarById/${carId}`);
  }

  updateCar(carId: number, formData: FormData): Observable<any> {
    const headers = new HttpHeaders({
      'enctype': 'multipart/form-data'
    });

    return this.http.put(`${this.apiUrl}/updateCar/${carId}`, formData, { headers });
  }


  getAllCars(): Observable<CarDTO[]> {
    return this.http.get<CarDTO[]>(`${this.apiUrl}/getAllCars`);
  }

  delete(carId: number): Observable<void> {
    const url = `${this.apiUrl}/delete/${carId}`;
    return this.http.delete(url, { responseType: 'text' }).pipe(
      catchError((error: any) => {
        console.error('Error deleting car:', error);
        throw error;
      }),
      map((response: any) => {
        console.log(response);
        return;
      })
    );
  }
}
