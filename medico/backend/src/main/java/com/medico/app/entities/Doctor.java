package com.medico.app.entities;

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

    @Column(name = "doctor_name")
    private String docName;

    // @Column(name = "doctor_speciality")
    // @ManyToOne()
    // private Speciality speciality;

    // @ManyToMany()
    // @JoinTable(joinColumns = @JoinColumn())
    // private Set<Hospital> hospitals;
}
