import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SingupUserComponent } from './components/singup-user/singup-user.component';
import { LoginComponent } from './components/login/login.component';
import { DetailCarComponent } from './components/cars/detail-car/detail-car.component';
import { SingupAgencyComponent } from './components/singup-agency/singup-agency.component';
import { DetailReservationComponent } from './components/reservations/detail-reservation/detail-reservation.component';
import { ConditionComponent } from './components/condition/condition.component';

import { ListReservationAgenceComponent } from './components/reservations/list-reservation-agence/list-reservation-agence.component';
import { ListReservationClientComponent } from './components/reservations/list-reservation-client/list-reservation-client.component';
import { ListVoitureUserComponent } from './components/cars/list-voiture-user/list-voiture-user.component';
import { ListVoitureAgenceComponent } from './components/cars/list-voiture-agence/list-voiture-agence.component';

import { AddCarComponent } from './components/cars/add-car/add-car.component';
import { AddReclamationComponent } from './components/reclamation/add-reclamation/add-reclamation.component';
import { AddReservationComponent } from './components/reservations/add-reservation/add-reservation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CalendarComponent } from './components/calendar/calendar.component';
import { MatNativeDateModule } from '@angular/material/core';


import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faInfoCircle, faExclamationTriangle, faWarning } from '@fortawesome/free-solid-svg-icons';
import { ButtonDetailsEditComponent } from './components/button-details-edit/button-details-edit.component';
import { ButtonAddDeleteComponent } from './components/button-add-delete/button-add-delete.component';
import { ListAgenceComponent } from './components/agency/list-agence/list-agence.component';
import { ListReclamationComponent } from './components/reclamation/list-reclamation/list-reclamation.component';
import { ListClientComponent } from './components/client/list-client/list-client.component';
import { EditCarComponent } from './edit-car/edit-car.component';
import { ButtonReserveComponent } from './components/button-reserve/button-reserve.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    DashboardComponent,

    SingupUserComponent,
    LoginComponent,
    DetailCarComponent,
    SingupAgencyComponent,
    DetailReservationComponent,
    ConditionComponent,


    ListReservationAgenceComponent,
    ListReservationClientComponent,
    ListVoitureUserComponent,
    ListVoitureAgenceComponent,
    ButtonDetailsEditComponent,
    ButtonAddDeleteComponent,
    ListAgenceComponent,
    ListReclamationComponent,
    ListClientComponent,

    AddCarComponent,
    AddReclamationComponent,
    AddReservationComponent,
    CalendarComponent,
    EditCarComponent,
    ButtonReserveComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
