import { Component, EventEmitter, Output } from '@angular/core';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-button-details-edit',
  template: '<button (click)="onEdit()">edit</button>',
  styleUrls: ['./button-details-edit.component.css']
})
export class ButtonDetailsEditComponent {

  constructor(private carsService: CarsService) { }

  
  @Output() editClicked = new EventEmitter<void>();

  onEdit(): void {
    this.editClicked.emit();
  }
}
