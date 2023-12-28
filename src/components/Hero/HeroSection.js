

import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const HeroCarousel = () => {
  const options = {
    items: 1,
    loop: true,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 1000,
  };

  const heroItems = [
    {
      backgroundImage: 'url("assets/img/hero/hero-1.jpg")',
      title: 'Fall - Winter Collections 2030',
      subtitle: 'Summer Collection',
      text:
        'A specialist label creating luxury essentials. Ethically crafted with an unwavering commitment to exceptional quality.',
    },
    {
      backgroundImage: 'url("assets/img/hero/hero-2.jpg")',
      title: 'Spring - Summer Collections 2030',
      subtitle: 'New Arrivals',
      text:
        'Explore our latest arrivals. Get ready for the upcoming season with our trendy collection.',
    },
    // Add more items as needed
  ];

  return (
    <OwlCarousel  className='owl-theme hero__slider' autoPlay items={1}>
      {heroItems.map((item, index) => (
        <div className="item hero__items set-bg" style={{ backgroundImage: item.backgroundImage }} key={index}>
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-lg-7 col-md-8">
                <div className="hero__text">
                  <h6>{item.subtitle}</h6>
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                  <a href="#" className="primary-btn">
                    Shop now <span className="arrow_right"></span>
                  </a>
                  <div className="hero__social">
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-pinterest"></i></a>
                    <a href="#"><i className="fa fa-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </OwlCarousel>
  );
};

export default HeroCarousel;
