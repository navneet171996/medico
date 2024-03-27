package com.medico.app.dto;

import com.medico.app.entities.Speciality;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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
    private Float rating;
    private String email;
    private Speciality speciality;
    private Date docDob;
    private String hospitalName;
}
