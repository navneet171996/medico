package com.medico.app.controllers;

import com.medico.app.dto.ConsultationDto;
import com.medico.app.entities.Consultation;
import com.medico.app.services.PatientService;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/patient")
public class PatientController {

    private final PatientService patientService;

    public PatientController(PatientService patientService) {
        this.patientService = patientService;
    }

    @PostMapping(path = "/bookConsultation")
    public ResponseEntity<Consultation> bookConsultation(@RequestBody ConsultationDto consultationDto){
        Consultation consultation = patientService.bookConsultation(consultationDto);
        return new ResponseEntity<>(consultation, HttpStatus.OK);
    }
}
