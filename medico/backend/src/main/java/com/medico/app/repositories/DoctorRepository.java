package com.medico.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.medico.app.entities.Doctor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.print.Doc;
import java.util.List;
import java.util.Optional;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Long>{

    Optional<List<Doctor>> findBySpeciality_SpecialityId(Long specialityId);

    Optional<List<Doctor>> findDoctorBySpeciality_SpecialityIdAndHospital_HospitalId(Long specialityId, Long hospitalId);

    Optional<Doctor> getDoctorByEmail(String email);
}
