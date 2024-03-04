package com.medico.app.controllers;

import com.medico.app.dto.LoginResponse;
import com.medico.app.entities.Admin;
import com.medico.app.services.AuthenticationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/auth")
public class AuthenticationController {

    private final AuthenticationService authenticationService;


    public AuthenticationController(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }

    @PostMapping("/register")
    public ResponseEntity<LoginResponse> register(@RequestBody Admin admin){
        return new ResponseEntity<>(authenticationService.register(admin), HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody Admin admin){
        return new ResponseEntity<>(authenticationService.authenticate(admin), HttpStatus.OK);
    }
}
