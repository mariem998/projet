package com.mycompany.rentCar.Services;

import com.mycompany.rentCar.CarDTO.AuthenticationDTO;
import com.mycompany.rentCar.CarDTO.AuthenticationToken;
import com.mycompany.rentCar.Entities.Agency;
import com.mycompany.rentCar.Entities.AppUser;

public interface AuthenticationService {
    AuthenticationToken register(AppUser request);

    AuthenticationToken registerAgency(Agency request);

    AuthenticationToken authenticate(AuthenticationDTO request);
}
