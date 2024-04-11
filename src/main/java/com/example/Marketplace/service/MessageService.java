package com.example.Marketplace.service;

import com.example.Marketplace.model.Message;
import com.example.Marketplace.repository.MessageRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageService {

    private MessageRepository messageRepository;

    public List<Message> getMessageBySender(int senderId){
        return messageRepository.findBySenderId(senderId);
    }
}
