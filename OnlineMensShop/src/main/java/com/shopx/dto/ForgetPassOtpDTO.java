package com.shopx.dto;

import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@AllArgsConstructor
public class ForgetPassOtpDTO {
	//@NotBlank(message = "Email is required")
	private String email;
	public ForgetPassOtpDTO() {
		// TODO Auto-generated constructor stub
	}
}
