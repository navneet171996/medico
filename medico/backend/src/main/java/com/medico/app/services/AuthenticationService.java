package com.medico.app.services;

import com.medico.app.dto.*;
import com.medico.app.entities.*;
import com.medico.app.repositories.*;
import com.medico.app.security.config.JwtUtil;
import com.medico.app.security.services.CustomUserDetailsService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
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
    private final CustomUserDetailsService userDetailsService;

    public AuthenticationService(AdminRepository adminRepository, SpecialityRepository specialityRepository, HospitalRepository hospitalRepository, DoctorRepository doctorRepository, PatientRepository patientRepository, PasswordEncoder passwordEncoder, JwtUtil jwtUtil, AuthenticationManager authenticationManager, CustomUserDetailsService userDetailsService) {
        this.adminRepository = adminRepository;
        this.specialityRepository = specialityRepository;
        this.hospitalRepository = hospitalRepository;
        this.doctorRepository = doctorRepository;
        this.patientRepository = patientRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtil = jwtUtil;
        this.authenticationManager = authenticationManager;
        this.userDetailsService = userDetailsService;
    }

    public RegisterResponse registerAdmin(Admin request){
        Admin admin = new Admin();
        admin.setAdminEmail(request.getAdminEmail());
        admin.setAdminName(request.getAdminName());
        admin.setAdminPassword(passwordEncoder.encode(request.getPassword()));
        admin.setRole(request.getRole());

        admin = adminRepository.save(admin);

        return new RegisterResponse(admin.getAdminEmail(), String.format("Admin %s is successfully registered",admin.getAdminEmail()));
    }

    public LoginResponse authenticateAdmin(LoginRequest request){
        userDetailsService.setRole(Role.ADMIN);
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        Admin admin = adminRepository.getAdminByAdminEmail(request.getEmail()).orElseThrow(() -> new UsernameNotFoundException("Admin not found !!!"));
        String token = jwtUtil.generateToken(authentication, Role.ADMIN.name());
        return new LoginResponse(admin.getAdminEmail(), admin.getAdminId(), token);
    }

    public RegisterResponse registerDoctor(DoctorRegisterDto request){
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

        return new RegisterResponse(doctor.getEmail(), String.format("Doctor %s is successfully registered", doctor.getEmail()));

    }

    public LoginResponse authenticateDoctor(LoginRequest request){
        userDetailsService.setRole(Role.DOCTOR);
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        Doctor doctor = doctorRepository.getDoctorByEmail(request.getEmail()).orElseThrow();
        String token = jwtUtil.generateToken(authentication, Role.DOCTOR.name());
        return new LoginResponse(doctor.getEmail(), doctor.getDocId(), token);
    }

    public RegisterResponse registerPatient(PatientRegisterDto request){
        Patient patient = new Patient();
        patient.setPatName(request.getPatName());
        patient.setPatDob(request.getPatDob());
        patient.setPatBloodGroup(request.getBloodGroup());
        patient.setPatPhoneNo(request.getPhoneNo());
        patient.setPatGender(request.getGender());
        patient.setPatEmail(request.getEmail());
        patient.setPatPassword(passwordEncoder.encode(request.getPassword()));

        patient = patientRepository.save(patient);

        return new RegisterResponse(patient.getPatEmail(), String.format("Patient %s is successfully registered", patient.getPatEmail()));

    }

    public LoginResponse authenticatePatient(LoginRequest request){
        userDetailsService.setRole(Role.PATIENT);
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        Patient patient = patientRepository.getPatientByPatEmail(request.getEmail()).orElseThrow();
        String token = jwtUtil.generateToken(authentication, Role.PATIENT.name());
        return new LoginResponse(patient.getPatEmail(), patient.getPatientID(), token);
    }
}
