import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVoitureAgenceComponent } from './list-voiture-agence.component';

describe('ListVoitureAgenceComponent', () => {
  let component: ListVoitureAgenceComponent;
  let fixture: ComponentFixture<ListVoitureAgenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListVoitureAgenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListVoitureAgenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
