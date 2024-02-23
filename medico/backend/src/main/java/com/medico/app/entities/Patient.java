package com.medico.app.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.Set;

@Entity
@Table(name = "patient")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Patient {

    @Id
    @Column(name = "patient_id")
    private Long patientID;

    @Column(name = "patient_name")
    private String patName;

    @Column(name = "date_of_birth")
    private Date patDob;

    @Column(name = "blood_group")
    private String patBloodGroup;

    @Column(name = "phone_no")
    private String patPhoneNo;

    @Column(name = "gender")
    private char patGender;

    @Column(name = "email_id")
    private String patEmail;

    @Column(name = "password")
    private String patPassword;

    @JsonIgnore
    @OneToMany(mappedBy = "patient")
    private Set<Consultation> consultations;

}
