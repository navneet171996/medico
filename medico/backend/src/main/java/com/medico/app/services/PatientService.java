package com.medico.app.services;

import com.medico.app.dto.ConsultationDto;
import com.medico.app.dto.PatientDto;
import com.medico.app.entities.Consultation;
import com.medico.app.entities.Doctor;
import com.medico.app.entities.Patient;
import com.medico.app.repositories.ConsultationRepository;
import com.medico.app.repositories.DoctorRepository;
import com.medico.app.repositories.PatientRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PatientService {

    private final PatientRepository patientRepository;
    private final DoctorRepository doctorRepository;
    private final ConsultationRepository consultationRepository;

    public PatientService(PatientRepository patientRepository, DoctorRepository doctorRepository, ConsultationRepository consultationRepository) {
        this.patientRepository = patientRepository;
        this.doctorRepository = doctorRepository;
        this.consultationRepository = consultationRepository;
    }


    public Consultation bookConsultation(ConsultationDto consultationDto){
        Consultation consultation = new Consultation();
        Optional<Patient> optionalPatient = patientRepository.findById(consultationDto.getPatientID());
        if(optionalPatient.isPresent()){
            Patient patient = optionalPatient.get();
            consultation.setPatient(patient);
        }
        Optional<Doctor> optionalDoctor = doctorRepository.findById(consultationDto.getDocID());
        if(optionalDoctor.isPresent()){
            Doctor doctor = optionalDoctor.get();
            consultation.setDoctor(doctor);
        }
        consultation.setDate(consultationDto.getConsultationDate());

        return consultationRepository.save(consultation);
    }
    public PatientDto getPatientDetails(Long patientId){
        Patient patient = patientRepository.findById(patientId).orElseThrow();
        PatientDto patientDto = new PatientDto();
        patientDto.setPatName(patient.getPatName());
        patientDto.setPatDob(patient.getPatDob());
        patientDto.setPatBloodGroup(patient.getPatBloodGroup());
        patientDto.setPatGender(patient.getPatGender());
        patientDto.setPatEmail(patient.getPatEmail());
        patientDto.setPatGender(patient.getPatGender());

        return patientDto;
    }
    public Patient editPatientDetails(PatientDto patientDto){
        Patient patient = patientRepository.findById(patientDto.getPatientId()).orElseThrow();
        patient.setPatBloodGroup(patientDto.getPatBloodGroup());
        patient.setPatName(patientDto.getPatName());
        patient.setPatPhoneNo(patientDto.getPatPhoneNo());

        patient = patientRepository.save(patient);

        return patient;


    }
}
