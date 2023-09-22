package com.raze.virtualgallery.api.repository;

import com.raze.virtualgallery.api.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);

    User findByEmail(String email);

    // Add this method to get all users
    List<User> findAll();
}

