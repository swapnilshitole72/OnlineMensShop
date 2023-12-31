package com.shopx.service;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import org.apache.commons.io.FileUtils;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.multipart.MultipartFile;

import com.shopx.custom_exception.ResourceNotFoundException;
import com.shopx.dao.ProductDao;
import com.shopx.dto.ProductResponseDTO;
import com.shopx.entities.Product;
import com.shopx.entities.User;

@Service
@Transactional

public class ImageHandlingServiceImpl implements ImageHandlingService {
	//dep:product dao i/f
	
	@Autowired
	private ProductDao productDao;
	
	@Autowired
	private ModelMapper mapper;
	
	//to inject the value of a property : "upload.location", from app property file
	//Filed level DI, for injecting the value: using SpEL (Spring expression language)
	@Value("${upload.location}")
	private String folderLocation;
	
	@PostConstruct
	public void init() {
		System.out.println("in init"+folderLocation);
		//check if folder exists
		File folder=new File(folderLocation);
		if(folder.exists())
			System.out.println("folder already exists");
		else {
			folder.mkdir();//creates a new folder
		System.out.println("created a new folder...");	
		}
	}
	
	@Override
	public String uploadImage(Long productId, MultipartFile file) throws IOException {
		//check if product exists by id
		System.out.println("in thisw kdfa;l "+productId);
		Product product = productDao.findById(productId).orElseThrow(()->new ResourceNotFoundException("Invalid product id!!"));
		//product: persistent
		//save uploaded file contents in server side folder.
		String path=folderLocation.concat(file.getOriginalFilename());
		System.out.println("path "+path);
		//FileUtils class : to read byte[] from multipart file---> server side folder
		//API; public void writeByteArrayToFile(File file, byte[] data) throws IOException
		FileUtils.writeByteArrayToFile(new File(path), file.getBytes());
		
		product.setImagePath(path);
		return new String("File uploaded and stord in server side folder");
	}
	
	@Override
	public byte[] downloadImage(Long productId) throws IOException {
		// get product from DB
		System.out.println(productId);
		Product product = productDao.
				findById(productId).orElseThrow(() -> new ResourceNotFoundException("Invalid product id !!!!!"));
		// => product exists !
		// chk if image path exists
		if (product.getImagePath() != null) {
			// img exists , read file contents in to byte[]	
			return FileUtils.readFileToByteArray(new File(product.getImagePath()));
		}
		throw new ResourceNotFoundException("Image not yet assigned!!!!");
	}
	
	@Override
	public List<ProductResponseDTO> downloadImageAll() throws IOException {
		List<Product> products = productDao.findAll();
        List<ProductResponseDTO> productDTOs = new ArrayList<>();
        byte[] imageData = null;
        for (Product product : products) {
            ProductResponseDTO productDTO = new ProductResponseDTO();
            productDTO.setId(product.getId());
            productDTO.setProductName(product.getProductName());
            productDTO.setDescription(product.getDescription());
            productDTO.setPrice(product.getPrice());
            if (product.getImagePath() != null) {	
            	imageData =	 FileUtils.readFileToByteArray(new File(product.getImagePath()));
    		}
            productDTO.setImage(imageData);
            productDTOs.add(productDTO);
        }
        return productDTOs;
	}

}
