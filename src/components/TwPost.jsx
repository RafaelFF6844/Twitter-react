import { useState } from 'react'
import './TwPostCard.css'
import TwUserBox from '../components/TwUserBox'

function TwPost({Tag,Username}) {
  

  return (
    <>
      <div className='Window-TwPost'>
        <TwUserBox Tag={Tag} Username={Username} Icon={"https://unavatar.io/"+Tag}/>
        <h3>¿En que estas pensando?</h3>
        <textarea className='form-control' cols="30" rows="10"></textarea>
        <br />
        <div className='btn btn-primary'>Postear</div>
      </div>
    </>
  )
}

export default TwPost