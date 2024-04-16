package com.example.Marketplace.service;

import com.example.Marketplace.model.Product;
import com.example.Marketplace.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class ProductService {


    @Autowired
    private ProductRepository productRepository;


    public List<Product> getAll(){
        return productRepository.findAll();

    }

    public Product getById(int id) {
        return productRepository.findById(id).get();
    }

    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    public Product updateProduct(int id, Product product) {
        return productRepository.save(product);
    }

    public void deleteProduct(int id) {
        productRepository.deleteById(id);
        return;
    }

    public List<Product> getProductsBySellerId(int userId) {
        return productRepository.findBySellerId_UserId(userId);
    }

    public double getAverageSalesBySellerId(int currentUserId) {
        return productRepository.findAverageSoldByUserId(currentUserId);
    }


    public List<Map<String, Object>> getCountByCategory(int currentUserId) {
        return productRepository.findCategoriesSoldByUserId(currentUserId);
    }
}
