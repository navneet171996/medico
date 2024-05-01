package com.medico.app.controllers;

import com.medico.app.dao.SocketQueueDao;
import com.medico.app.dto.DoctorDTO;
import com.medico.app.dto.SocketDto;
import com.medico.app.entities.Consultation;
import com.medico.app.entities.Doctor;
import com.medico.app.entities.Hospital;
import com.medico.app.entities.Socket;
import com.medico.app.services.DoctorQueueService;
import com.medico.app.services.DoctorService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.print.Doc;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(path = "/api/doctor")
public class DoctorController {

    private final DoctorService doctorService;
    private final DoctorQueueService doctorQueueService;


    public DoctorController(DoctorService doctorService, DoctorQueueService doctorQueueService) {

        this.doctorService = doctorService;
        this.doctorQueueService = doctorQueueService;
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
    @GetMapping(path = "/getAllConsultationOfDoc/{docId}")
    public ResponseEntity<List<Consultation>> getAllConsultationOfDoc(@PathVariable Long docId){
        return new ResponseEntity<>(doctorService.getAllConsultationOfDoc(docId),HttpStatus.OK);
    }
    @GetMapping(path = "/getPendingConsultationsOfDoc/{docId}")
    public ResponseEntity<List<Consultation>> getPendingConsultationsOfDoc(@PathVariable Long docId) {
        return new ResponseEntity<>(doctorService.getPendingConsultationsOfDoc(docId), HttpStatus.OK);
    }

    @PostMapping(path = "/putSocketOfDoctor")
    public ResponseEntity<?> putSocketOfDoctor(@RequestBody SocketDto socketDto){
        return new ResponseEntity<>(doctorService.putSocketOfDoctor(socketDto),HttpStatus.OK);
    }

    @GetMapping(path = "/resignFromHospital/{doctorId}")
    public ResponseEntity<Doctor> resignFromHospital(@PathVariable Long doctorId){
        return new ResponseEntity<>(doctorService.resignFromHospital(doctorId), HttpStatus.OK);
    }

    @GetMapping(path = "/applyToHospital/{doctorId}/{hospitalId}")
    public ResponseEntity<Doctor> applyToHospital(@PathVariable Long doctorId, @PathVariable Long hospitalId) {
        return new ResponseEntity<>(doctorService.applyToHospital(doctorId, hospitalId), HttpStatus.OK);
    }

    @GetMapping(path = "/getSocketOfNextPatient/{doctorId}")
    public ResponseEntity<SocketQueueDao> getSocketOfNextPatientFromQueue(@PathVariable Long doctorId){
        return new ResponseEntity<>(doctorQueueService.getNextPatient(doctorId), HttpStatus.OK);
    }


    @GetMapping(path = "/deleteQueueOfDoctor{doctorId}")
    public ResponseEntity<String> deleteQueueOfDoctor(@PathVariable Long doctorId){
        return new ResponseEntity<>(doctorQueueService.deleteQueueOfDoctor(doctorId), HttpStatus.OK);
    }
}