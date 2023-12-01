import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonReserveComponent } from './button-reserve.component';

describe('ButtonReserveComponent', () => {
  let component: ButtonReserveComponent;
  let fixture: ComponentFixture<ButtonReserveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonReserveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonReserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
