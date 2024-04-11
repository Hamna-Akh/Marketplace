package com.example.Marketplace.controller;

import com.example.Marketplace.model.User;
import com.example.Marketplace.repository.UserRepository;
import com.example.Marketplace.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping()
@CrossOrigin
public class UserController {

    @Autowired
    private UserServiceImpl userService;


    @GetMapping("/users")
    public ResponseEntity<List<User>> getAll(){
        List<User> users = userService.getAll();

        return ResponseEntity.status(HttpStatus.OK).body(users);
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<User> getUserById(@PathVariable("id") Integer id) {
        User user = userService.getUserById(id);
        return new ResponseEntity<User>(user, HttpStatus.OK);
    }

    @PostMapping("/user")
    public ResponseEntity<Void> userAdd(@RequestBody User user) {
        userService.addUser(user);
        return new ResponseEntity<Void>(HttpStatus.CREATED);
    }

    @DeleteMapping("/user/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable("id") Integer id) {
        userService.deleteUser(id);
        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }

    @PutMapping("/user/update")
    public ResponseEntity<User> updateUser(@RequestBody User user) {
        userService.updateUser(user);
        return new ResponseEntity<User>(user, HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User loginUser) {
        // Fetch the user from the database based on the provided email
        User user = userService.findByEmail(loginUser.getEmail());

        if (user != null && user.getPassword().equals(loginUser.getPassword())) {
            // Return a success message or a token
            return ResponseEntity.ok("Login successful");
        } else {
            // Return a failure message or handle invalid credentials
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }
}
