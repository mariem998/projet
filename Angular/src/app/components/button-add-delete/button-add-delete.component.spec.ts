import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAddDeleteComponent } from './button-add-delete.component';

describe('ButtonAddDeleteComponent', () => {
  let component: ButtonAddDeleteComponent;
  let fixture: ComponentFixture<ButtonAddDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonAddDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonAddDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
