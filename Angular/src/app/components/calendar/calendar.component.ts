import { Component, EventEmitter, Input, OnInit, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { el } from 'date-fns/locale';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit{

  //@Input() dateSelectionnee: Date | undefined;
  @Output() selectedDate:EventEmitter<any> = new EventEmitter<any>();

  listDateReserv: Date[] =[ new Date(2023, 10, 29), new Date(2023, 10,30), new Date(2023,9,5) ];

  minDate= new Date(2023, 9, 9);
  maxDate= new Date(2023, 11, 31);
  constructor(){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  myDateFilter = (m: Date| null): boolean => {
    let list :number[]=[];
    this.listDateReserv.forEach(element => {
    let reservation=new Date(element.getFullYear(), element.getMonth()-1,element.getDate())
    list.push(Date.parse(reservation.toISOString()))

  });
    return !list.includes(Date.parse(m!.toISOString()));
  }




  onDateChange(dateSelected: any) {
    this.selectedDate.emit(dateSelected);
    console.log('Selected date in CalendarComponent:', dateSelected);
  }

}


