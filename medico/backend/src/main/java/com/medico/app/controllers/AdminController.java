package com.medico.app.controllers;

import com.medico.app.services.AdminService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/admin")
public class AdminController {

    private final AdminService adminService;

    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @GetMapping(path = "getDoctors/{adminId}")
    public ResponseEntity<?> getDoctorsOfAdmin(@PathVariable Long adminId){
        return new ResponseEntity<>(this.adminService.getDoctorsOfAdmin(adminId), HttpStatus.OK);
    }
}
