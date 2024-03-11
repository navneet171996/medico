package com.medico.app.extras;

import com.medico.app.extras.dto.StartupDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/api/aux")
public class AuxController {

    private final AuxService auxService;

    public AuxController(AuxService auxService) {
        this.auxService = auxService;
    }


    @PostMapping(path = "/startup")
    public ResponseEntity<?> addSpeciality(@RequestBody StartupDto startupDto){
        this.auxService.startup(startupDto);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
