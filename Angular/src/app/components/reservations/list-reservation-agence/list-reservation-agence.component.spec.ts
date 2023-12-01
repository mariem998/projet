import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReservationAgenceComponent } from './list-reservation-agence.component';

describe('ListReservationAgenceComponent', () => {
  let component: ListReservationAgenceComponent;
  let fixture: ComponentFixture<ListReservationAgenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListReservationAgenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListReservationAgenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
