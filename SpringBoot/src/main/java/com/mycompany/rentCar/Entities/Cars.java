package com.mycompany.rentCar.Entities;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.context.annotation.Lazy;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Cars {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String model;
    private int nb_doors;
    private int nb_places;
    private String address;
    private String description;
    private float price_per_day;
    private String registration_num;
    private String gearbox;
    @OneToOne(mappedBy = "cars", cascade = CascadeType.REMOVE)
    @JsonIgnore
    private Image image;

    @OneToMany(mappedBy="car")
    @JsonIgnore
    @Lazy
    private List<Reservation> reservationList;
}
