package com.medico.app.controllers;

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

    @GetMapping(path = "getDoctorsOfHospitals/{adminId}")
    public ResponseEntity<List<Doctor>> getDoctorsOfHospitals(@PathVariable Long adminId){
        return new ResponseEntity<>(this.adminService.getDoctorsOfHospital(adminId), HttpStatus.OK);
    }

    @DeleteMapping(path = "removeDoctorFromHospital/{docId}")
    public ResponseEntity<Doctor> removeDoctorFromHospital(@PathVariable Long docId){
        return new ResponseEntity<>(this.adminService.removeDoctorFromHospital(docId),HttpStatus.OK);
    }
}
