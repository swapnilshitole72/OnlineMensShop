package com.shopx.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@AllArgsConstructor
public class EditPassDTO {
private String email;
//private String oldPassword;
private String newPassword;
}
