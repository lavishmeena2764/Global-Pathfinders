import React from 'react';
import Mentors from '../components/Mentors';
import Logo from '../components/Logo';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import PageHeader from '../components/Layout/PageHeader';
import './styles.css';
import Tagline from '../components/Home/Tagline';

const WhyUs = () => {
    return (
        <>
            <Navbar />
            <PageHeader title="Why Us" />
            
            <div className="container mx-auto p-8 pt-0"  style={{transform:"scale(0.95)"}}>
                <div className="row gap-5 mb-24">
                    <div className="text col-lg-6">
                        <h1 className="text-4xl font-bold mb-4 text-indigo-900">We are a trusted international Education consultancy.</h1>
                        <p className="text-lg text-gray-700">
                            The college admissions journey can be overwhelming and filled with uncertainty. Beyond grades and test scores, gaining entry into top-tier institutions can feel like a subjective maze. That's where our expert advisors step in, playing a pivotal role in guiding students toward their dream universities.
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
                    <div className="image col-lg-5 my-auto">
                        <img src="/images/enrolled-img3.jpg" alt="College" className="rounded-lg shadow-lg" />
                    </div>
                </div>
                <div className='h-16'></div>
                <Tagline />

                <div className="testimonials mt-8">
                    <Mentors />
                </div>
                <div className="marquee mt-24">
                    <Logo />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default WhyUs;
