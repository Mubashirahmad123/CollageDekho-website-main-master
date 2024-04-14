import React from 'react'
import BannerImage from '../images/banner.png';
import Banner2Image from  '../images/banner2.png'
import Banner3Image from  '../images/banner3.png'



// debugger
const Banner = () => {
  return (
    <div className='ImgContainer'>
        <img src= {BannerImage} style={{width:'100%', height:'400px'}} alt="Banner"  />
        
      
    </div>
  )
}

export default Banner
