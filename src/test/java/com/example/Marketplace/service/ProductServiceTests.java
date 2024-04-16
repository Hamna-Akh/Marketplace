package com.example.Marketplace.service;

import com.example.Marketplace.model.Product;
import com.example.Marketplace.repository.ProductRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import lombok.Data;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
        import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class ProductServiceTest {

    @InjectMocks
    private ProductService productService;

    @Mock
    private ProductRepository productRepository;

    @Test
    void testGetAll() {
        Product product1 = new Product();
        Product product2 = new Product();
        when(productRepository.findAll()).thenReturn(Arrays.asList(product1, product2));

        List<Product> products = productService.getAll();

        assertNotNull(products);
        assertEquals(2, products.size());
    }

    @Test
    void testGetById() {
        Product product = new Product();
        product.setListingId(1);

        when(productRepository.findById(1)).thenReturn(Optional.of(product));

        Product found = productService.getById(1);

        assertNotNull(found);
        assertEquals(1, found.getListingId());
    }

    @Test
    void testCreateProduct() {
        Product product = new Product();
        when(productRepository.save(any(Product.class))).thenReturn(product);

        Product created = productService.createProduct(product);

        assertNotNull(created);
    }

    @Test
    void testUpdateProduct() {
        Product product = new Product();
        when(productRepository.save(any(Product.class))).thenReturn(product);

        Product updated = productService.updateProduct(1, product);

        assertNotNull(updated);
    }

    @Test
    void testDeleteProduct() {
        doNothing().when(productRepository).deleteById(1);

        productService.deleteProduct(1);

        verify(productRepository, times(1)).deleteById(1);
    }
}