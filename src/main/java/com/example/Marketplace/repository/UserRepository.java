package com.example.Marketplace.repository;

import com.example.Marketplace.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    User findByPassword(String password);

    User findByUserId(@Nullable Integer userId);

    @Query("select u from User u where u.email = ?1")
    User findByEmail(String email);
}
