import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import img1 from '../img/img1.JPG'
import img2 from '../img/img2.JPG'

export default function Backgroundremover_slider() {

  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <img src={img1} alt="img1" onDragStart={handleDragStart} role="presentation" />,
    <img src={img2} alt="img2" onDragStart={handleDragStart} role="presentation" />,
  ];
    
      return (
        <div className='w-[100%] h-[100%] flex items-center'>
          <AliceCarousel autoPlay infinite autoPlayInterval={"1000"} mouseTracking items={items} />
        </div>
      );
    }