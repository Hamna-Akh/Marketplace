package com.example.Marketplace.service;

import com.example.Marketplace.model.Message;
import com.example.Marketplace.repository.MessageRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class MessageServiceTests {

    @InjectMocks
    MessageService messageService;

    @Mock
    MessageRepository messageRepository;

    @BeforeEach
    public void init() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void getMessageBySenderTest() {
        when(messageRepository.findBySenderId_UserId(1)).thenReturn(Arrays.asList(new Message(), new Message()));
        List<Message> messages = messageService.getMessageBySender(1);
        assertEquals(2, messages.size());
        verify(messageRepository, times(1)).findBySenderId_UserId(1);
    }

    @Test
    public void getMessageByReceiverTest() {
        when(messageRepository.findByReceiverId_UserId(1)).thenReturn(Arrays.asList(new Message(), new Message()));
        List<Message> messages = messageService.getMessageByReceiver(1);
        assertEquals(2, messages.size());
        verify(messageRepository, times(1)).findByReceiverId_UserId(1);
    }

    @Test
    public void createMessageTest() {
        Message message = new Message();
        when(messageRepository.save(message)).thenReturn(message);
        messageService.createMessage(message);
        verify(messageRepository, times(1)).save(message);
    }

    @Test
    public void deleteMessageTest() {
        doNothing().when(messageRepository).deleteById(1);
        messageService.deleteMessage(1);
        verify(messageRepository, times(1)).deleteById(1);
    }
}