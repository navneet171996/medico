package com.medico.app.repositories;

import com.medico.app.entities.RatingsAndReviews;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface RatingAndReviewRepository extends JpaRepository<RatingsAndReviews, Long> {

    @Query("SELECT count(*) FROM RatingsAndReviews r WHERE r.consultation.doctor.docId = :docId")
    Long getTotalNumberOfRatingsOfADoctor(Long docId);
}
