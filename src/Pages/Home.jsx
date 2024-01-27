import React from 'react'
import { CakeProducts } from '../Components/CakeProduct'
import { FollowUs } from '../Components/FollowUs';

export const Home = () => {
  return <>
{/* ==============Section 1 banner ============ */}
    <div className='banner text-white'>
  <div className="text-content">
    <h1 className='p-5' style={{fontSize:80,fontFamily: "Times New Roman"}}>Healthy Made <br /> Delicious Cake</h1>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button className='btn2'>ORDER NOW</button>
  </div>
  </div>
  <br /><br /><br />
{/* ==============Section 2============ */}
<div className="text-center">
<h2>This is Schilers Awesome Food Theme. <br /> Purchase it and eat Burgers.</h2>
<center><span style={{color:'#FDB515'}}><b>___________</b></span></center>
</div>
 <br /><br /><br />
{/* ===================================section 3========== */}
 <div className="container">
  <div className="row">
  <div className="col-md-6">
    <h4 style={{color: '#FDB515'}}>This is Schilers. Awesome Food Theme. <br />Purchase it and eat Burgers.</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehen derit in voluptate velit esse cillum.</p>
    <p>Consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehen derit in voluptate velit esse cillum.</p>
  </div>
  <div className="col-md-6">
    <img width='100%' src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/about1.jpg" alt="" />
  </div>
</div>
</div>
<CakeProducts/>
<br />
{/* =================Section 4=========== */}
<div className="container">
<iframe width="100%" height="600" src="https://www.youtube.com/embed/up68UAfH0d0?si=JmqLI1WmmslSadji&amp;start=35" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
<br /><br /><br />
{/*================= section 5 =============*/}
<div className="container">
  <h1 align='center'>Food Lover's Say</h1>
  <div className="row mt-4">
    <div className="col-md-4 cards"><br />
      <span>⭐⭐⭐⭐⭐</span><br /><br />
      <h3>"Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter labore et dolore magna.</h3><br />
      <p><img width='40' src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/customer1.png" alt="" />&nbsp; &nbsp;Wilma Mumduya</p>
    </div>
    <br />
    <div className="col-md-4 cards"><br />
      <span>⭐⭐⭐⭐⭐</span><br /><br />
      <h3>"Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter labore et dolore magna.</h3><br />
      <p><img width='40' src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/customer2.png" alt="" />&nbsp; &nbsp;Wilma Mumduya</p>
    </div>
    <br />
    <div className="col-md-4 cards"><br />
      <span>⭐⭐⭐⭐⭐</span><br /><br />
      <h3>"Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter labore et dolore magna.</h3><br />
      <p><img width='40' src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/customer3.png" alt="" />&nbsp; &nbsp;Wilma Mumduya</p>
    </div>
  </div>
</div>
<br /><br /><br /><br /><br /><br />
{/*============== section6============= */}
<div className="container d-flex">
<h1>Our Blogs</h1>
<button className='btn2 ms-auto'>MORE BLOG</button>
</div>
<br /><br />
{/* ===========section 7============ */}
<div className="container-fluid">
  <div className="row">
    <div className="col-md-3">
      <img width='100%' src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/blog1.jpg" alt="" />
    </div>
    <div className="col-md-3  cardsshow">
      <h3 className='text-warning'>Tomato, black olive, feta & anchovy tart ulla mco laboris</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip.</p>
      <button className='btn2'>LEARN MORE</button>
    </div>
    <div className="col-md-3">
      <img width='100%' src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/blog2.jpg" alt="" />
    </div>
    <div className="col-md-3  cardsshow">
      <h3 className='text-warning'>Tomato, black olive, feta & anchovy tart ulla mco laboris</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip.</p>
      <button className='btn2'>LEARN MORE</button>
    </div>
  </div>
</div>
<br /><br /><br /><br />
{/* =====section 8===== */}
<FollowUs/>
<br /><br /><br /><br />
<br /><br /><br /><br /><br />
    </>
}

