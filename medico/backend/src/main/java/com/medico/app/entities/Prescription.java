package com.medico.app.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "prescriptions")
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Prescription implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "prescription_id")
    private Long prescriptionId;

    @Column(name = "observations")
    private String observations;

    @Column(name = "medicines")
    @OneToMany(mappedBy = "prescription")
    private List<MedicineAndDosage> medicinesAndDosage;

    @OneToOne
    @JsonIgnore
    private Consultation consultation;

}
