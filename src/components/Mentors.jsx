import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaQuoteLeft } from 'react-icons/fa';
import './styles.css'; // Custom CSS for additional styling
import mentors from '../data/mentor';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { PrevArrow, NextArrow } from './CustomArrow';

const Mentors = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className="testimonial-slider-container mb-12" style={{transform:"scale(0.9)"}} >
            <h2 className="text-5xl text-gray-700 font-bold text-center mb-16">Word from our Mentors</h2>

            <Slider {...settings}>
                {mentors.map((mentor, index) => (
                    <div key={index} className={`testimonial-slide ${index === 1 ? 'active' : ''}`}>
                        <div
                            id={`testimonial-${mentor.id}`}
                            className={`testimonial-card divHeight p-3 pt-5 ${index === 1 ? 'active' : ''}`}
                        >
                            <div className="photo-container flex justify-center">
                                <img src={mentor.img} alt={mentor.name} className="photo" />
                            </div>
                            <FaQuoteLeft className="quote-icon mt-2 ml-5" />
                            <p className="testimonial-text">{mentor.bio}</p>
                            <div className="testimonial-info">
                                <span className="name">{mentor.name}</span><br />
                                <span className="designation">{mentor.uni}</span>
                            </div>
                            <div className='flex flex-row justify-between'>
                                <a href={`tel:${mentor.phone}`}><FontAwesomeIcon className="mx-2" icon={faPhone} size="lg" /></a>
                                <a href={mentor.linkedin}><FontAwesomeIcon className="mx-2" icon={faLinkedin} size="lg" /></a>
                                <a href={`mailto:${mentor.email}`}><FontAwesomeIcon className="mx-2" icon={faEnvelope} size="lg" /></a>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Mentors;
