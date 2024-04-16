package com.example.Marketplace.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "productlistings")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "listingid")
    private Integer listingId;

    @ManyToOne
    @JoinColumn(name = "sellerid")
    private User sellerId;

    @Column(name = "title")
    private String title;
    @Column(name = "price")
    private double price;
    @Column(name = "description")
    private String description;
    @Column(name = "category")
    @Enumerated(EnumType.STRING)
    private Category category;
    @Column(name = "image")
    private byte[] image;
    @Column(name = "status")
    @Enumerated(EnumType.STRING)
    private Status status;
}
