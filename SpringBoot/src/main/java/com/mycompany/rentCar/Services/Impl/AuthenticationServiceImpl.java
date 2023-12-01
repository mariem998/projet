package com.mycompany.rentCar.Services.Impl;

import com.mycompany.rentCar.CarDTO.AuthenticationDTO;
import com.mycompany.rentCar.CarDTO.AuthenticationToken;
import com.mycompany.rentCar.Controllers.UsernameAlreadyExistsException;
import com.mycompany.rentCar.Entities.Agency;
import com.mycompany.rentCar.Entities.AppUser;
import com.mycompany.rentCar.Entities.Customer;
import com.mycompany.rentCar.Entities.Role;
import com.mycompany.rentCar.Repositories.AgencyRepository;
import com.mycompany.rentCar.Repositories.RoleRepository;
import com.mycompany.rentCar.Repositories.UserRepository;
import com.mycompany.rentCar.Security.JwtTokenGenerator;
import com.mycompany.rentCar.Services.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.Optional;
@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {
    private final UserRepository userRepository;
    private final AgencyRepository agencyRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenGenerator jwtService;
    private final AuthenticationManager authenticationManager;
    @Override
    public AuthenticationToken register(AppUser request) {

        if (userRepository.existsByUsername(request.getUsername())) {
            throw new UsernameAlreadyExistsException("Username already exists");
        }

        Role userRole = roleRepository.findByName("ROLE_USER");
        var user = AppUser.builder()
                .username(request.getUsername())
                .drivingLicense(request.getDrivingLicense())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .roles(Collections.singleton(userRole))
                .build();
        userRepository.save(user);
        var jwtToken = jwtService.generateToken((UserDetails) user);

        SecurityContextHolder.getContext().setAuthentication(
                new UsernamePasswordAuthenticationToken(user, null, user.getAuthorities())
        );

        return AuthenticationToken.builder()
                .token(jwtToken)
                .build();
    }
    @Override
    public AuthenticationToken registerAgency(Agency request) {

        if (agencyRepository.existsByUsername(request.getUsername())) {
            throw new UsernameAlreadyExistsException("Username already exists");
        }

        Role userRole = roleRepository.findByName("ROLE_AGENCY");
        var user = Agency.builder()
                .username(request.getUsername())
                .managerName(request.getManagerName())
                .email(request.getEmail())
                .address(request.getAddress())
                .taxRegistrationNumber(request.getTaxRegistrationNumber())
                .number(request.getNumber())
                .password(passwordEncoder.encode(request.getPassword()))
                .roles(Collections.singleton(userRole))
                .build();
        agencyRepository.save(user);
        var jwtToken = jwtService.generateToken((UserDetails) user);
        return AuthenticationToken.builder()
                .token(jwtToken)
                .build();
    }
    @Override
    public AuthenticationToken authenticate(AuthenticationDTO request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getUsername(),
                        request.getPassword()
                )
        );

        Optional<Customer> userDetails = userRepository.findUserDetailsByUsername(request.getUsername());

        if (!userDetails.isPresent()) {
            userDetails = agencyRepository.findUserDetailsByUsername(request.getUsername());
        }

        Customer user = userDetails.orElseThrow(() -> new UsernameNotFoundException("User not found"));

        var jwtToken = jwtService.generateToken(user);
        return AuthenticationToken.builder()
                .token(jwtToken)
                .build();
    }

    @Transactional
    public void createDefaultAdmin() {
        Role adminRole = roleRepository.findByName("ROLE_ADMIN");

        Optional<AppUser> existingAdmin = userRepository.findByUsername("admin");

        if (!existingAdmin.isPresent()) {
            AppUser adminUser = AppUser.builder()
                    .username("admin")
                    .email("admin@gmail.com")
                    .password(passwordEncoder.encode("123"))
                    .roles(Collections.singleton(adminRole))
                    .build();
            userRepository.save(adminUser);
        }
    }
}

