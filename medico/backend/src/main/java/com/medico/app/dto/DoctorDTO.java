package com.medico.app.dto;

import com.medico.app.entities.Doctor;
import com.medico.app.entities.Speciality;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DoctorDTO {

    private Long docId;
    private String docName;
    private String phoneNo;
    private Character gender;
    private Double rating;
    private String email;
    private Speciality speciality;
    private LocalDate docDob;
    private String hospitalName;
    private Double rate;
    private Boolean isSenior;

    public DoctorDTO(Doctor doctor) {
        this.setDocName(doctor.getDocName());
        this.setDocDob(doctor.getDocDob());
        this.setEmail(doctor.getEmail());
        this.setRating(doctor.getRating());
        this.setRate(doctor.getRate());
        this.setGender(doctor.getGender());
        this.setPhoneNo(doctor.getPhoneNo());
        this.setRate(doctor.getRate());
        this.setSpeciality(doctor.getSpeciality());
        this.setIsSenior(doctor.getIsSenior());
        if(doctor.getHospital() != null)
            this.setHospitalName(doctor.getHospital().getHospitalName());
    }
}
