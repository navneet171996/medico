package com.medico.app.controllers;

import com.medico.app.dto.DoctorDTO;
import com.medico.app.entities.Doctor;
import com.medico.app.services.DoctorService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.print.Doc;

@RestController
@RequestMapping(path = "/api/doctor")
public class DoctorController {

    private final DoctorService doctorService;


    public DoctorController(DoctorService doctorService) {

        this.doctorService = doctorService;
    }

    @GetMapping(path = "/getDoctorDetails/{doctorId}")
    public ResponseEntity<DoctorDTO> getDoctorDetails(@PathVariable Long doctorId) {
        DoctorDTO doctorDto = doctorService.getDoctorDetails(doctorId);
        return new ResponseEntity<>(doctorDto, HttpStatus.OK);
    }

    @PostMapping(path = "/editDoctorDetails")
    public ResponseEntity<Doctor> editDoctorDetails(@RequestBody DoctorDTO doctorDTO){
        Doctor doctor = doctorService.editDoctorDetails(doctorDTO);
        return new ResponseEntity<>(doctor , HttpStatus.OK);
    }
}