package com.medico.app.entities;

import java.time.LocalDate;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

@Entity
@Table(name = "doctors")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Doctor implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "doctor_id")
    private Long docId;

    @Column(name = "doctor_name")
    private String docName;

    @Column(name = "date_of_birth")
    private LocalDate docDob;

    @Column(name = "phone_no")
    private String phoneNo;

    @Column(name = "gender")
    private Character gender;

    @Column(name = "rate")
    private Double rate;

    @Column(name = "rating")
    private Double rating;

    @Column(name = "is_senior")
    private Boolean srDoctor;

    @Column(name = "email_id")
    private String email;

    @Column(name = "password")
    private String password;

    @ManyToOne
    @JoinColumn(name = "speciality", referencedColumnName = "speciality_id")
    private Speciality speciality;

    @ManyToOne
    @JoinColumn(name = "hospital", referencedColumnName = "hospital_id")
    private Hospital hospital;

    @Column(name = "is_active")
    private Boolean isActive;

    @Enumerated(value = EnumType.STRING)
    private Role role;

    @JsonIgnore
    @OneToMany(mappedBy = "doctor")
    private Set<Consultation> consultation;

    @JsonIgnore
    @OneToMany(mappedBy = "doctor")
    private List<Slots> slots;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    @Override
    public String getUsername() {
        return this.email;
    }

    @Override
    public String getPassword() {
        return this.password;
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
