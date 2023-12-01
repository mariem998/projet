import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarsService } from 'src/app/services/cars.service';
import { CarDTO } from 'src/app/Models/CarDTO';
import { FormBuilder, Validators } from '@angular/forms';
import { Cars } from '../Models/cars';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {
  car: Cars = new Cars();

  constructor(
    private carsService: CarsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    const carId = this.route.snapshot.params['id'];

    this.carsService.getCarById(carId).subscribe(
      (car: Cars) => {
        this.car = car;
      },
      (error) => {
        console.error('Error fetching car details:', error);
      }
    );
  }

  onUpdate() {
    const formData = new FormData();

    formData.append('id', this.car.id?.toString() || '');
    formData.append('model', this.car.model || '');
    formData.append('name', this.car.name || '');
    formData.append('nb_doors', this.car.nb_doors?.toString() || '');
    formData.append('price_per_day', this.car.price_per_day?.toString() || '');
    formData.append('description', this.car.description || '');
    formData.append('file', this.car.photo as File);
    formData.append('address', this.car.address || '');
    formData.append('registration_num', this.car.registration_num || '');
    formData.append('gearbox', this.car.gearbox || '');
    formData.append('nb_places', this.car.nb_places?.toString() || '');

  const carId = this.route.snapshot.params['id'];

  this.carsService.updateCar(carId, formData).subscribe(
    (response) => {
      console.log('Backend response:', response);
      
    },
    (error) => {
      console.error('Error updating car:', error);
    }
  );
  }

  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      this.car.photo = event.target.files[0] as File;
    }
  }
}