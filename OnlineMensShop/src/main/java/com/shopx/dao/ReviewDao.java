package com.shopx.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.shopx.entities.Product;
import com.shopx.entities.Review;

@Repository
public interface ReviewDao extends JpaRepository<Review, Long> {

	List<Review> findByProduct(Product product);
	
	@Query(value="select avg(rating) from review  where product_id=?1",nativeQuery = true)
	  Double getAvgRatingOfProductById(Long productId);
	
	
//	@Query(value="select product_id as productId, avg(rating) as rating from review  group by product_id",nativeQuery = true)
//	List<AvgRatingResponseDTO> getAvgRatingProductOfAllProducts();
}
