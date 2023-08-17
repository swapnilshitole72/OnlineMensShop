package com.shopx.dto;

import org.springframework.web.multipart.MultipartFile;

import com.shopx.entities.CategoryType;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ProductRequestDTO {
	
	
	private String productName;
	
	
	private String description;
	
	
	private double price;
	
	
	private CategoryType category;


	private int quantity;
	
	

}
