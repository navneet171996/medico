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
public class ConsultationDto {

    private Long patientID;
    private Long docID;
    private Date consultationDate;

}
