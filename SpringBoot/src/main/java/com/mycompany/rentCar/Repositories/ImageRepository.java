package com.mycompany.rentCar.Repositories;

import com.mycompany.rentCar.Entities.Image;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImageRepository extends CrudRepository<Image, String> {
}
