package com.mycompany.rentCar.Services;

import com.mycompany.rentCar.Entities.Reservation;
import com.mycompany.rentCar.Repositories.ReservationRepository;

import java.util.List;

public interface ReservationService {

    Reservation addReservation(Reservation reservation);
    public List<Reservation> getReservationsByCarId(long carId);
}
