package com.mycompany.rentCar.Services.Impl;

import com.mycompany.rentCar.Entities.Cars;
import com.mycompany.rentCar.Entities.Image;
import com.mycompany.rentCar.Repositories.CarsRepository;
import com.mycompany.rentCar.Repositories.ImageRepository;
import com.mycompany.rentCar.Services.ImageService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.EntityNotFoundException;
import java.io.IOException;
import java.util.Objects;

@Service
@AllArgsConstructor
public class ImageServiceImp implements ImageService{
    private final ImageRepository imageRepository;
    private final CarsRepository carsRepository;
    @Override
    public Image getImage(String id) {
        return null;
    }
    @Override
    public Image addImage(MultipartFile image, Long carId) throws IOException {
        String fileName = StringUtils.cleanPath(Objects.requireNonNull(image.getOriginalFilename()));
        String fileType = image.getContentType();
        byte[] data = image.getBytes();
        Image img = new Image(fileName, fileType, data);
        Cars car = carsRepository.findById(carId)
                .orElseThrow(() -> new EntityNotFoundException("La voiture avec l'ID " + carId + " n'a pas été trouvée"));
        img.setCars(car);
        return imageRepository.save(img);
    }
    @Override
    public Image updateImage(MultipartFile image, Long carId) throws IOException {
        // Récupérer la voiture associée à l'ID
        Cars car = carsRepository.findById(carId)
                .orElseThrow(() -> new EntityNotFoundException("La voiture avec l'ID " + carId + " n'a pas été trouvée"));

        // Récupérer l'image existante liée à la voiture
        Image existingImage = car.getImage();

        if (existingImage == null) {
            // Si aucune image n'existe, ajouter une nouvelle image
            return addImage(image, carId);
        } else {
            // Si une image existe, mettre à jour ses propriétés
            String fileName = StringUtils.cleanPath(Objects.requireNonNull(image.getOriginalFilename()));
            String fileType = image.getContentType();
            byte[] data = image.getBytes();

            // Mettre à jour les propriétés de l'image existante
            existingImage.setFileName(fileName);
            existingImage.setFileType(fileType);
            existingImage.setData(data);

            // Enregistrer les modifications de l'image
            return imageRepository.save(existingImage);
        }
    }
}


