package com.raze.virtualgallery.api.controller;

import com.raze.virtualgallery.api.model.Post;
import com.raze.virtualgallery.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/posts")
public class PostController {
    private final PostService postService;

    @Autowired
    public PostController(PostService postService) {
        this.postService = postService;
    }

    @GetMapping("/all")
    public List<Post> getAllPosts() {
        System.out.println(String.format("Getting post request from client %s, getting all posts.", postService.getClass().getSimpleName()));
        return postService.getAllPosts();
    }
}
