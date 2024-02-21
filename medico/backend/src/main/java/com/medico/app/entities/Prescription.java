package com.medico.app.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "prescriptions")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Prescription {

    @Id
    @Column(name = "prescription_id")
    private Long prescriptionId;

    @Column(name = "prescription_date")
    private Date prescriptionDate;

    @Column(name = "doctor_name")
    private String doctorName;

    @Column(name = "patient_name")
    private String patientName;

    @Column(name = "medicines")
    private String medicines;

    @JsonIgnore
    @OneToMany(mappedBy = "prescription")
    private Set<Consultation> consultation;

}
