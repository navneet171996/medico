package com.medico.app.security.services;

import com.medico.app.entities.Admin;
import com.medico.app.entities.Doctor;
import com.medico.app.entities.Patient;
import com.medico.app.entities.Role;
import com.medico.app.repositories.AdminRepository;
import com.medico.app.repositories.DoctorRepository;
import com.medico.app.repositories.PatientRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final AdminRepository adminRepository;
    private final DoctorRepository doctorRepository;
    private final PatientRepository patientRepository;
    private Role role;

    public CustomUserDetailsService(AdminRepository adminRepository, DoctorRepository doctorRepository, PatientRepository patientRepository) {
        this.adminRepository = adminRepository;
        this.doctorRepository = doctorRepository;
        this.patientRepository = patientRepository;
    }

    public Role getRole(){
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        if(role == Role.ADMIN){
            Admin admin = adminRepository.getAdminByAdminEmail(username).orElseThrow(() -> new UsernameNotFoundException(String.format("Admin %s is not found", username)));
            SimpleGrantedAuthority authority = new SimpleGrantedAuthority(Role.ADMIN.name());
            Collection<GrantedAuthority> authorities = new ArrayList<>();
            authorities.add(authority);
            return new User(admin.getAdminEmail(), admin.getAdminPassword(), authorities);
        } else if (role == Role.DOCTOR) {
            Doctor doctor = doctorRepository.getDoctorByEmail(username).orElseThrow(() -> new UsernameNotFoundException(String.format("Doctor %s is not found", username)));
            SimpleGrantedAuthority authority = new SimpleGrantedAuthority(Role.DOCTOR.name());
            Collection<GrantedAuthority> authorities = new ArrayList<>();
            authorities.add(authority);
            return new User(doctor.getEmail(), doctor.getPassword(), authorities);
        } else if (role == Role.PATIENT) {
            Patient patient = patientRepository.getPatientByPatEmail(username).orElseThrow(() -> new UsernameNotFoundException(String.format("Patient %s is not found", username)));
            SimpleGrantedAuthority authority = new SimpleGrantedAuthority(Role.PATIENT.name());
            Collection<GrantedAuthority> authorities = new ArrayList<>();
            authorities.add(authority);
            return new User(patient.getPatEmail(), patient.getPassword(), authorities);
        }
        return null;
    }
}
