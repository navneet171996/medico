package com.medico.app.services;

import java.util.List;

import com.medico.app.dto.DoctorDTO;
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

    public List<Doctor> getDoctorsBySpecialityAndHospital(Long specialityId, Long hospitalId){
        return this.doctorRepository.findDoctorBySpeciality_SpecialityIdAndHospital_HospitalId(specialityId, hospitalId).orElseThrow();
    }

    public DoctorDTO getDoctorDetails(Long doctorId){
        Doctor doctor = doctorRepository.findById(doctorId).orElseThrow();
        DoctorDTO doctorDTO = new DoctorDTO();
        doctorDTO.setDocName(doctor.getDocName());
        doctorDTO.setDocDob(doctor.getDocDob());
        doctorDTO.setEmail(doctor.getEmail());
        doctorDTO.setRating(doctor.getRating());
        doctorDTO.setGender(doctor.getGender());
        doctorDTO.setPhoneNo(doctor.getPhoneNo());
        doctorDTO.setSpeciality(doctor.getSpeciality());
        doctorDTO.setHospitalName(doctor.getHospital().getHospitalName());

        return doctorDTO;
    }
    public Doctor editDoctorDetails(DoctorDTO doctorDTO){
        Doctor doctor = doctorRepository.findById(doctorDTO.getDocId()).orElseThrow();
        doctor.setEmail(doctorDTO.getEmail());
        doctor.setRating(doctorDTO.getRating());
        doctor.setPhoneNo(doctorDTO.getPhoneNo());

        doctor = doctorRepository.save(doctor);

        return doctor;
    }

}
