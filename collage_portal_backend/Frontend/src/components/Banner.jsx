import React from 'react'
import BannerImage from '../images/banner.png';

// debugger
const Banner = () => {
  return (
    <div className='ImgContainer'>
        <img src= {BannerImage} style={{width:'100%', height:'400px'}} alt="Banner"  />
        
      
    </div>
  )
}

export default Banner
