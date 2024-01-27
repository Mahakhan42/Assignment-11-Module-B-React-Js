import React from 'react'
import { FaInstagram   } from "react-icons/fa";

export const FollowUs = () => {
  return (
    <div>
      <div className="container">
  <center><h1>Follow us on Instagram</h1><br />
  <button className='btn2'><FaInstagram  size={20}/>CAKE SHOP</button></center>
  <br /><br /><br /><br />
  <div className="row">
    <div className="col-md-3">
<img width='100%' src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/instra1.jpg" alt="" />
    </div>
    <div className="col-md-3">
    <img width='100%' src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/instra2.jpg" alt="" />
      </div>
      <div className="col-md-3">
      <img width='100%' src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/instra3.jpg" alt="" />
      </div>
      <div className="col-md-3">
      <img width='100%' src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/instra4.jpg" alt="" />
      </div>
  </div>
</div>
    </div>
  )
}


