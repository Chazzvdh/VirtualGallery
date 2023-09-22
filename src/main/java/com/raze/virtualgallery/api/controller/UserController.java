package com.raze.virtualgallery.api.controller;

import com.raze.virtualgallery.api.model.User;
import com.raze.virtualgallery.service.UserRegistrationRequest;
import com.raze.virtualgallery.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/all")
    public List<User> getAllUsers() {
        System.out.println("Getting all users...");
        System.out.println(userService.getAllUsers());
        return userService.getAllUsers();
    }

    @PostMapping("/register")
    public String registerUser(@RequestBody UserRegistrationRequest request) {
        User createdUser = userService.registerUser(request.getUsername(), request.getEmail(), request.getPassword());

        // Create a custom success message with user information

        return "User created successfully with this information: " + createdUser.toString();
    }

    // You can add more endpoints for user management as needed
}