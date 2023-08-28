import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductImage(props) {
  const {prodId,height,width}=props;
  const [imageData, setImageData] = useState(null);

  const handleImageLoad = () => {
    axios
      .get(`http://localhost:8080/product/${prodId}/image`, { responseType: 'arraybuffer' }) // Replace with your actual API URL
      .then(response => {
        const blob = new Blob([response.data], { type: response.headers['content-type'] });
        setImageData(URL.createObjectURL(blob));
      })
      .catch(error => {
        console.error('Error fetching image:', error);
      });
  };

  useEffect(() => {
    handleImageLoad();
  }, []);

  return (
    <div >
      {imageData && <img src={imageData} class="card-img-top" alt={''} height={height} width={width} />}
    </div>
  );
}

export default ProductImage;
