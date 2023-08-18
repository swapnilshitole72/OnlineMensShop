package com.shopx.entities;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "cart_items")
@Getter
@Setter
@ToString
public class CartItem extends BaseEntity{

	
	private int quantity;
	
	private double totalPrice;
	
	@ManyToOne
	@JoinColumn(name = "cart_id")
	private ShoppingCart myCart;
	
	@OneToOne
	@JoinColumn(name = "product_id")
	private Product product;
}
