import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVoitureUserComponent } from './list-voiture-user.component';

describe('ListVoitureUserComponent', () => {
  let component: ListVoitureUserComponent;
  let fixture: ComponentFixture<ListVoitureUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListVoitureUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListVoitureUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
