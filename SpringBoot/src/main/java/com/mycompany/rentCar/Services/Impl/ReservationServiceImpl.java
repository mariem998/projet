package com.mycompany.rentCar.Services.Impl;

import com.mycompany.rentCar.Entities.Reservation;
import com.mycompany.rentCar.Repositories.ReservationRepository;
import com.mycompany.rentCar.Services.ReservationService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@AllArgsConstructor
public class ReservationServiceImpl implements ReservationService {
    private final ReservationRepository reservationRepository;

    @Override
    public Reservation addReservation(Reservation reservation){ return reservationRepository.save(reservation);}
    @Transactional
    public List<Reservation> getReservationsByCarId(long carId) {
        return reservationRepository.findByCarId(carId);
    }

}
