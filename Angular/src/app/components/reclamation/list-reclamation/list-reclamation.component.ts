import { Component } from '@angular/core';
import { ListReclamation } from '../../../Models/reclamation';

@Component({
  selector: 'app-list-reclamation',
  templateUrl: './list-reclamation.component.html',
  styleUrls: ['./list-reclamation.component.css']
})
export class ListReclamationComponent {
  cars: ListReclamation[] = [
    new ListReclamation(1, "Ahmad Salhi","voiture alouer est en panne"),
    new ListReclamation(1, "Ahmad Salhi","voiture alouer est en panne"),
    new ListReclamation(1, "Ahmad Salhi","voiture alouer est en panne"),
    new ListReclamation(1, "Ahmad Salhi","voiture alouer est en panne"),
    new ListReclamation(1, "Ahmad Salhi","voiture alouer est en panne"),
    new ListReclamation(1, "Ahmad Salhi","voiture alouer est en panne"),
    
   
  ];

}
