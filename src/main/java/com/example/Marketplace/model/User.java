package com.example.Marketplace.model;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.stereotype.Component;

@Entity
@Table(name = "userprofiles")
@Data
@Component
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "userid")
    private Integer userId;

    @Column(name = "email")
    private String email;
    @Column(name = "password")
    private String password;
    @Column(name = "firstname" )
    private String firstName;
    @Column(name = "lastname")
    private String lastName;
    @Column(name = "profiletype")
    @Enumerated(EnumType.STRING)
    private ProfileType type;
    @Column(name = "loggedin")
    private boolean loggedIn;
}
