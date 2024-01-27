import React from 'react';
import { FaChevronRight , FaChevronLeft } from "react-icons/fa";
const dataArr = [
  {
    imagesrc: 'https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/items2.jpg',
    description: 'Delight Lemon',
    priceOrg: '$98.00',
  },
  {
    imagesrc: 'https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/items3.jpg',
    description: 'Delight Lemon',
    priceOrg: '$98.00',
      },
      {
        imagesrc: 'https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/items1.jpg',
        description: 'Delight Lemon',
        priceOrg: '$98.00',
      },
      {
        imagesrc: 'https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/items2.jpg',
        description: 'Delight Lemon',
        priceOrg: '$98.00',
      },
      {
        imagesrc: 'https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/items3.jpg',
        description: 'Delight Lemon',
        priceOrg: '$98.00',
          },
          {
            imagesrc: 'https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/items1.jpg',
            description: 'Delight Lemon',
            priceOrg: '$98.00',
          },

   
];

const CakeProducts = () => {
  return (
    <div className="container">
      <section className="pt-5 pb-5">
        <div className="row">
          <div className="col-12 text-right">
            <a className="btn btn-dark mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
           <FaChevronLeft />
            </a>
            <a className="btn btn-dark mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
            <FaChevronRight />
            </a>
          </div>
          <div className="col-12">
            <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                {dataArr.map((item, index) => (
                  <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                    <div className="row">
                      {dataArr.slice(index, index + 4).map((card, cardIndex) => (
                        <div key={cardIndex} className="col-md-3 mb-3">
                          <div className="card" style={{background:'black'}}>
                            <img width='100%' className="img-fluid" src={card.imagesrc} />
                            <div className="card-body">
                              <h6 className="card-title">{card.description}</h6>
                              <p className="text-warning">{card.priceOrg}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
</div>

  );
};

export {CakeProducts};