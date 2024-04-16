package com.example.Marketplace.repository;

import com.example.Marketplace.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
    @Query("select p from Product p where p.sellerId.userId = ?1")
    Product findBySellerId_UserId(Integer userId);
    List<Product> findBySellerId_UserId(int userId);

    @Query("SELECT AVG(p.price) FROM Product p WHERE p.sellerId.userId = :userId AND p.status = SOLD")
    Double findAverageSoldByUserId(int userId);

    @Query("SELECT p.category as category, COUNT(p) as count FROM Product p WHERE p.sellerId.userId = :userId AND p.status = 'SOLD' GROUP BY p.category")
    List<Map<String, Object>> findCategoriesSoldByUserId(int userId);}
