package com.medico.app.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Entity
@Table(name = "hospitals")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Hospital {
    
    @Id
    @Column(name = "hospital_id")
    private Long hospitalId;

    @Column(name = "hospital_name")
    private String hospitalName;

    @Column(name = "Address")
    private String hospitalAddress;

    @Column(name = "phone_no")
    private String phoneNo;

    @OneToOne(mappedBy = "hospital")
    private Admin admin;

    @JsonIgnore
    @OneToMany(mappedBy = "hospitals")
    private Set<Doctor> doctors;

}
