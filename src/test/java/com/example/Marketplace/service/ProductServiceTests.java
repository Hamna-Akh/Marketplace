package com.example.Marketplace.service;

import com.example.Marketplace.model.Product;
import com.example.Marketplace.repository.ProductRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import lombok.Data;

import java.util.*;

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

    @Test
    public void testGetAverageSalesBySellerId() {
        int userId = 1;
        Double expectedAverage = 100.0;
        when(productRepository.findAverageSoldByUserId(userId)).thenReturn(expectedAverage);

        double actualAverage = productService.getAverageSalesBySellerId(userId);

        assertEquals(expectedAverage, actualAverage, "The average sales should match");
    }

    @Test
    public void testGetAverageSalesBySellerIdWhenNull() {
        int userId = 1;
        when(productRepository.findAverageSoldByUserId(userId)).thenReturn(null);

        double actualAverage = productService.getAverageSalesBySellerId(userId);

        assertEquals(0, actualAverage, "The average sales should be 0 when the repository returns null");
    }

    @Test
    public void testGetCountByCategory() {
        int userId = 1;
        List<Map<String, Object>> expectedList = new ArrayList<>();
        when(productRepository.findCategoriesSoldByUserId(userId)).thenReturn(expectedList);

        List<Map<String, Object>> actualList = productService.getCountByCategory(userId);

        assertEquals(expectedList, actualList, "The category counts should match");
    }
}