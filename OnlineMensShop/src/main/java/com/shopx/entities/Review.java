package com.shopx.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.Min;

import org.hibernate.validator.constraints.Range;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "review")
@Getter
@Setter
@ToString
public class Review extends BaseEntity{

		@Column(length = 200)
		private String reviewText;
		
		@Range(min = 1, max = 5,message = "Rating is not in range")
		private int rating;
		
		@ManyToOne(cascade = CascadeType.ALL)
		@JoinColumn(name = "customer_id")
		private User customer;
		
		@OneToOne(cascade = CascadeType.ALL,orphanRemoval = true)
		@JoinColumn(name = "product_id")
		private Product product;
		
}
