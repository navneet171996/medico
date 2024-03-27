package com.medico.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.medico.app.entities.Doctor;
import org.springframework.stereotype.Repository;

import javax.print.Doc;
import java.util.List;
import java.util.Optional;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Long>{

    Optional<List<Doctor>> findBySpeciality_SpecialityId(Long specialityId);

    Optional<Doctor> getDoctorByEmail(String email);
}
