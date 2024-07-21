import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { PrevArrow, NextArrow } from './CustomArrow';
const Carousel = () => {
    const cards = [
        {
            image: '/images/courses/img9.jpg',
            title: 'Profile Building: Crafting Your Unique Masterpiece',
            description: 'We help identify and nurture your unique strengths, transforming them into powerful assets for your college application. This includes academic rigor, test preparation guidance, and extracurricular development.',
            link: "/programs/profile-building"
        },
        {
            image: '/images/courses/img8.jpg',
            title: 'Application Services: Maximizing Your Admissions Potential',
            description: 'We offer comprehensive support throughout the application process, from finalizing your college list to interview preparation and supplementary portfolio development, ensuring your application stands out.',
            link: "/programs/application-services"
        },
        {
            image: '/images/courses/img7.jpg',
            title: 'Essay Services: Your Story, Your Way',
            description: 'Our essay support helps you create standout essays that reflect your unique voice. We guide you through topic selection, writing process, and provide detailed feedback to make your essays impactful.',
            link: "/programs/essay-services"
        },
        {
            image: '/images/courses/img6.jpg',
            title: 'Post-Acceptance Guidance: Making the Right Choice',
            description: 'After receiving college acceptances, we assist with decision-making, financial aid review, and preparation for your college journey to ensure you make the right choice and are well-prepared.',
            link: "/programs/post-acceptance"
        },
        {
            image: '/images/courses/img5.png',
            title: 'Holistic Harmony: Nurturing the Whole You',
            description: 'We help you balance academics and personal life, develop time management skills, explore genuine interests, set long-term goals, manage stress, and build leadership abilities for a successful college experience.',
            link: "/programs/holistic-harmony"
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
	arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
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
        <div className="testimonial-slider-container mb-12" style={{transform:"scale(0.9)"}} >
            <h2 className="text-5xl text-gray-700 font-bold text-center mb-8">Our Programs</h2>

            <Slider {...settings}>
                {cards.map((card, index) => (
                    <div key={index}>
                        <a href={card.link} className='hover:no-underline'>
                            <div className="group bg-white shadow-xl rounded-lg p-4 m-3 program-card hover:scale-105 hover:duration-500">
                                <img src={card.image} alt={card.title} className="rounded-lg mb-4 h-64" />
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
