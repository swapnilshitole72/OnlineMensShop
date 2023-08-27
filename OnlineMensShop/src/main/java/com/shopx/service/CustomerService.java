package com.shopx.service;

import java.util.List;

import com.shopx.dto.ChangePasswordDTO;
import com.shopx.dto.EditCustomerDTO;
import com.shopx.dto.EditPassDTO;
import com.shopx.dto.EditPasswordDTO;
import com.shopx.dto.LoginDTO;
import com.shopx.dto.OTPVerificationDTO;
import com.shopx.dto.SignUpDTO;
import com.shopx.entities.User;



public interface CustomerService {

	public User newCustomerRegistration(SignUpDTO newCustomer);
	
	public List<User> getAllCustomerDetails();
	
	public User getCustomerById(Long id);
	
	public User loginValidationForm(LoginDTO login);
	
	public User editCustomerProfil(EditCustomerDTO editCustomer);
	
	public String editCustomerPassword(EditPasswordDTO pass);
	
	public User addAddress(Long userId, String address);
	
	public void getOtpForForgotPass(String emailId);
	 public boolean verifyOTP(OTPVerificationDTO otpVerificationDTO);
//	public SignUpResponseDTO storeUserDataWithNewPass(EditPassDTO newPass);
	
	public boolean forgotchangePassword(EditPassDTO changePasswordDTO);
//public void sendOTPAndStoreUserData(SignUpDTO userRegistrationDTO);
	public String changePassword(ChangePasswordDTO changepassdto );
}
