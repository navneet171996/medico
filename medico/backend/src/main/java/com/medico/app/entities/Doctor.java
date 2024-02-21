package com.medico.app.entities;

import java.util.Date;
import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
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
    @Column(name = "id")
    private Integer docId;

    @Column(name = "name")
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
}
