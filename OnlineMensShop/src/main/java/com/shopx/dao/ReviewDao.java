package com.shopx.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shopx.entities.Product;
import com.shopx.entities.Review;

public interface ReviewDao extends JpaRepository<Review, Long> {

	List<Review> findByProduct(Product product);
}
