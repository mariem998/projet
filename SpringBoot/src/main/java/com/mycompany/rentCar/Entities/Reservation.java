package com.mycompany.rentCar.Entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @DateTimeFormat
    private Date dateDebut;

    @DateTimeFormat
    private Date dateFin;
    private String address;
    private String phone;
    private String registration;
    private boolean Status;
    @ManyToOne
    @JoinColumn(name = "car_id")
    @JsonIgnore
    private Cars car;
}
