package com.mycompany.rentCar.Services;

import com.mycompany.rentCar.Entities.Image;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;


public interface ImageService {
    Image getImage(String id);
    Image addImage(MultipartFile image,Long carId) throws IOException;
    Image updateImage(MultipartFile image, Long carId) throws IOException;

}
