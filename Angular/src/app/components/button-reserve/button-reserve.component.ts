import { Component, EventEmitter, Output } from '@angular/core';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-button-reserve',
  template: '<button (click)="onReserve()">reserve</button>',
  styleUrls: ['./button-reserve.component.css']
})
export class ButtonReserveComponent {
  constructor(private carsService: CarsService) { }

  @Output() reserveClicked = new EventEmitter<void>();

  onReserve(): void {
    this.reserveClicked.emit();
  }
}
