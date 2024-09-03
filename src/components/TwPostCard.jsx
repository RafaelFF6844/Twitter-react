import { useState } from 'react'
import './TwPostCard.css'
import TwUserBox from '../components/TwUserBox'

function TwPostCard({Tag,Username,Icon, Msn}) {
  

  return (
    <>
      <div className='Card-TwPost'>
        <TwUserBox Tag={Tag} Username={Username} Icon={"https://unavatar.io/"+Tag}/>
        <p>{Msn}</p>
      </div>
    </>
  )
}

export default TwPostCard
