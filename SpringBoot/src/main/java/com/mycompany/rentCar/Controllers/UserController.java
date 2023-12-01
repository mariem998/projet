package com.mycompany.rentCar.Controllers;

import com.mycompany.rentCar.Entities.Agency;
import com.mycompany.rentCar.Entities.AppUser;
import com.mycompany.rentCar.Services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "http://50.16.248.154:4200")
@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @PostMapping("/save")
    public AppUser saveUser(@Valid @RequestBody AppUser user)
    {
        return userService.saveUser(user);
    }

    @GetMapping("/checkUsername")
    public boolean checkUsernameExists(@RequestParam String username) {
        return userService.checkUsernameExists(username);
    }

    @GetMapping("/checkUsernameAgency")
    public boolean checkUsernameExistsAgency(@RequestParam String username) {
        return userService.checkUsernameExistsAgency(username);
    }

    @GetMapping("/getUserId/{username}")
    public ResponseEntity<Long> getUserIdByUsername(@PathVariable String username) {
        Long userId = userService.getUserIdByUsername(username);

        if (userId != null) {
            return ResponseEntity.ok(userId);
        } else {
            userId = userService.getAgencyIdByUsername(username);

            if (userId != null) {
                return ResponseEntity.ok(userId);
            } else {
                return ResponseEntity.notFound().build();
            }
        }
    }

    @DeleteMapping("/deleteAgency/{agencyId}")
    public ResponseEntity<String> deleteAgency(@PathVariable Long agencyId) {
        userService.deleteAgency(agencyId);
        return ResponseEntity.ok("Agency deleted successfully");
    }

    @DeleteMapping("/deleteUser/{userId}")
    public ResponseEntity<String> deleteUser(@PathVariable Long userId) {
        userService.deleteUser(userId);
        return ResponseEntity.ok("User deleted successfully");
    }

    @GetMapping("/getAllAgencies")
    public ResponseEntity<List<Agency>> getAllAgencies() {
        List<Agency> agencies = userService.getAllAgencies();
        return ResponseEntity.ok(agencies);
    }

    @GetMapping("/getAllUsers")
    public ResponseEntity<List<AppUser>> getAllUsers() {
        List<AppUser> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }
}
