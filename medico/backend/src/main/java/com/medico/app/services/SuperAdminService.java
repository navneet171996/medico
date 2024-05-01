package com.medico.app.services;

import com.medico.app.dto.AddHospitalDto;
import com.medico.app.entities.Admin;
import com.medico.app.entities.Hospital;
import com.medico.app.entities.Role;
import com.medico.app.repositories.AdminRepository;
import com.medico.app.repositories.HospitalRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class SuperAdminService {

    private final HospitalRepository hospitalRepository;
    private final PasswordEncoder passwordEncoder;
    private final AdminRepository adminRepository;

    public SuperAdminService(HospitalRepository hospitalRepository, PasswordEncoder passwordEncoder, AdminRepository adminRepository) {
        this.hospitalRepository = hospitalRepository;
        this.passwordEncoder = passwordEncoder;
        this.adminRepository = adminRepository;
    }

    public Hospital addHospital(AddHospitalDto hospitalDto) {
        Optional<Hospital> optionalHospital = hospitalRepository.findHospitalByHospitalEmailId(hospitalDto.getHospitalEmail());
        if (optionalHospital.isPresent()) {
            return optionalHospital.get();
        }else{
            Hospital hospital = new Hospital();
            hospital.setHospitalName(hospitalDto.getHospitalName());
            hospital.setHospitalEmailId(hospitalDto.getHospitalEmail());
            hospital.setHospitalAddress(hospitalDto.getHospitalAddress());
            hospital.setHospitalPhoneNo(hospitalDto.getHospitalPhoneNo());
            hospital = hospitalRepository.save(hospital);

            Admin admin = new Admin();
            admin.setAdminName("Admin_"+hospital.getHospitalName());
            admin.setAdminEmail(admin.getAdminName()+"@medico.com");
            admin.setAdminPassword(passwordEncoder.encode("password"));
            admin.setHospital(hospital);
            admin.setRole(Role.ADMIN);
            adminRepository.save(admin);

            return hospital;
        }
    }
}
