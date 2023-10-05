package com.raze.virtualgallery.api.repository;

import com.raze.virtualgallery.api.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PostRepository extends JpaRepository<Post, Long> {
    Post findByTitle(String title);
    List<Post> findAll();
}
