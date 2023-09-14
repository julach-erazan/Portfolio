import React from "react";

export default function Slider() {

    const imageArray = [
        'https://www.gstatic.com/webp/gallery/1.jpg',
        'https://www.gstatic.com/webp/gallery/1.jpg',
        // Add more image URLs as needed
      ];
    
      return (
        <div>
          {imageArray.map((imageUrl, index) => (
            <img key={index} src={imageUrl} alt="Hello" />
          ))}
        </div>
      );
    }