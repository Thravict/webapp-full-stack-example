package com.webapp.applicant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/v1/applicant")
public class ApplicantController {

    @Autowired
    private ApplicantService applicantService;

    @PostMapping("register")
    public void registerNewApplicant(@RequestBody Applicant applicant) {
        applicantService.setApplicant(applicant);
    }

    @PostMapping("register/{applicantEmail}")
    public boolean sendSingleApplicant(@PathVariable("applicantEmail") String applicantEmail) {
        return applicantService.getApplicantExistence(applicantEmail);
    }

    @GetMapping("register")
    public List<Applicant> listAllApplicants() {
        return applicantService.getAllApplicants();
    }

}
