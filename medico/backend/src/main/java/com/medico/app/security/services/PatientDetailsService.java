package com.medico.app.security.services;

import com.medico.app.repositories.PatientRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class PatientDetailsService implements UserDetailsService {

    private final PatientRepository patientRepository;

    public PatientDetailsService(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return patientRepository.getPatientByPatEmail(username).orElseThrow(() -> new UsernameNotFoundException(String.format("Patient %s is not found", username)));
    }
}
