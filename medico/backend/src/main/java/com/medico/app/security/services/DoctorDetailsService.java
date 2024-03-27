package com.medico.app.security.services;

import com.medico.app.repositories.DoctorRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class DoctorDetailsService implements UserDetailsService {

    private final DoctorRepository doctorRepository;

    public DoctorDetailsService(DoctorRepository doctorRepository) {
        this.doctorRepository = doctorRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return doctorRepository.getDoctorByEmail(username).orElseThrow(() -> new UsernameNotFoundException(String.format("Doctor %s is not found", username)));
    }
}
