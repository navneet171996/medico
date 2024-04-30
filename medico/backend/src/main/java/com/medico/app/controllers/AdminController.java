package com.medico.app.controllers;

import com.medico.app.dto.AcceptDoctorDto;
import com.medico.app.dto.AssignJrDoctorDto;
import com.medico.app.entities.Doctor;
import com.medico.app.services.AdminService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/admin")
public class AdminController {

    private final AdminService adminService;

    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @GetMapping(path = "/getDoctorsOfHospital/{adminId}")
    public ResponseEntity<List<Doctor>> getDoctorsOfHospital(@PathVariable Long adminId){
        return new ResponseEntity<>(this.adminService.getDoctorsOfHospital(adminId), HttpStatus.OK);
    }

    @DeleteMapping(path = "/removeDoctorFromHospital/{adminId}/{docId}")
    public ResponseEntity<Doctor> removeDoctorFromHospital(@PathVariable Long adminId, @PathVariable Long docId){
        return new ResponseEntity<>(this.adminService.removeDoctorFromHospital(adminId, docId),HttpStatus.OK);
    }

    @PostMapping(path = "/acceptOrRejectDoctor")
    public ResponseEntity<String> acceptOrRejectDoctor(@RequestBody AcceptDoctorDto doctorDto){
        return new ResponseEntity<>(adminService.acceptOrRejectDoctor(doctorDto), HttpStatus.OK);
    }

    @PostMapping(path = "/assignJrDoctorsToSrDoctor")
    public ResponseEntity<String> assignJrDoctorsToSrDoctor(@RequestBody AssignJrDoctorDto assignJrDoctorDto){
        return new ResponseEntity<>(adminService.assignJrDoctorsToSrDoctor(assignJrDoctorDto), HttpStatus.OK);
    }

    @PostMapping(path = "/getAppliedDoctorsList/{adminId}")
    public ResponseEntity<List<Doctor>> getAppliedDoctorsList(@PathVariable Long adminId){
        return new ResponseEntity<>(adminService.getAppliedDoctorsList(adminId), HttpStatus.OK);
    }
}