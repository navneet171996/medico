package com.medico.app.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "prescriptions")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Prescription{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "prescription_id")
    private Long prescriptionId;

    @Column(name = "observations")
    private String observations;

    @Column(name = "remarks")
    private String remarks;

    @Column(name = "medicines")
    @OneToMany(mappedBy = "prescription")
    private List<MedicineAndDosage> medicinesAndDosage;

    @OneToOne(mappedBy = "prescription")
    private Consultation consultation;

}
