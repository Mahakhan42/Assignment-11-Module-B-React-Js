import React from 'react'
import { FollowUs } from '../Components/FollowUs'

export const Cake = () => {
  return (
    <div>
      {/* ==============Section 1 banner ============ */}
    <div className='banner2 text-white'>
  <div className="text-content">
    <br /><br /><br />
    <h3 className='p-5' style={{fontSize:70,fontFamily: "Times New Roman"}}>Delicious Cakes</h3>
  </div>
  </div>
  <br /><br /><br /><br /><br />
  <div className="container">
    <div className="row">
        <div className="col-md-4">
            <img width='100%' src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/items1.jpg" alt="" />
            <br /><br />
            <h4>Cashmere Tank + Bag</h4>
            <h5 className='text-warning'>$98.00</h5>
        </div>
        <div className="col-md-4">
            <img width='100%' src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/items2.jpg" alt="" />
            <br /><br />
            <h4>Cashmere Tank + Bag</h4>
            <h5 className='text-warning'>$98.00</h5>
        </div>
        <div className="col-md-4">
            <img width='100%' src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/items3.jpg" alt="" />
            <br /><br />
            <h4>Cashmere Tank + Bag</h4>
            <h5 className='text-warning'>$98.00</h5>
        </div>
        <br /><br />
        <div className="col-md-4">
            <img width='100%' src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/items4.jpg" alt="" />
            <br /><br />
            <h4>Cashmere Tank + Bag</h4>
            <h5 className='text-warning'>$98.00</h5>
        </div>
        <div className="col-md-4">
            <img width='100%' src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/items5.jpg" alt="" />
            <br /><br />
            <h4>Cashmere Tank + Bag</h4>
            <h5 className='text-warning'>$98.00</h5>
        </div>
        <div className="col-md-4">
            <img width='100%' src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/items6.jpg" alt="" />
            <br /><br />
            <h4>Cashmere Tank + Bag</h4>
            <h5 className='text-warning'>$98.00</h5>
        </div>
    </div>
  </div>
  <br /><br /><br />  <br /><br /><br />
  <FollowUs/>
  <br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  )
}

