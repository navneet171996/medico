package com.medico.app.services;

import com.medico.app.dto.PatientDoctorDto;
import com.medico.app.entities.OneTimePassword;
import com.medico.app.entities.Patient;
import com.medico.app.repositories.OneTimePasswordRepository;
import com.medico.app.repositories.PatientRepository;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Random;

@Service
public class OneTimePasswordService {

    private final static Duration expiry = Duration.ofMinutes(5);
    private final static Integer length = 6;
    private final OneTimePasswordRepository oneTimePasswordRepository;
    private final PatientRepository patientRepository;

    public OneTimePasswordService(OneTimePasswordRepository oneTimePasswordRepository, PatientRepository patientRepository) {
        this.oneTimePasswordRepository = oneTimePasswordRepository;
        this.patientRepository = patientRepository;
    }

    private Integer generateOneTimePassword() {
        Random random = new Random();
        StringBuilder oneTimePassword = new StringBuilder();
        for (int i = 0; i < length; i++) {
            int number = random.nextInt(10);
            if(i == 0 && number == 0){
                i--;
                continue;
            }
            oneTimePassword.append(number);
        }
        System.out.println(oneTimePassword);
        return Integer.parseInt(oneTimePassword.toString());
    }


    public OneTimePassword sendOtpToPatientForSharing(PatientDoctorDto patientDoctorDto) {
        OneTimePassword oneTimePassword = new OneTimePassword();
        oneTimePassword.setPassword(generateOneTimePassword());
        oneTimePassword.setExpiration(LocalTime.now().plus(expiry));
        Patient patient = patientRepository.findById(patientDoctorDto.getPatientId()).orElseThrow();
        oneTimePassword.setPatient(patient);
        return oneTimePasswordRepository.save(oneTimePassword);

    }
}
