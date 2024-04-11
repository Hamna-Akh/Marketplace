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
    private Category category;
    @Column(name = "image")
    private String image;
    @Column(name = "status")
    private Status status;
}
