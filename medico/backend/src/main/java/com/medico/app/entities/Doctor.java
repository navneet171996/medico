package com.medico.app.entities;

import java.util.Date;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "doctors")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Doctor {

    @Id
    @Column(name = "doctor_id")
    private Integer docId;

    @Column(name = "doctor_name")
    private String docName;

    @Column(name = "date_of_birth")
    private Date docDob;

    @Column(name = "phone_no")
    private String phoneNo;

    @Column(name = "gender")
    private char gender;

    @Column(name = "rate")
    private Float rate;

    @Column(name = "rating")
    private Float rating;

    @Column(name = "is_senior")
    private Boolean srDoctor;

    @Column(name = "email_id")
    private String email;

    @Column(name = "password")
    private String password;

    @ManyToOne
    @JoinColumn(name = "speciality", referencedColumnName = "speciality_id")
    private Speciality speciality;

    @ManyToOne
    @JoinColumn(name = "hospital", referencedColumnName = "hospital_id")
    private Hospital hospitals;

    @JsonIgnore
    @OneToMany(mappedBy = "doctor")
    private Set<Consultation> consultation;
}
