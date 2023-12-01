import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SingupUserComponent } from './components/singup-user/singup-user.component';
import { DetailCarComponent } from './components/cars/detail-car/detail-car.component';
import { SingupAgencyComponent } from './components/singup-agency/singup-agency.component';
import { DetailReservationComponent } from './components/reservations/detail-reservation/detail-reservation.component';
import { ConditionComponent } from './components/condition/condition.component';

import { ListReservationAgenceComponent } from './components/reservations/list-reservation-agence/list-reservation-agence.component';
import { ListReservationClientComponent } from './components/reservations/list-reservation-client/list-reservation-client.component';
import { ListVoitureUserComponent } from './components/cars/list-voiture-user/list-voiture-user.component';
import { ListVoitureAgenceComponent } from './components/cars/list-voiture-agence/list-voiture-agence.component';
import { ListAgenceComponent } from './components/agency/list-agence/list-agence.component';
import { ListReclamationComponent } from './components/reclamation/list-reclamation/list-reclamation.component';
import { ListClientComponent } from './components/client/list-client/list-client.component';

import { AddCarComponent } from './components/cars/add-car/add-car.component';
import { AddReclamationComponent } from './components/reclamation/add-reclamation/add-reclamation.component';
import { AddReservationComponent } from './components/reservations/add-reservation/add-reservation.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { EditCarComponent } from './edit-car/edit-car.component';


const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'inscrire-user',
    component: SingupUserComponent
  },
  {
    path: 'inscrire-agency',
    component: SingupAgencyComponent
  },
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '',
      redirectTo: 'home',
      pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'detail-car',
        component: DetailCarComponent
      },
      {
        path: 'detail-reservation',
        component: DetailReservationComponent
      },
      {
        path: 'condition',
        component: ConditionComponent
      },
      {
        path: 'reservation-agence',
        component: ListReservationAgenceComponent
      },
      {
        path: 'reservation-client',
        component: ListReservationClientComponent
      },
      {
        path: 'list-voiture-user',
        component: ListVoitureUserComponent
      },
      {
        path: 'list-voiture-agence',
        component: ListVoitureAgenceComponent
      },
      {
        path: 'list-agence',
        component: ListAgenceComponent
      },
      {
        path: 'list-reclamation',
        component: ListReclamationComponent
      },
      {
        path: 'list-client',
        component: ListClientComponent
      },
      {
        path: 'addcar',
        component: AddCarComponent
      },
      {
        path: 'addrec',
        component: AddReclamationComponent
      },
      {
        path: 'reservation/:id',
        component: AddReservationComponent
      },
      {
        path: 'calendar',
        component:CalendarComponent
      },
      {
        path: 'edit-car/:id',
        component:EditCarComponent
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
