package com.shopx.dto;


import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter

@AllArgsConstructor
@NoArgsConstructor
public class OTPVerificationDTO {
//    @JsonFormat(shape = JsonFormat.Shape.STRING)
private String otp;
private String email;

 


}
