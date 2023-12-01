package com.mycompany.rentCar.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Image {
    @Id
    @GeneratedValue(generator = "uuid")
    private long id;
    private String fileName;
    private String fileType;
    @Lob
    private byte[] data;
    @OneToOne
    @JsonIgnore
    @JoinColumn(name = "Car_id")
    private Cars cars;
    public Image(String fileName, String fileType, byte[] imageData) {
        this.fileName = fileName;
        this.fileType = fileType;
        this.data = imageData;
    }
}

