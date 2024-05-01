package com.medico.app.controllers;

import com.medico.app.dao.SocketQueueDao;
import com.medico.app.dto.*;
import com.medico.app.entities.*;
import com.medico.app.services.DoctorQueueService;
import com.medico.app.services.DoctorService;
import com.medico.app.services.HospitalService;
import com.medico.app.entities.Consultation;
import com.medico.app.entities.Doctor;
import com.medico.app.services.PatientService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Set;


@RestController
@RequestMapping(path = "/api/patient")
public class PatientController {

    private final PatientService patientService;
    private final DoctorService doctorService;
    private final HospitalService hospitalService;
    private final DoctorQueueService doctorQueueService;


    public PatientController(PatientService patientService, HospitalService hospitalService , DoctorService doctorService, DoctorQueueService doctorQueueService) {

        this.patientService = patientService;
        this.hospitalService =  hospitalService;
        this.doctorService = doctorService;
        this.doctorQueueService = doctorQueueService;
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
    @GetMapping(path = "/getDocBySpecialityandHospital/{specialityId}/{hospitalId}")
    public ResponseEntity<List<Doctor>> getDocBySpecialityandHospital(@PathVariable Long specialityId , Long hospitalId){
        List<Doctor> doctors = doctorService.getDoctorsBySpecialityAndHospital(specialityId, hospitalId);
        return new ResponseEntity<>(doctors,HttpStatus.OK);
    }
    @GetMapping(path = "/getPatientDetails/{patientId}")
    public ResponseEntity<PatientDto> getPatientDetails(@PathVariable Long patientId){
        PatientDto patientDto = patientService.getPatientDetails(patientId);
        return new ResponseEntity<>(patientDto,HttpStatus.OK);
    }
    @PostMapping(path = "/editPatientDetails")
    public ResponseEntity<Patient> editPatientDetails(@RequestBody PatientDto patientDto){
        Patient patient = patientService.editPatientDetails(patientDto);
        return new ResponseEntity<>(patient, HttpStatus.OK);
    }

    @GetMapping(path = "/getAllConsultationsOfPat/{patientId}")
    public ResponseEntity<List<Consultation>> getAllConsultationOfPat(@PathVariable Long patientId){
        return new ResponseEntity<>(patientService.getAllConsultationOfPat(patientId),HttpStatus.OK);
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

    @GetMapping(path = "/getSocketOfDoctor/{doctorId}")
    public ResponseEntity<Socket> getSocketOfDoctor(@PathVariable Long doctorId){
        return new ResponseEntity<>(doctorService.getSocketOfDoctor(doctorId), HttpStatus.OK);
    }

    @PostMapping(path = "/enterIntoQueue")
    public ResponseEntity<Integer> enterIntoQueue(@RequestBody DoctorQueueDto doctorQueueDto){
        return new ResponseEntity<>(doctorQueueService.enterIntoQueue(doctorQueueDto), HttpStatus.OK);
    }

    @PostMapping(path = "/getWaitingList")
    public ResponseEntity<Integer> getWaitingList(@RequestBody DoctorQueueDto doctorQueueDto){
        return new ResponseEntity<>(doctorQueueService.getWaitingCount(doctorQueueDto), HttpStatus.OK);
    }
}
