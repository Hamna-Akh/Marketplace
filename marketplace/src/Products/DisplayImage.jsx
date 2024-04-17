import React, { useState, useEffect } from 'react';

import axios from 'axios';
  function DisplayImage({ filename }) {
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
      fetchImage(filename)
    }, [filename]);

    const fetchImage = async (filename) => {
        try {
            const imageByte = await axios.get(`http://localhost:8080/image/${filename}`); // fetching the byte[]
            const blob = new Blob([imageByte.data], {type: 'image/png'});
            const url = URL.createObjectURL(blob);
            setImageUrl(url);
            console.log(url);
        } catch (error) {
            console.error("error fetching image:", error);
        }
    };
    console.log(imageUrl);
    return (
      <div>
        {imageUrl && (
//           <img src={imageUrl} alt="Uploaded Image" style={{ maxWidth: '100%', maxHeight: '100%' }} />
          <img src={imageUrl} alt={filename}/>
//           <img className="product-image" src={imageUrl || 'placeholder_image.jpg'} alt={filename}/>
        )}
      </div>
    );
  }

  export default DisplayImage;