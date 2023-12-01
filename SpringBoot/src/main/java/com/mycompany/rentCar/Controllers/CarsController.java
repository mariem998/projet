package com.mycompany.rentCar.Controllers;

import com.mycompany.rentCar.CarDTO.CarDTO;
import com.mycompany.rentCar.Entities.Cars;
import com.mycompany.rentCar.Entities.Image;
import com.mycompany.rentCar.Services.CarsService;
import com.mycompany.rentCar.Services.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@CrossOrigin(origins = "http://50.16.248.154:4200")
@RestController
@RequestMapping("/api/cars")
public class CarsController {
    private final CarsService carsService;
    private final ImageService imageService;

    @Autowired
    public CarsController(CarsService carsService, ImageService imageService) {
        this.carsService = carsService;
        this.imageService = imageService;
    }
    @PostMapping("/addCar")
    public ResponseEntity<String> addCarWithImage(
            @RequestParam("file") MultipartFile file,
            @ModelAttribute Cars car
    ) {
        try {
            Cars savedCar = carsService.addCar(car);
            Image addedImage = imageService.addImage(file, savedCar.getId());
            return ResponseEntity.ok("Voiture ajoutée avec succès avec l'ID : " + savedCar.getId());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Erreur lors de l'ajout de la voiture : " + e.getMessage());
        }
    }

    @PutMapping("/updateCar/{carId}")
    public ResponseEntity<String> updateCar(
            @PathVariable("carId") long carId,
            @RequestParam(value = "file", required = false) MultipartFile file,
            @ModelAttribute Cars updatedCar
    ) {
        try {
            Cars existingCar = carsService.getCarById(carId);
            if (existingCar == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body("La voiture avec l'ID " + carId + " n'a pas été trouvée");
            }

            existingCar.setName(updatedCar.getName());
            existingCar.setModel(updatedCar.getModel());
            existingCar.setNb_doors(updatedCar.getNb_doors());
            existingCar.setNb_places(updatedCar.getNb_places());
            existingCar.setAddress(updatedCar.getAddress());
            existingCar.setDescription(updatedCar.getDescription());
            existingCar.setPrice_per_day(updatedCar.getPrice_per_day());
            existingCar.setRegistration_num(updatedCar.getRegistration_num());
            existingCar.setGearbox(updatedCar.getGearbox());

            if (file != null && !file.isEmpty()) {
                Image updatedImage = imageService.updateImage(file, carId);
                existingCar.setImage(updatedImage);
            }

            carsService.updateCar(existingCar);

            return ResponseEntity.ok("Voiture mise à jour avec succès avec l'ID : " + existingCar.getId());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Erreur lors de la mise à jour de la voiture : " + e.getMessage());
        }
    }
     @GetMapping("/getAllCars")
    public ResponseEntity<List<CarDTO>> getAllCars() {
        try {
            List<CarDTO> carsWithImages = carsService.getAllCars();

            return ResponseEntity.ok(carsWithImages);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(null);
        }
    }

    @GetMapping("/getCarById/{carId}")
    public ResponseEntity<CarDTO> getCarById(@PathVariable Long carId) {
        try {
            Cars car = carsService.getCarById(carId);
            if (car != null) {
                CarDTO carDTO = new CarDTO(car);
                return ResponseEntity.ok(carDTO);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(null);
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(null);
        }
    }

    @DeleteMapping("/delete/{carId}")
    public ResponseEntity<String> deleteCar(@PathVariable Long carId) {
        try {
            carsService.deleteCar(carId);
            return ResponseEntity.ok("Voiture supprimée avec succès avec l'ID : " + carId);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Erreur lors de la suppression de la voiture : " + e.getMessage());
        }
    }
}
