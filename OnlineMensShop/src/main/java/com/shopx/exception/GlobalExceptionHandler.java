package com.shopx.exception;

import java.util.NoSuchElementException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.shopx.custom_exception.ResourceNotFoundException;

@RestControllerAdvice
public class GlobalExceptionHandler {
	
	@ExceptionHandler(NoSuchElementException.class)
	public ResponseEntity<?> handleNoSuchElementException(NoSuchElementException e) {
//		System.out.println("method arg invalid " + e);
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getLocalizedMessage());
	}

	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<?> handleMethodArgumentNotValidException(MethodArgumentNotValidException e) {
//		System.out.println("method arg invalid " + e);
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getLocalizedMessage());
	}
	
	@ExceptionHandler(ResourceNotFoundException.class)
	public ResponseEntity<?> handleResourceNotFoundException(ResourceNotFoundException e) {
//		System.out.println("method arg invalid " + e);
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getLocalizedMessage());
	}
}