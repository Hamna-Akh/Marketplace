package com.example.Marketplace.repository;

import com.example.Marketplace.model.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MessageRepository extends JpaRepository<Message, Integer> {

    @Query("select m from Message m where m.receiverId.userId = ?1")
    List<Message> findByReceiverId_UserId(Integer userId);

    @Query("select m from Message m where m.senderId.userId = ?1")
    List<Message> findBySenderId_UserId(Integer userId);

}
