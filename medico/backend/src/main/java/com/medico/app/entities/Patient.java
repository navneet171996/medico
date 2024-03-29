package com.medico.app.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "patient")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Patient implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "patient_id")
    private Long patientID;

    @Column(name = "patient_name")
    private String patName;

    @Column(name = "date_of_birth")
    private Date patDob;

    @Column(name = "blood_group")
    private String patBloodGroup;

    @Column(name = "phone_no")
    private String patPhoneNo;

    @Column(name = "gender")
    private char patGender;

    @Column(name = "email_id")
    private String patEmail;

    @Column(name = "password")
    private String patPassword;

    @Transient
    private Role role = Role.PATIENT;

    @JsonIgnore
    @OneToMany(mappedBy = "patient")
    private Set<Consultation> consultations;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    @Override
    public String getPassword() {
        return this.patPassword;
    }

    @Override
    public String getUsername() {
        return this.patEmail;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
