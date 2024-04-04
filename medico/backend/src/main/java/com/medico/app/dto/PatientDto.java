package com.medico.app.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PatientDto {

    private Long patientId;
    private String patName;
    private Date patDob;
    private String patBloodGroup;
    private String patPhoneNo;
    private char patGender;
    private String patEmail;

}
