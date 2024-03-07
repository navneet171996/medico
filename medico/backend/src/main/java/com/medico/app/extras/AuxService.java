package com.medico.app.extras;

import com.medico.app.entities.Speciality;
import com.medico.app.extras.dto.SpecialityDto;
import com.medico.app.repositories.SpecialityRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuxService {

    private final SpecialityRepository specialityRepository;

    public AuxService(SpecialityRepository specialityRepository) {
        this.specialityRepository = specialityRepository;
    }


    public void addSpeciality(List<SpecialityDto> specialityDtos) {
        specialityDtos.forEach(dto -> {
            Speciality speciality = new Speciality();
            speciality.setSpecialityName(dto.getSpecialityName());
            this.specialityRepository.save(speciality);
        });
    }
}
