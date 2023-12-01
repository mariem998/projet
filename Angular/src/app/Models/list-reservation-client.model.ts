// car.model.ts

export class CarReservationClient {
    constructor(
      public id: number,
      public name: string,
      public imageUrl: string,
      public agency: string,
      public prix : number,
      public reservationDate: string,
    ) {}
  }
  