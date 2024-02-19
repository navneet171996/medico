package com.medico.app.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.medico.app.entities.Doctor;
import com.medico.app.repositories.DoctorRepository;

@Service
public class DoctorService {
    
    private DoctorRepository doctorRepository;
    
    public List<Doctor> getAllDoctor(){
        return doctorRepository.findAll();
    }
}
