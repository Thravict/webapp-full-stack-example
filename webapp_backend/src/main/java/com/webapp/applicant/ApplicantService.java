package com.webapp.applicant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.ApplicationArguments;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.MatrixVariable;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ApplicantService {

    @Autowired
    private ApplicantRepository applicantRepository;

    public List<Applicant> getAllApplicants() {
        return new ArrayList<>(applicantRepository.findAll());
    }

    public void setApplicant(Applicant applicant) {
        applicantRepository.save(applicant);
    }

    public Boolean getApplicantExistence(String applicantEmail) {
        return applicantRepository.findApplicantByEmail(applicantEmail).isPresent();
    }
    public Boolean getApplicantExistenceByPassword(String applicantPassword) {
        return applicantRepository.findApplicantByPassword(applicantPassword).isPresent();
    }

    public Boolean checkCredentialsByEmailAndPassword(String applicantEmail, String applicantPassword) {
        return applicantRepository.findApplicantByEmailAndPassword(applicantEmail, applicantPassword).isPresent();
    }
}
