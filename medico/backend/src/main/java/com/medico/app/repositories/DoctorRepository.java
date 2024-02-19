package com.medico.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.medico.app.entities.Doctor;

public interface DoctorRepository extends JpaRepository<Doctor, Integer>{
    
}
