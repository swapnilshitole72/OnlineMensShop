package com.shopx.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shopx.dto.SignUpDTO;
import com.shopx.entities.Customer;
//import com.shopx.service.CustomerService;
import com.shopx.service.CustomerService;

@RestController
@RequestMapping("/customer")
public class CustomerController {
	
	@Autowired
	private CustomerService customerService;
	
	@PostMapping
	public ResponseEntity<?> newCustomerRegistration(@RequestBody @Valid SignUpDTO newCustomer)
	{
		Customer customer = customerService.newCustomerRegistration(newCustomer);
		return ResponseEntity.status(HttpStatus.CREATED).body(customer);
	}
	
	@GetMapping
	public ResponseEntity<?> getAllCustomerDetails()
	{
		return ResponseEntity.status(HttpStatus.OK).body(customerService.getAllCustomerDetails());
	}
	
	@GetMapping("/{custId}")
	public ResponseEntity<?> getCustomerById(Long custId)
	{
		return ResponseEntity.status(HttpStatus.FOUND).body(customerService.getCustomerById(custId));
	}
	
	
	
	

}