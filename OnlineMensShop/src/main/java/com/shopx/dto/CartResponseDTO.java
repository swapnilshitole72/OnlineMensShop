package com.shopx.dto;

import com.shopx.entities.Product;
import com.shopx.entities.ShoppingCart;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class CartResponseDTO {

	
	private int quantity;
	private double totalPrice;
	private ShoppingCart myCart;
	private Product product;
}
