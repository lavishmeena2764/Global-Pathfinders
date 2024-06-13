import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faCheck } from '@fortawesome/free-solid-svg-icons';
import Testimonial from '../components/Testimonial';
import Logo from '../components/Logo';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import PageHeader from '../components/Layout/PageHeader';
import './styles.css';

const WhyUs = () => {
    const faqs = [
        {
            question: "Looking for a trusted advisor to help your child get into America's top colleges?",
            answer: (
                <>
                    <p>The college admissions process can be incredibly stressful. Getting into great schools seems so subjective beyond achieving good grades and a high ACT or SAT score. An advisor plays a key sole in helping students understand and sucessfully navigate the pathway to their dream university.</p>
                    <p>Which extracurricular activities should your child participate in to stand out? What's the best way to write impressive college essays?</p>
                    <p>College admissions changes each year. And if you are an international student it can be even more confusing. On top of the complexity, there is so much misinformation about what it takes to get into top colleges. Whereas some of what you read and hear is accurate, much of it isn't. How do you decide?</p>
                    <p>Even worse, you may be worried that your child is making a critical mistake that will ruin their chances of getting into their dream schools, or finding the right information too late. Despite feeling like other children are accomplishing at least as much your child, we can help them stand out to get admission committees attention. by making a strategic plan which they can follow.</p>
                    <p>Our highly individualized, data-driven, and exclusive approach to admissions consulting will allow your child to develop a unique profile throughout their high school years and demonstrate their standout qualities through all of their college application materials. That way, we maximize your child's odds of getting into America's top colleges.</p>
                </>
            )
        },
        {
            question: "What is Profile Building?",
            answer: (
                <>
                    <p>Profile Building is about building that showcases your strengths and interests starting from junior year.</p>
                </>
            )
        },
        {
            question: "Why is Profile Building Necessary?",
            answer: (
                <>
                    <p>Creating a portfolio that can paint a narrative of your interests any activity undertaken to engage in activity that promotes your knowledge builiding skills, success and abilities and involment in futhering your professional or academic ojectives.</p>
                    <h1 className='text-2xl' style={{color:'#21225F'}}><b>Building a good strong profile helps in -</b></h1>
                    <ul className='ml-2'>
                        <li><FontAwesomeIcon icon={faCheck} /> Enhancing your resume</li>
                        <li><FontAwesomeIcon icon={faCheck} /> Boosting your prospects of being accepted to the intitution of your choice</li>
                        <li><FontAwesomeIcon icon={faCheck} /> Highlights your strengths</li>
                    </ul>
                </>
            )
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <Navbar />
            <PageHeader title="Why Us" />
            <div className="container mx-auto p-7">
                <div className="text-left mb-16">
                <h6 className='text-blue-500 mt-24 mb-6'>Why Us</h6>
                <h2 className="text-4xl font-bold mb-4 headColor">We are a trusted international Education consultancy.</h2>
                    <p className="text-lg text-gray-700">
                        We are a trusted international Education consultancy. The college admissions journey can be overwhelming and filled with uncertainty. Beyond grades and test scores, gaining entry into top-tier institutions can feel like a subjective maze. That's where our expert advisors step in, playing a pivotal role in guiding students toward their dream universities.
                    </p>
                    <p className="text-lg text-gray-700 mt-4">
                        Adapting to the ever-evolving college admissions landscape is no easy task, especially for international students. Amidst the complexity, misinformation runs rampant, clouding the path. While some online resources and well-meaning peers may offer accurate advice, much of it isn't helpful.
                    </p>
                    <p className="text-lg text-gray-700 mt-4">
                        Concerns may arise that a crucial misstep could jeopardize your child's chances or that vital information may come too late.
                    </p>
                    <p className="text-lg text-gray-700 mt-4">
                        So, how does one make the right decisions? Which extracurricular activities will set your child apart? How can they craft compelling college essays?
                    </p>
                    <p className="text-lg text-gray-700 mt-4">
                        Fear not! Through our step-by-step strategic approach, we empower students to stand out and capture the attention of admissions officers.
                    </p>
                    <p className="text-lg text-gray-700 mt-4">
                        Our highly personalized, data-driven, and exclusive admissions consulting ensures your child develops a distinctive profile throughout high school. By showcasing their exceptional qualities across all application materials, we enhance their odds of securing coveted spots in top colleges around the globe.
                    </p>
                    <p className="text-lg text-gray-700 mt-4">
                        Embark on this transformative educational voyage with us, and together, we'll pave the way for your child's success.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 mb-24">
                    <div className="w-full lg:w-1/2 relative flex justify-center">
                        <div className="relative rounded-lg">
                            <div className="shape">
                                <div className="bg-cover"></div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-4xl font-bold mb-4 headColor" >Why Us</h2>
                        {faqs.map((faq, index) => (
                            <div key={index} className="mb-4">
                                <button
                                    className={`flex justify-between w-full px-4 py-2 text-lg font-medium text-left focus:outline-none transition-colors duration-300 ${openIndex === index ? 'text-blue-500' : 'headColor'
                                        }`}
                                    onClick={() => handleToggle(index)}
                                >
                                    <span className='text-xl'><b>{faq.question}</b></span>
                                    <FontAwesomeIcon
                                        icon={openIndex === index ? faMinus : faPlus}
                                        className={`w-6 h-6 rounded-full p-1 ${openIndex === index ? 'bg-blue-500 text-white' : 'headColor'
                                            }`}
                                    />
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-screen' : 'max-h-0'
                                        }`}
                                    style={{ transitionProperty: 'max-height' }}
                                >
                                    <div className="px-4 pt-4 pb-2 text-lg text-gray-800">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Testimonial />
                <Logo />
            </div>
            <Footer />
        </>
    );
};

export default WhyUs;
