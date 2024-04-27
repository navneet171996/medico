package com.medico.app.services;


import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import com.medico.app.dto.DoctorDTO;
import com.medico.app.dto.SocketDto;
import com.medico.app.entities.Consultation;
import com.medico.app.entities.Socket;
import com.medico.app.repositories.ConsultationRepository;
import com.medico.app.repositories.SocketRepository;
import org.springframework.stereotype.Service;
import com.medico.app.entities.Doctor;
import com.medico.app.repositories.DoctorRepository;

@Service
public class DoctorService {
    
    private final DoctorRepository doctorRepository;
    private final ConsultationRepository consultationRepository;
    private final SocketRepository socketRepository;

    public DoctorService(DoctorRepository doctorRepository, ConsultationRepository consultationRepository, SocketRepository socketRepository) {

        this.doctorRepository = doctorRepository;
        this.consultationRepository = consultationRepository;
        this.socketRepository = socketRepository;
    }

    public List<Doctor> getAllDoctor(){
        return doctorRepository.findAll();
    }

    public List<Doctor> getDoctorsBySpeciality(Long specialityId) {
        return this.doctorRepository.findBySpeciality_SpecialityId(specialityId).orElseThrow();
    }

    public List<Doctor> getDoctorsBySpecialityAndHospital(Long specialityId, Long hospitalId){
        return this.doctorRepository.findDoctorBySpeciality_SpecialityIdAndHospital_HospitalId(specialityId, hospitalId).orElseThrow();
    }

    public DoctorDTO getDoctorDetails(Long doctorId){
        Doctor doctor = doctorRepository.findById(doctorId).orElseThrow();
        DoctorDTO doctorDTO = new DoctorDTO();
        doctorDTO.setDocName(doctor.getDocName());
        doctorDTO.setDocDob(doctor.getDocDob());
        doctorDTO.setEmail(doctor.getEmail());
        doctorDTO.setRating(doctor.getRating());
        doctorDTO.setGender(doctor.getGender());
        doctorDTO.setPhoneNo(doctor.getPhoneNo());
        doctorDTO.setRate(doctor.getRate());
        doctorDTO.setSpeciality(doctor.getSpeciality());
        doctorDTO.setHospitalName(doctor.getHospital().getHospitalName());

        return doctorDTO;
    }
    public Doctor editDoctorDetails(DoctorDTO doctorDTO){
        Doctor doctor = doctorRepository.findById(doctorDTO.getDocId()).orElseThrow();
        doctor.setEmail(doctorDTO.getEmail());
        doctor.setPhoneNo(doctorDTO.getPhoneNo());
        doctor.setRate(doctorDTO.getRate());

        doctor = doctorRepository.save(doctor);

        return doctor;
    }

    public List<Consultation> getAllConsultationOfDoc(Long docId){
        return this.consultationRepository.findConsultationByDoctor_DocId(docId).orElseThrow();
    }

    public List<Doctor> getSortedRDoctorsBySpeciality(Long specialityId) {
        List<Doctor> doctors = this.doctorRepository.findBySpeciality_SpecialityId(specialityId).orElseThrow();
        return doctors.stream().sorted(Comparator.comparing(Doctor::getRating).reversed()).toList();
    }

    public List<Doctor> getSortedPDoctorsBySpeciality(Long specialityId) {
        List<Doctor> doctors = this.doctorRepository.findBySpeciality_SpecialityId(specialityId).orElseThrow();
        return doctors.stream().sorted(Comparator.comparing(Doctor::getRate).reversed()).toList();
    }

    public List<Consultation> getPendingConsultationsOfDoc(Long docId){
        List<Consultation> consultations = consultationRepository.findConsultationByDoctor_DocId(docId).orElseThrow();
        LocalDate today = LocalDate.now();
        LocalTime instant = LocalTime.now();
        List<Consultation> pendingConsultations = consultations.stream()
                .filter(consultation -> {
                    LocalDate consultationDate = consultation.getDate();
                    return consultationDate.isAfter(today);
                })
                .collect(Collectors.toList());
        pendingConsultations.addAll(consultations.stream()
                .filter(consultation -> {
                    LocalDate consultationDate = consultation.getDate();
                    return consultationDate.isEqual(today);
                })
                .filter(consultation -> {
                    LocalTime consultationTime = consultation.getTime();
                    return consultationTime.isAfter(instant);
                }).collect(Collectors.toList()));

        return pendingConsultations;
    }

    public Socket getSocketOfDoctor(Long doctorId) {
        return socketRepository.findSocketByDoctor_DocId(doctorId).orElseThrow();
    }

    public Socket putSocketOfDoctor(SocketDto socketDto) {
        Optional<Socket> socketAlreadyPresent = socketRepository.findSocketByDoctor_DocId(socketDto.getDocId());
        if(socketAlreadyPresent.isPresent()){
            Socket socket = socketAlreadyPresent.get();
            socket.setSocketId(socketDto.getSocketId());
            return socketRepository.save(socket);
        }else{
            Optional<Doctor> doctorOptional= doctorRepository.findById(socketDto.getDocId());
            if(doctorOptional.isPresent()){
                Doctor doctor = doctorOptional.get();
                Socket socket = new Socket();
                socket.setDoctor(doctor);
                socket.setSocketId(socketDto.getSocketId());

                return socketRepository.save(socket);
            }
        }

        return new Socket();
    }
}
