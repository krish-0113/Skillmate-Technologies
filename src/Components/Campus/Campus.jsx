// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Campus.css'
import gallary_1 from '../../assets/gallary_1.jpeg'
import gallary_5 from '../../assets/gallary_5.jpeg'
import gallary_3 from '../../assets/gallary_3.jpeg'
import gallary_4 from '../../assets/gallary_4.jpeg'
import white_arrow from '../../assets/white_arrow.png'

const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallary">
        <img src={gallary_1} alt="" />
        <img src={gallary_5} alt="" />
        <img src={gallary_3} alt="" />
        <img src={gallary_4} alt="" />
      </div>
      <button className='btn dark-btn'>See more here
        <img src={white_arrow}alt="" />
      </button>
      </div>
    
  )
}

export default Campus
