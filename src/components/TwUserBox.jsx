import { useState } from 'react'
import './TwUserBox.css'

function TwUserBox({Tag,Username,Icon}) {
  

  return (
    <>
      <div className='Card-TwUser'>
        <img src={"https://unavatar.io/" + Tag}/>
        <div className='Card-TwUser-info'>
          <b>{Username}</b>
          <p>@{Tag}</p>
        </div>
        
      </div>
      
    </>
  )
}

export default TwUserBox
