package com.shopx.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shopx.dto.PaymentRequestDTO;
import com.shopx.service.PaymentService;

@RestController
@RequestMapping("/payment")
@CrossOrigin(origins = "http://localhost:3000")
public class PaymentController {

	@Autowired
	private PaymentService paymentService;
	
	@GetMapping
	public ResponseEntity<?> getAllPaymentDetails()
	{
		return ResponseEntity.ok(paymentService.getAllPaymentDetails());
	}
	
	@PostMapping
	public ResponseEntity<?> addNewPaymentDetails(@RequestBody  PaymentRequestDTO payment)
	{
		System.out.println(payment);
		return ResponseEntity.status(HttpStatus.CREATED).body(paymentService.addNewPaymentDetails(payment));
	}
	
	
}
