package com.shopx.service;

import java.util.List;
import java.util.Optional;

import com.shopx.dto.ProductRequestDTO;
import com.shopx.entities.CategoryType;
import com.shopx.entities.Product;



public interface ProductService {
	
	
	public Product addNewProduct(ProductRequestDTO product);
	
	public List<Product> getAllProducts();
	
	public Optional<Product> getProductById(Long id);
	
	public String deleteProductById(Long id);
	
	public List<Product> findProductByCategory(CategoryType category);
	
	public List<Product> findProductByProductName(String name);
	
	public Product updateProductDetails(Product product);
}
