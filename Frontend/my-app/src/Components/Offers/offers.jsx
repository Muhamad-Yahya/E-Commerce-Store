import React from 'react'
import './offers.css'
import exclusive_image from '../Assests/exclusive_image.png'
const offer = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusive Offers For You</h1>
        <p>Only On Best Sellers Poduct</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
<img src={ exclusive_image} alt="" />
      </div>
    </div>
  )
}

export default offer
