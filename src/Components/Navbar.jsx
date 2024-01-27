import React from 'react'
import { FaFacebook ,FaInstagram , FaTwitter  } from "react-icons/fa"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
     <div className="header">
      <div className="container-fluid">
       <div className="row">
      <div className="col icons">
      <FaFacebook size={20} />&nbsp;&nbsp;&nbsp;
      <FaInstagram  size={20}/>&nbsp;&nbsp;&nbsp;
      <FaTwitter  size={20}/>&nbsp;&nbsp;&nbsp;
      </div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div className="col logo-img mt-3">
     <img width='200px' src="https://preview.colorlib.com/theme/cakeshop/assets/img/logo/logo.png" alt="" />
      </div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div className="col">
        <button className='btn-outline-warning rounded-0 mt-4 btn text-center'>Call Us: +107833464378</button>
      </div>
    </div>
      </div>
     </div>
{/* ================================NAVBAR 2========================= */}

<div class="navbar">
  <div class="container c1">
    <ul>
    &nbsp;&nbsp;<Link className="navbar-brand text-white" to='/'><li>HOME</li></Link>&nbsp;&nbsp;
    &nbsp;&nbsp;<Link className="navbar-brand text-white" to='/cake'><li>CAKES</li></Link>&nbsp;&nbsp;
    &nbsp;&nbsp;<Link className="navbar-brand text-white" to='/about'><li>ABOUT</li></Link>&nbsp;&nbsp;
    &nbsp;&nbsp;<Link className="navbar-brand text-white" to='/blog'><li>BLOG</li></Link>&nbsp;&nbsp;
    &nbsp;&nbsp;<Link className="navbar-brand text-white" to='/contact'><li>CONTACT</li></Link>&nbsp;&nbsp;
    </ul>
  </div>
</div>
{/* =========================End Nav 2============= */}
    </div>
  )
}

export {Navbar}
