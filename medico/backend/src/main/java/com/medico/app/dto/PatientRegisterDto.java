package com.medico.app.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
public class PatientRegisterDto {
    private String patName;
    private Date patDob;
    private String bloodGroup;
    private String phoneNo;
    private Character gender;
    private String email;
    private String password;
}
