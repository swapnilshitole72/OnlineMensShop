package com.shopx.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shopx.entities.Payment;

public interface PaymentDao extends JpaRepository<Payment, Long>{

}
