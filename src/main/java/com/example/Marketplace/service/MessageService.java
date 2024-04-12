package com.example.Marketplace.service;

import com.example.Marketplace.model.Message;
import com.example.Marketplace.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageService {

    @Autowired
    private MessageRepository messageRepository;

    public List<Message> getMessageBySender(int senderId){
        return messageRepository.findBySenderId_UserId(senderId);
    }

    public List<Message> getMessageByReceiver(int receiverId){
        return messageRepository.findByReceiverId_UserId(receiverId);
    }

    public void createMessage(Message message){
        messageRepository.save(message);
    }

    public void deleteMessage(int messageId){
        messageRepository.deleteById(messageId);
    }
}
