package com.mycompany.rentCar.Services.Impl;

import com.mycompany.rentCar.Entities.Agency;
import com.mycompany.rentCar.Entities.Role;
import com.mycompany.rentCar.Entities.AppUser;
import com.mycompany.rentCar.Repositories.AgencyRepository;
import com.mycompany.rentCar.Repositories.UserRepository;
import com.mycompany.rentCar.Services.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final AgencyRepository agencyRepository;

    @Override
    public AppUser saveUser(AppUser user) {
        return userRepository.save(user);
    }

    @Override
    public Role saveRole(Role role) {
        return null;
    }

    @Override
    public Role findRoleByName(String name) {
        return null;
    }

    @Override
    public Long getUserIdByUsername(String username) {
        Optional<AppUser> userOptional = userRepository.findByUsername(username);
        return userOptional.map(AppUser::getId).orElse(null);
    }

    @Override
    public Long getAgencyIdByUsername(String username) {
        Optional<Agency> userOptional = agencyRepository.findByUsername(username);
        return userOptional.map(Agency::getId).orElse(null);
    }

    @Transactional(readOnly = true)
    public boolean checkUsernameExists(String username) {
        return userRepository.existsByUsername(username);
    }

    @Transactional(readOnly = true)
    public boolean checkUsernameExistsAgency(String username) {
        return userRepository.existsByUsername(username);
    }

    @Override
    public void deleteAgency(Long agencyId) {
        Agency agency = agencyRepository.findById(agencyId).orElse(null);
        if (agency != null) {
            agency.getRoles().clear();
            agencyRepository.deleteById(agencyId);
        }
    }

    @Override
    public void deleteUser(Long userId) {
        AppUser user = userRepository.findById(userId).orElse(null);
        if (user != null) {
            user.getRoles().clear();
            userRepository.deleteById(userId);
        }
    }

    @Override
    public List<Agency> getAllAgencies() {
        return agencyRepository.findAll();
    }

    @Override
    public List<AppUser> getAllUsers() {
        return userRepository.findAll();
    }
}


