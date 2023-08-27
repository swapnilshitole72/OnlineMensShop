package com.shopx.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shopx.entities.Order;
import com.shopx.entities.User;

public interface OrderDao extends JpaRepository<Order, Long>{
	
	List<Order> findByCustomer(User customer);

}
