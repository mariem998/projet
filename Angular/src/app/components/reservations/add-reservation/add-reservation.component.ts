import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from 'src/app/Models/reservation';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent implements OnInit{
  listDateReserv:string[]=[];

  minDate= new Date(2023, 9, 9);
  maxDate= new Date(2023, 11, 31);

  myDateFilter = (m: Date| null): boolean => {
    let list :number[]=[];
    this.listDateReserv.forEach(element => {

    let xx=new Date(element);
    let reservation=new Date(xx.getFullYear(), xx.getMonth(),xx.getDate())
    list.push(Date.parse(reservation.toISOString()))

  });
    return !list.includes(Date.parse(m!.toISOString()));
  }




  reservation: any = {};

  constructor(private reservationService: ReservationService,
    private route: ActivatedRoute,
    private router: Router) { }



  addReservation() {
      const reservation: Reservation = {
        address: this.reservation.address,
        registration: this.reservation.registration,
        phone: this.reservation.phone,
        dateDebut: this.reservation.dateDebut,
        dateFin: this.reservation.dateFin,
        Status: this.reservation.Status
      };
      const carId = this.route.snapshot.params['id'];
      this.reservationService.addReservation(carId ,reservation).subscribe(
        (response) => {
          console.log('Reservation added successfully:', reservation.dateDebut);
          this.reservation = {};
        },
        (error) => {
          console.error('Error adding reservation:', error);
        }
      );

  }

  ngOnInit(): void {

    const carId = this.route.snapshot.params['id'];
    this.listDateReserv=[];
    this.reservationService.getAvailableDates(carId).subscribe(
      (response) => {
        console.log('Dates How are Not available :', response);
          this.listDateReserv=response;
      },
      (error) => {
        console.error('Error getting dates :', error);
      }
    );
  }
}
