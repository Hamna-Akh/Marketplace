package com.example.Marketplace.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "userprofiles")
@Data
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
    private ProfileType type;
}
