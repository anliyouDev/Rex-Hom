import React from 'react'
import './Footer.scss'
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='sous-conteneur-footer'>
        <div className="top">
          <FaLinkedin className='social-icon'/> 
          <FaFacebook className='social-icon'/>
          <FaYoutube className='social-icon'/>
          <FaSquareXTwitter className='social-icon'/>

        </div>
        <div className="bottom">
            © 2025 rexhome.com - Designed by AnliyouDev.
        </div>
    </div>
  )
}

export default Footer