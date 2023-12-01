package com.mycompany.rentCar.Controllers;

import com.mycompany.rentCar.CarDTO.ReservationDTO;
import com.mycompany.rentCar.Entities.Reservation;
import com.mycompany.rentCar.Repositories.CarsRepository;
import com.mycompany.rentCar.Repositories.ReservationRepository;
import com.mycompany.rentCar.Services.CarsService;
import com.mycompany.rentCar.Services.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://3.89.76.189:4200")
@RestController
@RequestMapping("/api/reservation")
public class ReservationController {

    private final ReservationService reservationService;
    private final CarsRepository carsRepository;
    private final ReservationRepository reservationRepository;
    private final CarsService carsService;

    @Autowired
    public ReservationController(ReservationService reservationService, CarsRepository carsRepository, ReservationRepository reservationRepository, CarsService carsService) {
        this.reservationService = reservationService;
        this.carsRepository = carsRepository;
        this.reservationRepository = reservationRepository;
        this.carsService = carsService;
    }


    @PostMapping("/addReservation/{car_id}")
    public Reservation addReservation(@PathVariable(value = "car_id") Long car_id, @RequestBody Reservation reservationRequest) {
        return carsRepository.findById(car_id).map(cars -> {
            reservationRequest.setCar(cars);

            return reservationRepository.save(reservationRequest);
        }).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "carId " + car_id + " not found"));
    }


    @GetMapping("/getReservation/{car_id}")
    public  ResponseEntity<List<LocalDate>> getReservationsByCarId(@PathVariable long car_id) {
        List<Reservation> reservations = reservationService.getReservationsByCarId(car_id);
        List<ReservationDTO> reservationDates = new ArrayList<>();
        List<LocalDate> allDates = new ArrayList<>();
        for (Reservation reservation : reservations) {
            LocalDate dateDebut = reservation.getDateDebut().toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
            LocalDate dateFin = reservation.getDateFin().toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
            while (!dateDebut.isAfter(dateFin)) {
                allDates.add(dateDebut);
                dateDebut = dateDebut.plusDays(1);
            }
            }
        return  new ResponseEntity<>(allDates, HttpStatus.OK);
    }


}
