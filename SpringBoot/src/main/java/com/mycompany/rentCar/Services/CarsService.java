package com.mycompany.rentCar.Services;

import com.mycompany.rentCar.CarDTO.CarDTO;
import com.mycompany.rentCar.Entities.Cars;
import com.mycompany.rentCar.Entities.Reservation;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;


public interface CarsService {
    Cars addCar(Cars car);
    Cars updateCar(Cars car);
    List<CarDTO> getAllCars();
    Cars getCarById(Long carId);
    void deleteCar(Long carId);
    //List<Reservation> getAllReservationByCarId(Long carId );
}
