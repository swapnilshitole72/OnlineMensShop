package com.shopx.dto;

import org.hibernate.validator.constraints.Range;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ReviewDTO {
	
	
	private String reviewText;
	
	@Range(min = 1, max = 5,message = "Rating is not in range")
	private int rating;
	
	private Long customer_id;

	private Long product_id;
}
