import { Component } from '@angular/core';
import { CarReservationClient } from '../../../Models/list-reservation-client.model';

@Component({
  selector: 'app-list-reservation-client',
  templateUrl: './list-reservation-client.component.html',
  styleUrls: ['./list-reservation-client.component.css']
})
export class ListReservationClientComponent {
  cars: CarReservationClient[] = [
    new CarReservationClient(1, 'Cheverolet SUV Car', 'assets/images/car-1.jpg', "KaryaaaExpresssss", 119, new Date('2023-09-25').toISOString().split('T')[0]),
    new CarReservationClient(1, 'Cheverolet SUV Car', 'assets/images/car-1.jpg', "KaryaaaExpresssss", 119, new Date('2023-09-25').toISOString().split('T')[0]),
    new CarReservationClient(1, 'Cheverolet SUV Car', 'assets/images/car-1.jpg', "KaryaaaExpresssss", 119, new Date('2023-09-25').toISOString().split('T')[0]),
    new CarReservationClient(1, 'Cheverolet SUV Car', 'assets/images/car-1.jpg', "KaryaaaExpresssss", 119, new Date('2023-09-25').toISOString().split('T')[0]),
    new CarReservationClient(1, 'Cheverolet SUV Car', 'assets/images/car-1.jpg', "KaryaaaExpresssss", 119, new Date('2023-09-25').toISOString().split('T')[0]),

  ];
  showDetails(car: any) {
    // Vous pouvez ici définir la logique pour afficher les détails du véhicule, par exemple en utilisant une boîte de dialogue modale ou en redirigeant l'utilisateur vers une page de détails.
    console.log("Afficher les détails du véhicule :", car);
    // Vous pouvez implémenter la logique d'affichage des détails ici.
  }

}
