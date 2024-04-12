package com.example.Marketplace.controller;

import com.example.Marketplace.model.Message;
import com.example.Marketplace.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/messages")
@CrossOrigin
public class MessageController {

    @Autowired
    private MessageService messageService;

    @GetMapping("/sender/{id}")
    public ResponseEntity<List<Message>> getMessageBySenderId(@PathVariable("id") int id){
        List<Message> messages = messageService.getMessageBySender(id);
        return ResponseEntity.status(HttpStatus.OK).body(messages);
    }

    @GetMapping("/receiver/{id}")
    public ResponseEntity<List<Message>> getMessageByReceiverId(@PathVariable("id") int id){
        List<Message> messages = messageService.getMessageByReceiver(id);
        return ResponseEntity.status(HttpStatus.OK).body(messages);
    }

    @PostMapping("/create")
    public ResponseEntity<Void> addMessage(@RequestBody Message message){
        messageService.createMessage(message);
        return new ResponseEntity<Void>(HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteMessage(@PathVariable("id") int id){
        messageService.deleteMessage(id);
        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }

}
