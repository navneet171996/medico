package com.medico.app.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Entity
@Table(name ="consultation")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Consultation {

    @Id
    @Column(name = "consultation_id")
    private Long consultationId;

    @ManyToOne
    @JoinColumn(name = "patient_id", referencedColumnName = "patient_id")
    private Patient patient;


    @ManyToOne
    @JoinColumn(name = "doctor_id",referencedColumnName = "doctor_id")
    private Doctor doctor;

    @ManyToOne
    @JoinColumn(name = "prescription_id" , referencedColumnName = "prescription_id")
    private Prescription prescription;

    private Date date;

    private String video;

    private String chat;

}
