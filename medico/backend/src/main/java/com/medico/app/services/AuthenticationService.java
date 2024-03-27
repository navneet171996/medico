package com.medico.app.services;

import com.medico.app.dto.DoctorRegisterDto;
import com.medico.app.dto.LoginRequest;
import com.medico.app.dto.LoginResponse;
import com.medico.app.dto.PatientRegisterDto;
import com.medico.app.entities.*;
import com.medico.app.repositories.*;
import com.medico.app.security.config.JwtUtil;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthenticationService {

    private final AdminRepository adminRepository;
    private final SpecialityRepository specialityRepository;
    private final HospitalRepository hospitalRepository;
    private final DoctorRepository doctorRepository;
    private final PatientRepository patientRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;
    private final AuthenticationManager authenticationManager;

    public AuthenticationService(AdminRepository adminRepository, SpecialityRepository specialityRepository, HospitalRepository hospitalRepository, DoctorRepository doctorRepository, PatientRepository patientRepository, PasswordEncoder passwordEncoder, JwtUtil jwtUtil, AuthenticationManager authenticationManager) {
        this.adminRepository = adminRepository;
        this.specialityRepository = specialityRepository;
        this.hospitalRepository = hospitalRepository;
        this.doctorRepository = doctorRepository;
        this.patientRepository = patientRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtil = jwtUtil;
        this.authenticationManager = authenticationManager;
    }

    public LoginResponse registerAdmin(Admin request){
        Admin admin = new Admin();
        admin.setAdminEmail(request.getAdminEmail());
        admin.setAdminName(request.getAdminName());
        admin.setAdminPassword(passwordEncoder.encode(request.getPassword()));
        admin.setRole(request.getRole());

        admin = adminRepository.save(admin);

        String token = jwtUtil.generateAdminToken(admin);
        return new LoginResponse(admin.getAdminEmail(), token);
    }

    public LoginResponse authenticateAdmin(LoginRequest request){
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        Admin admin = adminRepository.getAdminByAdminEmail(request.getEmail()).orElseThrow();
        String token = jwtUtil.generateAdminToken(admin);
        return new LoginResponse(admin.getAdminEmail(), token);
    }

    public LoginResponse registerDoctor(DoctorRegisterDto request){
        Doctor doctor = new Doctor();
        doctor.setDocName(request.getDocName());
        doctor.setDocDob(request.getDocDob());
        doctor.setPhoneNo(request.getPhoneNo());
        doctor.setGender(request.getGender());
        doctor.setRate(request.getRate());
        doctor.setRating(0.0);
        doctor.setEmail(request.getEmail());
        doctor.setPassword(passwordEncoder.encode(request.getPassword()));

        Optional<Speciality> optionalSpeciality = specialityRepository.findById(request.getSpecialityId());
        if(optionalSpeciality.isPresent()){
            Speciality speciality = optionalSpeciality.get();
            doctor.setSpeciality(speciality);
        }

        Optional<Hospital> optionalHospital = hospitalRepository.findById(request.getHospitalId());
        if(optionalHospital.isPresent()){
            Hospital hospital = optionalHospital.get();
            doctor.setHospital(hospital);
        }

        doctor.setIsActive(Boolean.FALSE);

        doctor = doctorRepository.save(doctor);

        String token = jwtUtil.generateDoctorToken(doctor);
        return new LoginResponse(doctor.getEmail(), token);

    }

    public LoginResponse authenticateDoctor(LoginRequest request){
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        Doctor doctor = doctorRepository.getDoctorByEmail(request.getEmail()).orElseThrow();
        String token = jwtUtil.generateDoctorToken(doctor);
        return new LoginResponse(doctor.getEmail(), token);
    }

    public LoginResponse registerPatient(PatientRegisterDto request){
        Patient patient = new Patient();
        patient.setPatName(request.getPatName());
        patient.setPatDob(request.getPatDob());
        patient.setPatBloodGroup(request.getBloodGroup());
        patient.setPatPhoneNo(request.getPhoneNo());
        patient.setPatGender(request.getGender());
        patient.setPatEmail(request.getEmail());
        patient.setPatPassword(passwordEncoder.encode(request.getPassword()));

        patient = patientRepository.save(patient);

        String token = jwtUtil.generatePatientToken(patient);
        return new LoginResponse(patient.getPatEmail(), token);

    }

    public LoginResponse authenticatePatient(LoginRequest request){
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        Patient patient = patientRepository.getPatientByPatEmail(request.getEmail()).orElseThrow();
        String token = jwtUtil.generatePatientToken(patient);
        return new LoginResponse(patient.getPatEmail(), token);
    }
}
