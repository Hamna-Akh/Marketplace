package com.example.Marketplace.repository;

import com.example.Marketplace.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
    @Query("select p from Product p where p.sellerId.userId = ?1")
    Product findBySellerId_UserId(Integer userId);
    List<Product> findBySellerId_UserId(int userId);
}
