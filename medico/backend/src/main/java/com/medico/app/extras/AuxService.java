package com.medico.app.extras;

import com.medico.app.entities.Doctor;
import com.medico.app.entities.Hospital;
import com.medico.app.entities.Speciality;
import com.medico.app.extras.dto.DoctorDto;
import com.medico.app.extras.dto.HospitalDto;
import com.medico.app.extras.dto.SpecialityDto;
import com.medico.app.extras.dto.StartupDto;
import com.medico.app.repositories.DoctorRepository;
import com.medico.app.repositories.HospitalRepository;
import com.medico.app.repositories.SpecialityRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuxService {

    private final SpecialityRepository specialityRepository;
    private final HospitalRepository hospitalRepository;
    private final DoctorRepository doctorRepository;

    public AuxService(SpecialityRepository specialityRepository, HospitalRepository hospitalRepository, DoctorRepository doctorRepository) {
        this.specialityRepository = specialityRepository;
        this.hospitalRepository = hospitalRepository;
        this.doctorRepository = doctorRepository;
    }


    private void addSpeciality(List<SpecialityDto> specialityDtos) {
        specialityDtos.forEach(dto -> {
            Speciality speciality = new Speciality();
            speciality.setSpecialityName(dto.getSpecialityName());

            this.specialityRepository.save(speciality);
        });
    }

    private void addDoctors(List<DoctorDto> doctorDtos){
        doctorDtos.forEach(dto -> {
            Doctor doctor = new Doctor();
            doctor.setDocName(dto.getDocName());
            doctor.setDocDob(dto.getDocDob());
            doctor.setPhoneNo(dto.getPhoneNo());
            doctor.setGender(dto.getGender());
            doctor.setRate(dto.getRate());
            doctor.setEmail(dto.getEmail());
            doctor.setPassword(dto.getPassword());
            doctor.setSpeciality(this.specialityRepository.findById(dto.getSpecialityId()).orElseThrow());
            doctor.setHospital(this.hospitalRepository.findById(dto.getHospitalId()).orElseThrow());

            this.doctorRepository.save(doctor);
        });
    }

    private void addHospitals(List<HospitalDto> hospitalDtos){
        hospitalDtos.forEach(dto -> {
            Hospital hospital = new Hospital();
            hospital.setHospitalName(dto.getHospitalName());
            hospital.setHospitalAddress(dto.getHospitalAddress());

            this.hospitalRepository.save(hospital);
        });
    }

    public void startup(StartupDto startupDto){
        this.addSpeciality(startupDto.getSpecialities());
        this.addHospitals(startupDto.getHospitals());
        this.addDoctors(startupDto.getDoctors());
    }
}
