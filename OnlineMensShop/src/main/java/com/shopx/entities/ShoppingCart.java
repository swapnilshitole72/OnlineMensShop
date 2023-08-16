package com.shopx.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "carts")
@Getter
@Setter
@ToString(exclude = {"cartOwner","cartItems"})
public class ShoppingCart extends BaseEntity{
	
	private int totalItems;
	
	private double totalCartPrice;

	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "customer_id") // FK constraint
	private User cartOwner;

	@OneToMany(mappedBy = "myCart", cascade = CascadeType.ALL, orphanRemoval = true/* ,fetch = FetchType.EAGER */)
	private List<CartItem> cartItems = new ArrayList<>();

}