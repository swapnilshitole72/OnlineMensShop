package com.shopx.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shopx.entities.OTP;

public interface OTPRepository extends JpaRepository<OTP,Long >{
OTP findByEmail(String email);
}
