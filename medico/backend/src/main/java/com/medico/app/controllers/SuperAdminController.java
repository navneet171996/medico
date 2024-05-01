package com.medico.app.controllers;

import com.medico.app.dto.AddHospitalDto;
import com.medico.app.entities.Hospital;
import com.medico.app.services.SuperAdminService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/api/superAdmin")
public class SuperAdminController {

    private final SuperAdminService superAdminService;

    public SuperAdminController(SuperAdminService superAdminService) {
        this.superAdminService = superAdminService;
    }

    @PostMapping(path = "/addHospital")
    public ResponseEntity<Hospital> addHospital(@RequestBody AddHospitalDto hospitalDto) {
        return new ResponseEntity<>(superAdminService.addHospital(hospitalDto), HttpStatus.OK);
    }
}
