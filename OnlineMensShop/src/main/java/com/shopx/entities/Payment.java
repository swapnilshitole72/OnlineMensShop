package com.shopx.entities;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "payments")
@Getter
@Setter
@ToString
public class Payment extends BaseEntity{

	@CreationTimestamp
	private LocalDate paymentDate=LocalDate.now();
	
	private Double amountPaid;
	
	@Enumerated(EnumType.STRING)
	@Column(length = 50)
	private PaymentType paymentType;
	
	@OneToOne(cascade = CascadeType.ALL,orphanRemoval = true)
	@JoinColumn(name = "customer_id")
	private User customer;
	
	@OneToOne(cascade = CascadeType.ALL,orphanRemoval = true)
	@JoinColumn(name = "order_id")
	private Order order;
}
