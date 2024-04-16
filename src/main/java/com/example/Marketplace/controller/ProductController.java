package com.example.Marketplace.controller;

import com.example.Marketplace.model.Product;
import com.example.Marketplace.model.User;
import com.example.Marketplace.repository.ProductRepository;
import com.example.Marketplace.service.ProductService;
import com.example.Marketplace.service.UserService;
import com.example.Marketplace.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping()
@CrossOrigin
public class ProductController {

    @Autowired
    private ProductService productService;
    @Autowired
    private UserServiceImpl userService;


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

    @PostMapping("/products")
    public ResponseEntity<Product> create(@RequestBody Product product){
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
}
