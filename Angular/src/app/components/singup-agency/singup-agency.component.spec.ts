import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingupAgencyComponent } from './singup-agency.component';

describe('SingupAgencyComponent', () => {
  let component: SingupAgencyComponent;
  let fixture: ComponentFixture<SingupAgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingupAgencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingupAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
