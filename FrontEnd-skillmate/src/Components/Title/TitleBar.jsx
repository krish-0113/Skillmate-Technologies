// eslint-disable-next-line no-unused-vars
import React from 'react'
import './TitleBar.css';

// eslint-disable-next-line react/prop-types
const TitleBar = ({subTitle,title}) => {
  return (
    <div className='title'>
      <p>{title}</p>
      <h2>{subTitle}</h2>
    </div>
  )
}

export default TitleBar
