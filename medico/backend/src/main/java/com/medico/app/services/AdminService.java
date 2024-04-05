package com.medico.app.services;

import com.medico.app.entities.Admin;
import com.medico.app.entities.Doctor;
import com.medico.app.repositories.AdminRepository;
import com.medico.app.repositories.HospitalRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class AdminService {

    private final HospitalRepository hospitalRepository;
    private final AdminRepository adminRepository;

    public AdminService(HospitalRepository hospitalRepository, AdminRepository adminRepository) {
        this.hospitalRepository = hospitalRepository;
        this.adminRepository = adminRepository;
    }

    public List<Doctor> getDoctorsOfHospital(Long adminId){
        Optional<Admin> adminOptional = this.adminRepository.findById(adminId);
        if(adminOptional.isPresent()){
            Admin admin = adminOptional.get();
            Optional<List<Doctor>> doctorsByHospitalId = this.hospitalRepository.findDoctorsByHospitalId(admin.getHospital().getHospitalId());
            if(doctorsByHospitalId.isPresent()){
                return doctorsByHospitalId.get();
            }
        }
        return new ArrayList<>();
    }
}
