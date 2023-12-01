package com.mycompany.rentCar;
import com.mycompany.rentCar.Entities.AppUser;
import com.mycompany.rentCar.Entities.Role;
import com.mycompany.rentCar.Services.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.ArrayList;
import java.util.Optional;

@SpringBootApplication
public class App {
    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }

    @Bean
    CommandLineRunner run(UserService userService) {
        return args -> {
            if (userService.findRoleByName("ROLE_USER") == null) {
                userService.saveRole(new Role(null, "ROLE_USER"));
            }
            if (userService.findRoleByName("ROLE_AGENCY") == null) {
                userService.saveRole(new Role(null, "ROLE_AGENCY"));
            }
            if (userService.findRoleByName("ROLE_ADMIN") == null) {
                userService.saveRole(new Role(null, "ROLE_ADMIN"));
            }

        };
    }
}
