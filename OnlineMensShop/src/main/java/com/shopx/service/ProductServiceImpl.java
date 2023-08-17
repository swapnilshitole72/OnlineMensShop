package com.shopx.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shopx.dao.ProductDao;
import com.shopx.dto.ProductRequestDTO;
import com.shopx.entities.CategoryType;
import com.shopx.entities.Product;

@Service
@Transactional
public class ProductServiceImpl implements ProductService {

	@Autowired
	private ProductDao productDao;
	
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public Product addNewProduct(ProductRequestDTO product) {
		return productDao.save(mapper.map(product, Product.class));
	}

	@Override
	public List<Product> getAllProducts() {		
		return productDao.findAll();
	}

	@Override
	public Optional<Product> getProductById(Long id) {
		Optional<Product> product = productDao.findById(id);
		return product;
	}

	@Override
	public String deleteProductById(Long id) {
		productDao.deleteById(id);
		return "Product deleted Successfully";
	}

	@Override
	public List<Product> findProductByCategory(CategoryType category) {		
		return productDao.findByCategory(category);
	}

	@Override
	public List<Product> findProductByProductName(String name) {
		return productDao.findByProductName(name);
	}

	@Override
	public Product updateProductDetails(Product product) {
		return productDao.saveAndFlush(product);
	}

}