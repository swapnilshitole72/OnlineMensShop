package com.shopx.service;

import java.util.List;
import java.util.NoSuchElementException;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.shopx.dao.CustomerDao;
import com.shopx.dto.SignUpDTO;
import com.shopx.entities.Customer;
import com.shopx.entities.RoleType;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {
	
	@Autowired
	private CustomerDao dao;
	
	@Autowired
	private ModelMapper mapper;
	
	//Registration or creating new customer
	@Override
	public Customer newCustomerRegistration(SignUpDTO newCustomer) {
		Customer customer = dao.save(mapper.map(newCustomer, Customer.class));		
		return customer;
	}

	//Finding all customer details
	@Override
	public List<Customer> getAllCustomerDetails() {
		return dao.findAll();
	}

	@Override
	public Customer getCustomerById(Long id) {
		
		return dao.findById(id).orElseThrow(()->new NoSuchElementException("Invalid Customer Id"));
	}

}