import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDetailsEditComponent } from './button-details-edit.component';

describe('ButtonDetailsEditComponent', () => {
  let component: ButtonDetailsEditComponent;
  let fixture: ComponentFixture<ButtonDetailsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonDetailsEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonDetailsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
