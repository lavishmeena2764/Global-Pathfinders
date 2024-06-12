import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './styles.css'; // Custom CSS for additional styling

const testimonials = [
    { id: 1, photo: 'https://opencodeiiita.github.io/src/images/ManthanSurkar.png', name: 'Naman Tekriwal', designation: 'The Hong Kong University of Science and Technology', testimonial: '“My experience with Global Pathfinders was very holistic and structured, starting from planning my academics and extra-curricular activities to assistance with my personal statement, essays and letter of recommendations. Under Shifali maam’s guidance, you always have a mentor to reach out to and ask all sorts of questions, and she guides you in the best possible direction. I would recommend their excellent services to every student who is looking to secure admission overseas.”', rating: 5 },
    { id: 2, photo: 'https://opencodeiiita.github.io/src/images/ManthanSurkar.png', name: 'Gauri Aggarwal', testimonial: '"I wholeheartedly endorse the experience of choosing Global Pathfinders. Not only were my extracurricular initiatives and academics well organised, as a result of their well-structured approach, but it was also ensured that I made the best choices and steadily advanced in the direction of my personal growth. Under Rajiv sir’s impeccable direction, attaining your highly wanted goals becomes a joyous journey as an extraordinarily challenging application process becomes a relieved event with expert guidance, unwavering support, and experience.”', rating: 5 },
    { id: 3, photo: 'https://opencodeiiita.github.io/src/images/ManthanSurkar.png', name: 'Nishant Garg', testimonial: '“My journey with Global Pathfinders was very good. The counselling part was done excellently. They are very prompt in their services and guide you at each step. Shifali mam was very proactive in all the processes right from selection of the universities till the final stage. Hence Global Pathfinders is highly recommended to anyone planning to study in Canada."', rating: 5 },
    { id: 4, photo: 'https://opencodeiiita.github.io/src/images/ManthanSurkar.png', name: 'Yash Agarwal', testimonial: `“I studied for SAT and IELTS from Parminder mam. She's a wonderful teacher and because of her I was able to achieve a generous score of 1420 in SAT and 7.5 band in IELTS. Her teaching style is very simple and straight to the point, she's very patient and helpful. All the material provided by her was very relevant and helped me to understand the variety of questions being asked and how to approach them.”`, rating: 5 },
];

const Testimonial = () => {
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
        nextArrow: <FaArrowRight />,
        prevArrow: <FaArrowLeft />,
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
        <div className="testimonial-slider-container mb-12">
             <h2 className="text-5xl text-gray-700 font-bold text-center mb-8">Success Stories</h2>
                
            <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className={`testimonial-slide ${index === 1 ? 'active' : ''}`}>
                        <div
                            id={`testimonial-${testimonial.id}`}
                            className={`testimonial-card divHeight ${index === 1 ? 'active' : ''}`}
                        >
                            <div className="photo-container flex justify-center">
                                <img src={testimonial.photo} alt={testimonial.name} className="photo" />
                            </div>
                            <FaQuoteLeft className="quote-icon mt-2 ml-5" />
                            <p className="testimonial-text">{testimonial.testimonial}</p>
                            <div className="testimonial-info">
                                <span className="name">{testimonial.name}</span><br />
                                <span className="designation">{testimonial.designation?`(${testimonial.designation})`:""}</span>
                            </div>
                            <div className="rating">
                                {Array.from({ length: testimonial.rating }, (_, index) => (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 fill-current" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 1.77l2.41 5.465 6.274.687a.75.75 0 01.416 1.279l-4.74 4.181 1.431 6.732a.75.75 0 01-1.088.825L10 16.045l-5.785 3.029a.75.75 0 01-1.088-.825l1.431-6.732-4.74-4.181a.75.75 0 01.416-1.28l6.274-.686L10 1.77z" clipRule="evenodd"/>
                                </svg>
                                
                                
                                
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Testimonial;
