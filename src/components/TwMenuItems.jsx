import { useState } from 'react'
import './TwMenuItems.css'

function TwMenuItems({iconoURL,enunciado}) {
  

  return (
    <>
      <div className='Box-TwMenuItems'>
        <img src={iconoURL}/>
        <p>{enunciado}</p>
      </div>
    </>
  )
}

export default TwMenuItems
