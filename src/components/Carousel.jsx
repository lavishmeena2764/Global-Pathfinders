import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
    const cards = [
        {
            image: '/images/courses/courses-img8.jpg',
            title: 'Goals Academic Support Program',
            description: 'Creating a detailed plan for high school coursework can help students stay organized, track their progress, and ensure that they meet all the necessary requirements for graduation.',
            link: "/goals-academic"
        },
        {
            image: '/images/courses/courses-img9.jpg',
            title: 'SAT /ACT /IELTS /TOEFL PREP',
            description: 'Start your test preparation with the most trusted faculty who have been in teaching industry for more than 10 years. We help students in achieving great scores that are crucial to get into a top universities.',
            link: "/sat"
        },
        {
            image: '/images/courses/courses-img7.jpg',
            title: 'Research Scholar Program',
            description: 'If you are looking for research support, it is important to find someone who is reliable, trustworthy, and committed to the project. We help you have clear expectations and achieve your goals from your research project.',
            link: "/research-scholar"
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        slidesToScroll: 1,
        responsive: [
            
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 2048,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    };

    return (
        <div className="testimonial-slider-container mb-12">
             <h2 className="text-5xl text-gray-700 font-bold text-center mb-8">Our Programs</h2>
                
        <Slider {...settings}>
            {cards.map((card, index) => (
                <div key={index}>
                    <a href={card.link}>
                    <div className="group bg-white shadow-xl rounded-lg p-4 m-3 program-card hover:scale-105 hover:duration-500">
                        <img src={card.image} alt={card.title} className="rounded-lg mb-4 w-full" />
                        <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-500">{card.title}</h2>
                        <p className="text-gray-700">{card.description}</p>
                    </div>
                    </a>
                </div>
            ))}
        </Slider>
        </div>
    );
};

export default Carousel;
