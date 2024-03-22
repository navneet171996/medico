package com.medico.app.controllers;

import com.medico.app.dto.ConsultationDto;
import com.medico.app.entities.Consultation;
import com.medico.app.entities.Hospital;
import com.medico.app.entities.Speciality;
import com.medico.app.extras.dto.HospitalDto;
import com.medico.app.services.HospitalService;
import com.medico.app.services.PatientService;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.ClientInfoStatus;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping(path = "/api/patient")
public class PatientController {

    private final PatientService patientService;

    private final HospitalService hospitalService;


    public PatientController(PatientService patientService,HospitalService hospitalService) {

        this.patientService = patientService;
        this.hospitalService =  hospitalService;
    }

    @PostMapping(path = "/bookConsultation")
    public ResponseEntity<Consultation> bookConsultation(@RequestBody ConsultationDto consultationDto){
        Consultation consultation = patientService.bookConsultation(consultationDto);
        return new ResponseEntity<>(consultation, HttpStatus.OK);
    }
    @GetMapping(path = "/getAllHospitals")
    public ResponseEntity<List<Hospital>> getAllHospitals() {
        List<Hospital> hospitals = hospitalService.getAllHospitals();
        return new ResponseEntity<>(hospitals, HttpStatus.OK);

    }
    @GetMapping(path = "/getAllSpecialityByHospital/{hospitalId}")
    public ResponseEntity<Set<Speciality>> getAllSpecialityByHospital(@PathVariable Long hospitalId){
        Set<Speciality> specialities = hospitalService.getAllSpecialityByHospital(hospitalId);
        return new ResponseEntity<>(specialities,HttpStatus.OK);
    }


}
