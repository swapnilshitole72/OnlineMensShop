package com.shopx.entities;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "orders")
@Getter
@Setter
@ToString
public class Order extends BaseEntity{
	
	@CreationTimestamp
	private LocalDate orderDate=LocalDate.now();
	
	private Double totalAmount;
	
	private Long quantity;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "customer_id")
	private User customer;
	
	@OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
	@JoinColumn(name = "product_id")
	private Product product;
}
