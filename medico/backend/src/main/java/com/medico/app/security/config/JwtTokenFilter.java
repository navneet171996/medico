package com.medico.app.security.config;

import com.medico.app.repositories.AdminRepository;
import com.medico.app.security.services.AdminDetailsService;
import com.medico.app.security.services.DoctorDetailsService;
import com.medico.app.security.services.PatientDetailsService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class JwtTokenFilter extends OncePerRequestFilter {

    private final JwtUtil jwtUtil;
    private final AdminDetailsService adminDetailsService;
    private final DoctorDetailsService doctorDetailsService;
    private final PatientDetailsService patientDetailsService;



    public JwtTokenFilter(JwtUtil jwtUtil, AdminDetailsService adminDetailsService, DoctorDetailsService doctorDetailsService, PatientDetailsService patientDetailsService){
        this.jwtUtil = jwtUtil;
        this.adminDetailsService = adminDetailsService;
        this.doctorDetailsService = doctorDetailsService;
        this.patientDetailsService = patientDetailsService;
    }
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String authHeader = request.getHeader("Authorization");
        if(authHeader == null || !authHeader.startsWith("Bearer ")){
            filterChain.doFilter(request, response);
            return;
        }

        String token = authHeader.substring(7);
        String email = jwtUtil.extractEmailFromToken(token);
        String role = jwtUtil.extractRoleFromToken(token);

        if(email != null && SecurityContextHolder.getContext().getAuthentication() == null){
            UserDetails userDetails = null;
            if (role.equals("ADMIN")) {
                userDetails = this.adminDetailsService.loadUserByUsername(email);
            } else if (role.equals("DOCTOR")) {
                userDetails = this.doctorDetailsService.loadUserByUsername(email);
            } else if (role.equals("PATIENT")) {
                userDetails = this.patientDetailsService.loadUserByUsername(email);
            }

            if (userDetails != null && this.jwtUtil.isValid(token, userDetails)) {
                UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(authenticationToken);
            }
        }
        filterChain.doFilter(request, response);
    }
}
