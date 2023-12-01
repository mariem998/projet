package com.mycompany.rentCar.Repositories;

import com.mycompany.rentCar.Entities.Agency;
import com.mycompany.rentCar.Entities.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
public interface AgencyRepository extends JpaRepository<Agency, Long> {
    Optional<Agency> findByUsername(String username);
    boolean existsByUsername(String username);
    Optional<Customer> findUserDetailsByUsername(String username);

}
