package com.example.Marketplace.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalTime;
import java.util.Date;

@Data
@Entity
@Table(name = "messaging")
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "messageid")
    private Integer messageId;

    @ManyToOne
    @JoinColumn(name = "senderid")
    private User senderId;

    @ManyToOne
    @JoinColumn(name = "receiverid")
    private User receiverId;

    @Column(name = "timestamp")
    private Date timestamp;

    @Column(name = "messagecontent")
    private String messageContent;
}
