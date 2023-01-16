package com.webapp.applicant;

import jakarta.persistence.*;

@Entity
public class Applicant {

    @Id
    private Long id;
    private String email;
    private String password;

    public Applicant(Long id, String email, String password) {
        this.id = id;
        this.email = email;
        this.password = password;
    }

    public Applicant(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public Applicant() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "Applicant{" +
                "id=" + id +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
