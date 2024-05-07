package com.medico.app.security;

import com.medico.app.entities.Admin;
import com.medico.app.entities.Doctor;
import com.medico.app.entities.Patient;
import com.medico.app.entities.Role;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

public class CustomUserDetails implements UserDetails {
    private Doctor doctor;
    private Patient patient;
    private Admin admin;

    private Role role;

    public CustomUserDetails(Doctor doctor) {
        this.doctor = doctor;
        this.role = doctor.getRole();
    }

    public CustomUserDetails(Patient patient) {
        this.patient = patient;
        this.role = patient.getRole();
    }

    public CustomUserDetails(Admin admin) {
        this.admin = admin;
        this.role = admin.getRole();
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority("ROLE_"+role.name()));
    }

    @Override
    public String getPassword() {
        if(role == Role.ADMIN)
            return admin.getPassword();
        else if (role == Role.DOCTOR) {
            return doctor.getPassword();
        }else if (role == Role.PATIENT) {
            return patient.getPassword();
        }else{
            return "";
        }
    }

    @Override
    public String getUsername() {
        if(role == Role.ADMIN)
            return admin.getAdminEmail();
        else if (role == Role.DOCTOR) {
            return doctor.getEmail();
        }else if (role == Role.PATIENT) {
            return patient.getPassword();
        }else{
            return "";
        }
    }

    @Override
    public boolean isAccountNonExpired() {
        return false;
    }

    @Override
    public boolean isAccountNonLocked() {
        return false;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return false;
    }

    @Override
    public boolean isEnabled() {
        return false;
    }
}
