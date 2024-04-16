package com.example.Marketplace.service;

import com.example.Marketplace.model.User;
import com.example.Marketplace.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class UserServiceImplTests {

    @InjectMocks
    UserServiceImpl userService;

    @Mock
    User currentUser;

    @Mock
    UserRepository userRepository;

    @BeforeEach
    public void init() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void getAllTest() {
        when(userRepository.findAll()).thenReturn(Arrays.asList(new User(), new User()));
        List<User> users = userService.getAll();
        assertEquals(2, users.size());
        verify(userRepository, times(1)).findAll();
    }

    @Test
    public void addUserTest() {
        User user = new User();
        when(userRepository.save(user)).thenReturn(user);
        User created = userService.addUser(user);
        assertEquals(created, user);
        verify(userRepository, times(1)).save(user);
    }

    @Test
    public void getUserByIdTest() {
        User user = new User();
        when(userRepository.findById(1)).thenReturn(Optional.of(user));
        User found = userService.getUserById(1);
        assertEquals(found, user);
        verify(userRepository, times(1)).findById(1);
    }

    @Test
    public void deleteUserTest() {
        doNothing().when(userRepository).deleteById(1);
        userService.deleteUser(1);
        verify(userRepository, times(1)).deleteById(1);
    }

    @Test
    public void updateUserTest() {
        User user = new User();
        user.setUserId(1);
        when(userRepository.findById(1)).thenReturn(Optional.of(user));
        when(userRepository.save(user)).thenReturn(user);
        User updated = userService.updateUser(user);
        assertEquals(updated, user);
        verify(userRepository, times(1)).findById(1);
        verify(userRepository, times(1)).save(user);
    }

    @Test
    public void findByEmailTest() {
        User user = new User();
        user.setEmail("test@example.com");
        when(userRepository.findByEmail("test@example.com")).thenReturn(Optional.of(user));
        User found = userService.findByEmail("test@example.com");
        assertEquals(found, user);
        verify(userRepository, times(1)).findByEmail("test@example.com");
    }

    @Test
    public void getCurrentUserTest() {
        User user = new User();
        userService.setCurrentUser(user);
        User current = userService.getCurrentUser();
        assertEquals(current, user);
    }

    @Test
    public void setCurrentUserTest() {
        User user = new User();
        userService.setCurrentUser(user);
        User current = userService.getCurrentUser();
        assertEquals(current, user);
    }
}