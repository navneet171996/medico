package com.medico.app.services;

import com.medico.app.dto.ConsultationDto;
import com.medico.app.dto.RatingDto;
import com.medico.app.entities.*;
import com.medico.app.repositories.*;
import com.medico.app.dto.PatientDto;
import com.medico.app.entities.Consultation;
import com.medico.app.repositories.ConsultationRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class PatientService {

    private final PatientRepository patientRepository;
    private final DoctorRepository doctorRepository;
    private final ConsultationRepository consultationRepository;
    private final RatingAndReviewRepository ratingAndReviewRepository;
    private final HospitalRepository hospitalRepository;
    private final SlotsRepository slotsRepository;

    public PatientService(PatientRepository patientRepository, DoctorRepository doctorRepository, ConsultationRepository consultationRepository, RatingAndReviewRepository ratingAndReviewRepository, SlotsRepository slotsRepository ,HospitalRepository hospitalRepository) {
        this.patientRepository = patientRepository;
        this.doctorRepository = doctorRepository;
        this.consultationRepository = consultationRepository;
        this.ratingAndReviewRepository = ratingAndReviewRepository;
        this.slotsRepository = slotsRepository;
        this.hospitalRepository = hospitalRepository;
    }


    public Consultation bookConsultation(ConsultationDto consultationDto){
        Consultation consultation = new Consultation();
        Slots slot = new Slots();
        Optional<Patient> optionalPatient = patientRepository.findById(consultationDto.getPatientID());
        if(optionalPatient.isPresent()){
            Patient patient = optionalPatient.get();
            consultation.setPatient(patient);
        }
        Optional<Doctor> optionalDoctor = doctorRepository.findById(consultationDto.getDocID());
        if(optionalDoctor.isPresent()){
            Doctor doctor = optionalDoctor.get();
            consultation.setDoctor(doctor);
            slot.setDoctor(doctor);
            slot.setStartTime(consultationDto.getConsultationTime());
            slot.setDate(consultationDto.getConsultationDate());
            slotsRepository.save(slot);
        }
        consultation.setDate(consultationDto.getConsultationDate());
        consultation.setTime(consultationDto.getConsultationTime());

        return consultationRepository.save(consultation);
    }
    public void setRating(RatingDto ratingDto) {
        Optional<Consultation> optionalConsultation = consultationRepository.findById(ratingDto.getConsultationId());
        if (optionalConsultation.isPresent()) {
            Consultation consultation = optionalConsultation.get();
            RatingsAndReviews ratingsAndReviews = new RatingsAndReviews();
            ratingsAndReviews.setRating(ratingDto.getRating());
            ratingsAndReviews.setReview(ratingDto.getReview());
            ratingsAndReviews = ratingAndReviewRepository.save(ratingsAndReviews);
            consultation.setRatingsAndReviews(ratingsAndReviews);
            consultationRepository.save(consultation);

            // Update doctor's rating
            Doctor doctor = doctorRepository.findById(consultation.getDoctor().getDocId()).orElseThrow();
            Double currentDoctorRating = doctor.getRating();
            Long totalRatedUsers = ratingAndReviewRepository.getTotalNumberOfRatingsOfADoctor(doctor.getDocId()) - 1;

            // Calculate new rating for the doctor
            Double newDoctorRating = ((currentDoctorRating * totalRatedUsers) + ratingDto.getRating()) / (totalRatedUsers + 1);
            doctor.setRating(newDoctorRating);
            doctorRepository.save(doctor);

            // Calculate and update hospital's rating
            Hospital hospital = doctor.getHospital();
            if (hospital != null) {
                // Retrieve all doctors in the hospital
                List<Doctor> doctorsInHospital = doctorRepository.findDoctorByHospital(hospital.getHospitalId()).orElse(new ArrayList<>());

                // Calculate average rating of all doctors in the hospital
                double totalRating = 0;
                for (Doctor d : doctorsInHospital) {
                    totalRating += d.getRating();
                }

                double averageDoctorRating = totalRating / doctorsInHospital.size();

                // Set the hospital's rating
                hospital.setRating(averageDoctorRating);
                hospitalRepository.save(hospital);
            }
        }
    }


    public List<Boolean> getDoctorSlots(Long docId, LocalDate date){
        List<Boolean> retSlots = new ArrayList<>(24);
        for(int i=0;i<24;i++){
            retSlots.add(Boolean.TRUE);
        }
        List<Slots> slots = slotsRepository.getSlotsByDoctor_DocId(docId).orElseThrow();
        slots = slots.stream().filter(slot -> slot.getDate().equals(date)).toList();
        slots.forEach(slot -> {
            if(slot.getStartTime().getHour() == 9 && slot.getStartTime().getMinute() == 0)
                retSlots.set(0, Boolean.FALSE);
            if(slot.getStartTime().getHour() == 9 && slot.getStartTime().getMinute() == 30)
                retSlots.set(1, Boolean.FALSE);
            if(slot.getStartTime().getHour() == 10 && slot.getStartTime().getMinute() == 0)
                retSlots.set(2, Boolean.FALSE);
            if(slot.getStartTime().getHour() == 10 && slot.getStartTime().getMinute() == 30)
                retSlots.set(3, Boolean.FALSE);
            if(slot.getStartTime().getHour() == 11 && slot.getStartTime().getMinute() == 0)
                retSlots.set(4, Boolean.FALSE);
            if(slot.getStartTime().getHour() == 11 && slot.getStartTime().getMinute() == 30)
                retSlots.set(5, Boolean.FALSE);
            if(slot.getStartTime().getHour() == 12 && slot.getStartTime().getMinute() == 0)
                retSlots.set(6, Boolean.FALSE);
            if(slot.getStartTime().getHour() == 12 && slot.getStartTime().getMinute() == 30)
                retSlots.set(7, Boolean.FALSE);
            if(slot.getStartTime().getHour() == 13 && slot.getStartTime().getMinute() == 0)
                retSlots.set(8, Boolean.FALSE);
            if(slot.getStartTime().getHour() == 13 && slot.getStartTime().getMinute() == 30)
                retSlots.set(9, Boolean.FALSE);
            if(slot.getStartTime().getHour() == 14 && slot.getStartTime().getMinute() == 0)
                retSlots.set(10, Boolean.FALSE);
            if(slot.getStartTime().getHour() == 14 && slot.getStartTime().getMinute() == 30)
                retSlots.set(11, Boolean.FALSE);
            if(slot.getStartTime().getHour() == 15 && slot.getStartTime().getMinute() == 0)
                retSlots.set(12, Boolean.FALSE);
            if(slot.getStartTime().getHour() == 15 && slot.getStartTime().getMinute() == 30)
                retSlots.set(13, Boolean.FALSE);
            if(slot.getStartTime().getHour() == 16 && slot.getStartTime().getMinute() == 0)
                retSlots.set(14, Boolean.FALSE);
            if(slot.getStartTime().getHour() == 16 && slot.getStartTime().getMinute() == 30)
                retSlots.set(15, Boolean.FALSE);
            if(slot.getStartTime().getHour() == 17 && slot.getStartTime().getMinute() == 0)
                retSlots.set(16, Boolean.FALSE);
            if(slot.getStartTime().getHour() == 17 && slot.getStartTime().getMinute() == 30)
                retSlots.set(17, Boolean.FALSE);
            if(slot.getStartTime().getHour() == 18 && slot.getStartTime().getMinute() == 0)
                retSlots.set(18, Boolean.FALSE);
            if(slot.getStartTime().getHour() == 18 && slot.getStartTime().getMinute() == 30)
                retSlots.set(19, Boolean.FALSE);
            if(slot.getStartTime().getHour() == 19 && slot.getStartTime().getMinute() == 0)
                retSlots.set(20, Boolean.FALSE);
            if(slot.getStartTime().getHour() == 19 && slot.getStartTime().getMinute() == 30)
                retSlots.set(21, Boolean.FALSE);
            if(slot.getStartTime().getHour() == 20 && slot.getStartTime().getMinute() == 0)
                retSlots.set(22, Boolean.FALSE);
            if(slot.getStartTime().getHour() == 20 && slot.getStartTime().getMinute() == 30)
                retSlots.set(23, Boolean.FALSE);
        });
        return retSlots;
    }
    public PatientDto getPatientDetails(Long patientId){
        Patient patient = patientRepository.findById(patientId).orElseThrow();
        PatientDto patientDto = new PatientDto();
        patientDto.setPatientId(patient.getPatientID());
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
    public List<Consultation> getAllConsultationOfPat(Long patientId){
        return this.consultationRepository.findConsultationByPatient_PatientID(patientId).orElseThrow();
    }

}
