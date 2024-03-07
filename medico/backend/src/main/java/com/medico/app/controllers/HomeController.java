package com.medico.app.controllers;

import com.medico.app.entities.Speciality;
import com.medico.app.services.SpecialityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/api/home")
public class HomeController {

    @Autowired
    private SpecialityService specialityService;

    @GetMapping(path = "/allSpecialities")
    public ResponseEntity<List<Speciality>> getAllSpecializations(){
        return new ResponseEntity<>(specialityService.getAllSpecialities(), HttpStatus.OK);
    }
}
