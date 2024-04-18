package com.example.Marketplace.controller;

import com.example.Marketplace.model.Product;
import com.example.Marketplace.model.User;
import com.example.Marketplace.repository.ProductRepository;
import com.example.Marketplace.service.ImageService;
import com.example.Marketplace.service.ProductService;
import com.example.Marketplace.service.UserService;
import com.example.Marketplace.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

import static org.springframework.http.MediaType.*;

@RestController
@RequestMapping()
@CrossOrigin
public class ProductController {

    @Autowired
    private ProductService productService;
    @Autowired
    private UserServiceImpl userService;

    @Autowired
    private ImageService imageService;


    @GetMapping("/products")
    public ResponseEntity<List<Product>> getAll(){
        List<Product> products = productService.getAll();

        return ResponseEntity.status(HttpStatus.OK).body(products);
    }

    @GetMapping("/products/{id}")
    public ResponseEntity<Product> getById(@PathVariable int id){
        Product product = productService.getById(id);

        return ResponseEntity.status(HttpStatus.OK).body(product);
    }

    @PostMapping(value = "/products")
    public ResponseEntity<Product> create(@RequestBody Product product) throws IOException {

        product.setSellerId(userService.getCurrentUser());

        Product newProduct = productService.createProduct(product);

        return ResponseEntity.status(HttpStatus.OK).body(newProduct);
    }

    @PutMapping("/products/{id}")
    public ResponseEntity<Product> update(@PathVariable int id, @RequestBody Product product){
        Product updatedProduct = productService.updateProduct(id, product);

        return ResponseEntity.status(HttpStatus.OK).body(updatedProduct);
    }
    @DeleteMapping("/products/{id}")
    public void delete(@PathVariable int id){
        productService.deleteProduct(id);
    }

    @GetMapping("/seller")
    public ResponseEntity<List<Product>> getProductsByCurrentUser() {
        User currentUser = userService.getCurrentUser();
        int currentUserId = currentUser.getUserId();
        List<Product> products = productService.getProductsBySellerId(currentUserId);
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @GetMapping("/products/average-sales")
    public ResponseEntity<Double> getAverageSales() {
        User currentUser = userService.getCurrentUser();
        int currentUserId = currentUser.getUserId();
        double average = productService.getAverageSalesBySellerId(currentUserId);
        return ResponseEntity.status(HttpStatus.OK).body(average);
    }

    @GetMapping("/products/sold-by-category")
    public ResponseEntity<List<Map<String, Object>>> getSoldProductsByCategory() {
        User currentUser = userService.getCurrentUser();
        int currentUserId = currentUser.getUserId();
        List<Map<String, Object>> countByCategory = productService.getCountByCategory(currentUserId);
        return ResponseEntity.status(HttpStatus.OK).body(countByCategory);
    }

}
