package com.mycompany.rentCar.Services.Impl;

import com.mycompany.rentCar.CarDTO.CarDTO;
import com.mycompany.rentCar.Entities.Cars;
import com.mycompany.rentCar.Entities.Image;
import com.mycompany.rentCar.Entities.Reservation;
import com.mycompany.rentCar.Repositories.CarsRepository;
import com.mycompany.rentCar.Services.CarsService;
import com.mycompany.rentCar.Services.ImageService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.EntityNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class CarsServiceImpl implements CarsService {
    private final CarsRepository carsRepository;
    private final ImageService imageService;

    @Override
    public Cars addCar(Cars car) {
        return carsRepository.save(car);
    }


    public Cars updateCar(Cars car) {
        return carsRepository.save(car);
    }

     @Override
    public List<CarDTO> getAllCars() {
        List<Cars> allCars = (List<Cars>) carsRepository.findAll();
         List<CarDTO> carsWithImages = new ArrayList<>();

         for (Cars car : allCars) {
             CarDTO carDTO = new CarDTO(car);

             Image image = car.getImage();
             if (image != null) {
                 carDTO.setImageId(image.getId());
                 carDTO.setImageData(image.getData());
                 carDTO.setImageFileType(image.getFileType());
             }

             carsWithImages.add(carDTO);
         }

         return carsWithImages;
    }
    @Override
    public Cars getCarById(Long carId) {
        return carsRepository.findById(carId)
                .orElse(null);
    }
    @Override
    public void deleteCar(Long carId) {
        Cars carToDelete = carsRepository.findById(carId)
                .orElseThrow(() -> new EntityNotFoundException("La voiture avec l'ID " + carId + " n'a pas été trouvée"));

        carsRepository.delete(carToDelete);
    }
//        @Override
//        public List<Reservation> getAllReservationByCarId(Long carId) {
//        return carsRepository.findAllByCarId(carId);
//
//    }

}
