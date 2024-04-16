// import React from 'react'




// // debugger
// const Banner = () => {
//   return (
//     <div className='ImgContainer'>
//         <img src= {BannerImage} style={{width:'100%', height:'400px'}} alt="Banner"  />
        
      
//     </div>
//   )
// }

// export default Banner


import React, { useState, useEffect } from 'react';
import BannerImage from '../images/banner.png';
import Banner2Image from '../images/banner2.png';
import Banner4Image from '../images/banner4.jpg';
import Banner5Image from  '../images/banner5.jpg';
import Banner6Image from '../images/banner6.jpg';

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [BannerImage, Banner2Image, Banner4Image, Banner5Image, Banner6Image];

  // Function to update the current image
  const updateImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  useEffect(() => {
    // Set interval to change the image every 10 seconds
    const interval = setInterval(updateImage, 50000);

    // Clear interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="banner">
      <img src={images[currentImage]} style={{ width: '100%', height: '400px' }} alt="Banner" className="banner-image img-container" />

    </div>
  );
};

export default Banner;


