package com.mycompany.rentCar.Controllers;

import com.mycompany.rentCar.CarDTO.AuthenticationDTO;
import com.mycompany.rentCar.CarDTO.AuthenticationToken;
import com.mycompany.rentCar.Entities.Agency;
import com.mycompany.rentCar.Entities.AppUser;
import com.mycompany.rentCar.Services.Impl.AuthenticationServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;

@RestController
@CrossOrigin(origins = "http://50.16.248.154:4200")
@RequestMapping("/api")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationServiceImpl authenticationService;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationToken> register(@RequestBody AppUser request) {
        return ResponseEntity.ok(authenticationService.register(request));
    }

    @PostMapping("/registerAgency")
    public ResponseEntity<AuthenticationToken> registerAgency(@RequestBody Agency request) {
        return ResponseEntity.ok(authenticationService.registerAgency(request));
    }

    @PostMapping(value = "/authenticate", consumes = "application/x-www-form-urlencoded;charset=UTF-8")
    public ResponseEntity<AuthenticationToken> authenticate(@RequestParam("username") String username, @RequestParam("password") String password) {
        AuthenticationDTO request = new AuthenticationDTO(username, password);
        return ResponseEntity.ok(authenticationService.authenticate(request));
    }

    @PostConstruct
    public void init() {
        authenticationService.createDefaultAdmin();
    }
}
