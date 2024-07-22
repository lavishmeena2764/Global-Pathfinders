import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarouselMain = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <Slider {...settings}>
    <div className="relative h-screen flex items-center justify-center text-center">
      <img src="/images/hero/2.jpg" alt="Hero 2" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 p-8 mt-24 md:mt-56">
        <h2 className="text-4xl md:text-6xl font-bold text-white">Expert Guidance for International Admissions</h2>
        <p className="text-xl text-white mt-4">Our professionals help you choose the right path</p>
        <a href="/contact">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mt-4">
            Consult Now
          </button>
        </a>
      </div>
    </div>
      <div className="relative h-screen flex items-center justify-center text-center">
        <img src="/images/hero/3.png" alt="Hero 3" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 p-8 mt-24 md:mt-56">
          <h2 className="text-4xl md:text-6xl font-bold text-white">Personalized and Unbiased Advice</h2>
          <p className="text-xl text-white mt-4">Tailored support to meet each student's needs</p>
          <a href="/contact">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mt-4">
              Consult Now
            </button>
          </a>
        </div>
      </div>
      <div className="relative h-screen flex items-center justify-center text-center">
        <img src="/images/hero/1.avif" alt="Hero 1" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 p-8 mt-24 md:mt-56">
          <h2 className="text-4xl md:text-6xl font-bold text-white">Begin Your Academic Journey with Us</h2>
          <p className="text-xl text-white mt-4">Free 15-Minute Consultation to Plan Your Future</p>
          <a href="/contact">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mt-4">
              Consult Now
            </button>
          </a>
        </div>
      </div>
    </Slider>
  );
};

export default CarouselMain;
