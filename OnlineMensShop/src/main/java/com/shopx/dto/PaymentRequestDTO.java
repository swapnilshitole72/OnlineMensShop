package com.shopx.dto;

import com.shopx.entities.PaymentType;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class PaymentRequestDTO {
	
	private Double amountPaid;
	
	private PaymentType paymentType;
	
	private Long customerId;
	
	private Long orderId;

}
