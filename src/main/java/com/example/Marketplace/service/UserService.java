package com.example.Marketplace.service;

import com.example.Marketplace.model.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    List<User> getAll();

    User addUser(User user);

    User getUserById(Integer id);

    void deleteUser(Integer id);

    User updateUser(User user);

    User findByEmail(String email);
}
