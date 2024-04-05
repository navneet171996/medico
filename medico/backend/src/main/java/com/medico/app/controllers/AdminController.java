package com.medico.app.controllers;

import com.medico.app.dto.AcceptDoctorDto;
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

    @GetMapping(path = "getDoctorsOfHospital/{adminId}")
    public ResponseEntity<List<Doctor>> getDoctorsOfHospital(@PathVariable Long adminId){
        return new ResponseEntity<>(this.adminService.getDoctorsOfHospital(adminId), HttpStatus.OK);
    }

    @PostMapping(path = "/acceptOrRejectDoctor")
    public ResponseEntity<String> acceptOrRejectDoctor(@RequestBody AcceptDoctorDto doctorDto){
        return new ResponseEntity<>(adminService.acceptOrRejectDoctor(doctorDto), HttpStatus.OK);
    }
}
