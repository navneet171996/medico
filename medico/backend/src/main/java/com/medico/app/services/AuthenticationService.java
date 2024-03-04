package com.medico.app.services;

import com.medico.app.dto.LoginResponse;
import com.medico.app.entities.Admin;
import com.medico.app.repositories.AdminRepository;
import com.medico.app.security.config.JwtUtil;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {

    private final AdminRepository adminRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    private final AuthenticationManager authenticationManager;

    public AuthenticationService(AdminRepository adminRepository, PasswordEncoder passwordEncoder, JwtUtil jwtUtil, AuthenticationManager authenticationManager) {
        this.adminRepository = adminRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtil = jwtUtil;
        this.authenticationManager = authenticationManager;
    }

    public LoginResponse register(Admin request){
        Admin admin = new Admin();
        admin.setAdminEmail(request.getAdminEmail());
        admin.setAdminName(request.getAdminName());
        admin.setAdminPassword(passwordEncoder.encode(request.getPassword()));
        admin.setRole(request.getRole());

        admin = adminRepository.save(admin);

        String token = jwtUtil.generateToken(admin);
        return new LoginResponse(admin.getAdminEmail(), token);
    }

    public LoginResponse authenticate(Admin request){
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getAdminEmail(), request.getPassword()));
        Admin admin = adminRepository.getAdminByAdminEmail(request.getAdminEmail()).orElseThrow();
        String token = jwtUtil.generateToken(admin);
        return new LoginResponse(admin.getAdminEmail(), token);
    }
}
