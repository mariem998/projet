import { Component } from '@angular/core';
import { Cars } from 'src/app/Models/cars';
import { CarsService } from 'src/app/services/cars.service';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent {
  constructor(
    private carsService: CarsService,
    private router: Router) { }

  car: Cars = new Cars();
 
  onSubmit() {
    const formData = new FormData();
  
   
    if (this.car.model) {
      formData.append('model', this.car.model);
    } else {
    
      formData.append('model', ''); 
    }
    formData.append('name', this.car.name || '');
    formData.append('nb_doors', this.car.nb_doors?.toString() || ''); 
    formData.append('price_per_day', this.car.price_per_day?.toString() || '');
    formData.append('description', this.car.description || '');
    formData.append('file', this.car.photo as File); 
    formData.append('address', this.car.address || '');
    formData.append('registration_num', this.car.registration_num || '');
    formData.append('gearbox', this.car.gearbox || '');
    formData.append('nb_places', this.car.nb_places?.toString() || '');

    this.carsService.addCarWithImage(formData).subscribe(
      (response) => {
        console.log('Réponse du backend :', response);
        window.location.href = '/list-voiture-user';
      },
      (error) => {
        console.error('Erreur lors de l\'envoi des données au backend :', error);
      }
    );
  }
  
  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      this.car.photo = event.target.files[0] as File;
    }
  }
}
