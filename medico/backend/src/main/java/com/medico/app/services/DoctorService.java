package com.medico.app.services;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.medico.app.entities.Doctor;
import com.medico.app.repositories.DoctorRepository;

@Service
public class DoctorService {
    
    private final DoctorRepository doctorRepository;

    public DoctorService(DoctorRepository doctorRepository) {
        this.doctorRepository = doctorRepository;
    }

    public List<Doctor> getAllDoctor(){
        return doctorRepository.findAll();
    }

    public List<Doctor> getDoctorsBySpeciality(Long specialityId) {
        return this.doctorRepository.findBySpeciality_SpecialityId(specialityId).orElseThrow();
    }

    public List<Doctor> getSortedRDoctorsBySpeciality(Long specialityId) {
        List<Doctor> doctors = this.doctorRepository.findBySpeciality_SpecialityId(specialityId).orElseThrow();
        return doctors.stream().sorted(Comparator.comparing(Doctor::getRating).reversed()).toList();
    }

    public List<Doctor> getSortedPDoctorsBySpeciality(Long specialityId) {
        List<Doctor> doctors = this.doctorRepository.findBySpeciality_SpecialityId(specialityId).orElseThrow();
        return doctors.stream().sorted(Comparator.comparing(Doctor::getRate).reversed()).toList();
    }


}
