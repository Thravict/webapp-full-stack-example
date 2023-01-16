package com.webapp.applicant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

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



}
