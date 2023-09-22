package com.raze.virtualgallery.api.model;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.json.JsonMapper;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    public void setUsername(String username) {
        this.username = username;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public String getEmail() {
        return email;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", email='" + email + '\'' +
                '}';
    }

//    public static void main(String[] args) throws Exception {
//        ObjectMapper mapper = new JsonMapper();
//        List<User> users = new ArrayList<>();
//        users.add(new User());
//        users.get(0).setEmail("test@bla.bla");
//        users.get(0).setPassword("superrrrsecret");
//        users.get(0).setUsername("test");
//
//        users.add(new User());
//        users.get(1).setEmail("bubbahotep@mummies.nl");
//        users.get(1).setPassword("whydoesitwriteontheshithousewalls");
//        users.get(1).setUsername("bubba_875bc");
//
//        System.out.println(mapper.writeValueAsString(users));
//    }

    // Getters and setters
}
