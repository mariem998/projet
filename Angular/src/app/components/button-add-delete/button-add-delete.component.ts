import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-button-add-delete',
  template: '<button (click)="onDelete()">Delete</button>',
  styleUrls: ['./button-add-delete.component.css']
})
export class ButtonAddDeleteComponent {

  constructor(private carsService: CarsService) { }
  
  @Output() deleteClicked = new EventEmitter<void>();

  onDelete(): void {
    this.deleteClicked.emit();
  }  
}
