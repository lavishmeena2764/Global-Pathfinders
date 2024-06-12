import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const logos = [
    './images/brand-logo/1.png',
    './images/brand-logo/2.png',
    './images/brand-logo/3.png',
    './images/brand-logo/4.png',
    './images/brand-logo/5.png',
    './images/brand-logo/6.png',
    './images/brand-logo/7.png',
];

const Logo = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 2048,
            settings: {
                slidesToShow: 6,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
            }
        }
    ]
  };

  return (
    <div className="logo-slider-container">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="my-8">
            <div className="logo-wrapper">
              <img src={logo} alt={`Logo ${index + 1}`} className="logo-image" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Logo;
