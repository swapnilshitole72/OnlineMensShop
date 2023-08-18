package com.shopx.service;

import java.util.List;

import com.shopx.dto.PaymentRequestDTO;
import com.shopx.entities.Payment;

public interface PaymentService {

	public List<Payment> getAllPaymentDetails();
	
	public Payment addNewPaymentDetails(PaymentRequestDTO dto);
}
