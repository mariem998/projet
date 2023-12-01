package com.mycompany.rentCar.Entities;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

public interface Customer extends UserDetails {
    Collection<? extends GrantedAuthority> getAuthorities();
}
