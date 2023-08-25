import React, { useState } from 'react';
import axios from 'axios';

function UploadImageComponent({ empId }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedImage) {
      console.log("Please select an image.");
      return;
    }

    const formData = new FormData();
    formData.append('imageFile', selectedImage);
debugger
    try {
      const response = await axios.post(`http://localhost:8080/${empId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Image uploaded successfully:', response.data);
      // Handle success response
    } catch (error) {
      console.error('Error uploading image:', error);
      // Handle error
    }
  };

  return (
    <div>
      <h2>Upload Image</h2>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default UploadImageComponent;
