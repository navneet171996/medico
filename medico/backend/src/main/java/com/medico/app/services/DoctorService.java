package com.medico.app.services;


import java.util.Comparator;
import java.util.List;
import com.medico.app.dto.DoctorDTO;
import com.medico.app.entities.Consultation;
import com.medico.app.repositories.ConsultationRepository;
import org.springframework.stereotype.Service;
import com.medico.app.entities.Doctor;
import com.medico.app.repositories.DoctorRepository;

@Service
public class DoctorService {
    
    private final DoctorRepository doctorRepository;
    private final ConsultationRepository consultationRepository;

    public DoctorService(DoctorRepository doctorRepository,ConsultationRepository consultationRepository) {

        this.doctorRepository = doctorRepository;
        this.consultationRepository = consultationRepository;
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


}
