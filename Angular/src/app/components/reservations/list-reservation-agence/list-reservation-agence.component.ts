import { Component } from '@angular/core';
import { CarReservationAgence } from '../../../Models/list-reservation-agence.model';
import { format } from 'date-fns';

@Component({
  selector: 'app-list-reservation-agence',
  templateUrl: './list-reservation-agence.component.html',
  styleUrls: ['./list-reservation-agence.component.css']
})
export class ListReservationAgenceComponent {
  

  cars: CarReservationAgence[] = [
    new CarReservationAgence(1, 'Cheverolet SUV Car', 'assets/images/car-1.jpg', "ahmaaaaad salhiiiiiiiiiiiiii", 11255689, 995.99,new Date('2023-09-25').toISOString().split('T')[0],119),
    new CarReservationAgence(1, 'Cheverolet SUV Car', 'assets/images/car-1.jpg', "ahmaaaaad salhiiiiiiiiiiiiii", 11255689, 995.99,new Date('2023-09-25').toISOString().split('T')[0],119),
    new CarReservationAgence(1, 'Cheverolet SUV Car', 'assets/images/car-1.jpg', "ahmaaaaad salhiiiiiiiiiiiiii", 11255689, 995.99,new Date('2023-09-25').toISOString().split('T')[0],119),
    new CarReservationAgence(1, 'Cheverolet SUV Car', 'assets/images/car-1.jpg', "ahmaaaaad salhiiiiiiiiiiiiii", 11255689, 995.99,new Date('2023-09-25').toISOString().split('T')[0],119),
    new CarReservationAgence(1, 'Cheverolet SUV Car', 'assets/images/car-1.jpg', "ahmaaaaad salhiiiiiiiiiiiiii", 11255689, 995.99,new Date('2023-09-25').toISOString().split('T')[0],119),
    new CarReservationAgence(1, 'Cheverolet SUV Car', 'assets/images/car-1.jpg', "ahmaaaaad salhiiiiiiiiiiiiii", 11255689, 995.99,new Date('2023-09-25').toISOString().split('T')[0],119),
    new CarReservationAgence(1, 'Cheverolet SUV Car', 'assets/images/car-1.jpg', "ahmaaaaad salhiiiiiiiiiiiiii", 11255689, 995.99,new Date('2023-09-25').toISOString().split('T')[0],119),
    // new CarReservationAgence(2, 'Cheverolet SUV Car', 'assets/images/car-2.jpg', "ahmad salhi", 11255689, 995.99,new Date('2023-09-25')),
    // new CarReservationAgence(2, 'Cheverolet SUV Car', 'assets/images/car-2.jpg', "ahmad salhi", 11255689, 995.99,new Date('2023-09-25')),
    // new CarReservationAgence(2, 'Cheverolet SUV Car', 'assets/images/car-2.jpg',"ahmad salhi", 11255689, 995.99,new Date('2023-09-25')),
    // new CarReservationAgence(2, 'Cheverolet SUV Car', 'assets/images/car-2.jpg', "ahmad salhi", 11255689, 995.99,new Date('2023-09-25')),
    // new CarReservationAgence(2, 'Cheverolet SUV Car', 'assets/images/car-2.jpg', "ahmad salhi", 11255689, 995.99,new Date('2023-09-25')),
    // new CarReservationAgence(2, 'Cheverolet SUV Car', 'assets/images/car-2.jpg', "ahmad salhi", 11255689, 995.99,new Date('2023-09-25')),
    // Ajoutez les autres voitures ici
  ];
  showDetails(car: any) {
    // Vous pouvez ici définir la logique pour afficher les détails du véhicule, par exemple en utilisant une boîte de dialogue modale ou en redirigeant l'utilisateur vers une page de détails.
    console.log("Afficher les détails du véhicule :", car);
    // Vous pouvez implémenter la logique d'affichage des détails ici.
  }

}
