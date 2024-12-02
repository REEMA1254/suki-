import React from 'react'
import "../styles/Footer.css"
export default function Footer(props) {
  return (
    <div>
      <div className='footer'> 
        <a href='/'>HOME</a>
      <div>Footer</div>
      <div>{props.socials}</div>
      </div>
    </div>
  )
}
