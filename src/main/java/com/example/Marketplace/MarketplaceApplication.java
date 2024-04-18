package com.example.Marketplace;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


//@EnableSwagger2
//@EnableWebMvc
@SpringBootApplication
public class MarketplaceApplication implements WebMvcConfigurer {

	public static void main(String[] args) {
		SpringApplication.run(MarketplaceApplication.class, args);
	}


}
