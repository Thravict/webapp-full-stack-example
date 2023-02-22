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

    @GetMapping("register/mail/{applicantEmail}")
    public Boolean sendSingleApplicant(@PathVariable("applicantEmail") String applicantEmail) {
        return applicantService.getApplicantExistence(applicantEmail);
    }

    @GetMapping("register/pass/{applicantPassword}")
    public Boolean sendSingleApplicantPassword(@PathVariable("applicantPassword") String applicantPassword) {
        return applicantService.getApplicantExistenceByPassword(applicantPassword);
    }

    @GetMapping("register/cred/{applicantEmail}/{applicantPassword}")
    public Boolean sendCredentialCheckBoolean(@PathVariable("applicantEmail") String applicantEmail,
                                              @PathVariable("applicantPassword") String applicantPassword) {
        return applicantService.checkCredentialsByEmailAndPassword(applicantEmail, applicantPassword);
    }
    @GetMapping("register")
    public List<Applicant> listAllApplicants() {
        return applicantService.getAllApplicants();
    }
}