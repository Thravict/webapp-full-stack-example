package com.webapp.applicant;

import org.springframework.data.jpa.repository.JpaRepository;

import javax.swing.text.html.Option;
import java.util.Optional;

public interface ApplicantRepository extends JpaRepository<Applicant, Long> {

    Optional<Applicant> findApplicantByEmail(String applicantEmail);

    Optional<Applicant> findApplicantByEmailAndPassword(String applicantEmail, String applicantPassword);
}
