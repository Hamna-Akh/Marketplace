import React, { useState, useEffect } from 'react';

import axios from 'axios';
  function DisplayImage({ filename }) {
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {

      fetchImage(filename);
    }, [filename]);


    function bigEndianToLittleEndian(buffer) {
        const length = buffer.length;
        const result = new Uint8Array(length);
        for (let i = 0; i < length; i++) {
            result[i] = buffer[length - i - 1];
        }
        return result;
    }
    const fetchImage = async (filename) => {
        if(filename){
            try {
                const imageByte = await axios.get(`http://localhost:8080/image/${filename}`, {responseType:"blob"}); // fetching the byte[]
                const url = URL.createObjectURL(imageByte.data);
                setImageUrl(url);
            } catch (error) {
                console.error("error fetching image:", error);
            }
        }
    };

    return (
      <div>
        {imageUrl && (
          <img src={imageUrl} alt={filename} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}/>
        )}
      </div>
    );
  }

  export default DisplayImage;