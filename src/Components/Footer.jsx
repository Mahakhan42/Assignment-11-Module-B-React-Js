import React from 'react'
import { FaFacebook ,FaInstagram , FaTwitter ,FaLocationArrow ,FaPhoneAlt  } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-6">
            <img width='200px' src="https://preview.colorlib.com/theme/cakeshop/assets/img/logo/logo.png" alt="" />
            </div>
            <div className="col-md-6 d-flex work">
            <p>HOME</p>
            <p>CAKES</p>
            <p>ABOUT</p>
           <p>BLOG</p>
            <p>CONTACT</p>
            </div>
            <br /><br />
<hr />
<br /><br /><br />
<div className="col-md-4">
    <p>Consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <br /> <button style={{border:'1px solid grey',background:'none',color:'#fff',padding:'10px 24px'}}><FaInstagram  size={15}/>&nbsp;&nbsp;Instagram</button>
    &nbsp;<button style={{border:'1px solid grey',background:'none',color:'#fff',padding:'10px 24px'}}><FaFacebook  size={15}/>&nbsp;&nbsp;Facebook</button>
    &nbsp;<button style={{border:'1px solid grey',background:'none',color:'#fff',padding:'10px 24px'}}><FaTwitter  size={15}/>&nbsp;Twitter</button>
</div>
<div className="col-md-4">
<FaLocationArrow  size={30}/><br /><br />
    <h3 className='text-warning'>Location</h3>
    <h6>4736 Poe Lane, HOT  <br />SPRINGS, Montana-59845</h6>
</div>
<div className="col-md-4">
<FaPhoneAlt  size={30}/><br /><br />
    <h3 className='text-warning'>Location</h3>
    <h6>4736 Poe Lane, HOT  <br />SPRINGS, Montana-59845</h6>
</div>
</div>
<br /><br /><br />
<hr />
<br />
<p align='center'>Copyright ©2024 All rights reserved | CakeShop </p>
    </div>
  )
}

export {Footer} 
