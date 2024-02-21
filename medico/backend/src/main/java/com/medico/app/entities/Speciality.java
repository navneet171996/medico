package com.medico.app.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Entity
@Table(name = "speciality")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Speciality {

    @Id
    @Column(name = "speciality_id")
    private Integer specialityId;

    @Column(name = "name")
    private String specialityName;

    @JsonIgnore
    @OneToMany(mappedBy = "speciality")
    private Set<Doctor> doctors;
}
