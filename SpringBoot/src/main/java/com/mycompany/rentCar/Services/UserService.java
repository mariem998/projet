package com.mycompany.rentCar.Services;

import com.mycompany.rentCar.Entities.Agency;
import com.mycompany.rentCar.Entities.Role;
import com.mycompany.rentCar.Entities.AppUser;

import java.util.List;

public interface UserService {
    AppUser saveUser (AppUser user);

    Role saveRole(Role role);

    Role findRoleByName(String name);

    Long getUserIdByUsername(String username);

    boolean checkUsernameExists(String username);

    boolean checkUsernameExistsAgency(String username);

    Long getAgencyIdByUsername(String username);

    void deleteAgency(Long agencyId);

    void deleteUser(Long userId);

    List<Agency> getAllAgencies();

    List<AppUser> getAllUsers();
}
