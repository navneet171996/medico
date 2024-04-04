package com.medico.app.controllers;

import com.medico.app.dto.ConsultationDto;
import com.medico.app.dto.RatingDto;
import com.medico.app.dto.SlotDto;
import com.medico.app.entities.Consultation;
import com.medico.app.entities.Doctor;
import com.medico.app.services.DoctorService;
import com.medico.app.services.PatientService;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/patient")
public class PatientController {

    private final PatientService patientService;
    private final DoctorService doctorService;

    public PatientController(PatientService patientService, DoctorService doctorService) {
        this.patientService = patientService;
        this.doctorService = doctorService;
    }

    @PostMapping(path = "/getDoctorSlots")
    public ResponseEntity<List<Boolean>> getDoctorSlots(@RequestBody SlotDto slotDto){
        return new ResponseEntity<>(patientService.getDoctorSlots(slotDto.getDocId(), slotDto.getDate()), HttpStatus.OK);
    }

    @PostMapping(path = "/bookConsultation")
    public ResponseEntity<Consultation> bookConsultation(@RequestBody ConsultationDto consultationDto){
        Consultation consultation = patientService.bookConsultation(consultationDto);
        return new ResponseEntity<>(consultation, HttpStatus.OK);
    }

    @PostMapping(path = "/setRating")
    public ResponseEntity<?> setRating(@RequestBody RatingDto ratingDto){
        patientService.setRating(ratingDto);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping(path = "/docBySpeciality/sortedR/{specialityId}")
    public ResponseEntity<List<Doctor>> getSortedListOfDoctorsR(@PathVariable Long specialityId){
        return new ResponseEntity<>(doctorService.getSortedRDoctorsBySpeciality(specialityId), HttpStatus.OK);
    }

    @GetMapping(path = "/docBySpeciality/sortedP/{specialityId}")
    public ResponseEntity<List<Doctor>> getSortedListOfDoctorsP(@PathVariable Long specialityId){
        return new ResponseEntity<>(doctorService.getSortedPDoctorsBySpeciality(specialityId), HttpStatus.OK);
    }


}
