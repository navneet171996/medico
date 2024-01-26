package com.medico.app.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "speciality")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Speciality {

    @Id
    @Column()
    private Integer specialityId;

    @Column()
    @OneToMany
    private String specialityName;
}
