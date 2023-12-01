// car.model.ts

export class CarReservationAgence {
    constructor(
      public id: number,
      public name: string,
      public imageUrl: string,
      public nameClient: string,
      public drivinglicence: number,
      public monthlyRate: number,
      public reservationDate: string,
      public prix : number,
    ) {}
  }
  