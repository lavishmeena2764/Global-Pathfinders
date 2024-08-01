import React from 'react';
import Team from '../components/About/Team';
import Footer from '../components/Layout/Footer';
import Navbar from '../components/Layout/Navbar';
import Logo from '../components/Logo';
import PageHeader from '../components/Layout/PageHeader';
import './styles.css';
import Tagline from '../components/Home/Tagline';
import { FaChalkboardTeacher, FaDollarSign, FaGlobe, FaGraduationCap, FaLifeRing, FaUniversity } from 'react-icons/fa';

const items = [
    { icon: <FaGraduationCap className="mx-auto h-12 w-12 text-blue-500" />, description: 'Trusted expertise and experience in the field' },
    { icon: <FaUniversity className="mx-auto h-12 w-12 text-blue-500" />, description: 'Proven success in placing students in prestigious universities' },
    { icon: <FaGlobe className="mx-auto h-12 w-12 text-blue-500" />, description: 'Extensive network of global university partnerships' },
    { icon: <FaChalkboardTeacher className="mx-auto h-12 w-12 text-blue-500" />, description: 'Personalized guidance for a seamless application process' },
    { icon: <FaDollarSign className="mx-auto h-12 w-12 text-blue-500" />, description: 'Insights into scholarship opportunities for international students' },
    { icon: <FaLifeRing className="mx-auto h-12 w-12 text-blue-500" />, description: 'Ongoing support and assistance at every step of your journey' },
];
const About = () => {
    return (
        <>
            <Navbar />
            <PageHeader title="Who We Are" />
            <div className="container mx-auto p-6" style={{ transform: "scale(0.96)" }}>

                <section className="mb-24 text-left">
                    <div className='text-center'>
                        <h1 className="text-5xl text-gray-700 font-extrabold text-center mb-8">We help you get into your best fit university!</h1>
                        <p className="text-xl mx-auto mb-8 max-w-screen-xl">
                            We take immense pride in our proven track record of successfully placing numerous international students into some of the most renowned universities across the globe. Our commitment to excellence is reflected in the quality of our expert guidance and the strength of our extensive network, which together ensure that your academic journey is directed towards the doors of prestigious institutions. At our consultancy, we offer more than just traditional counseling services. We are deeply passionate about shaping the future of young minds by nurturing their unique talents and providing them with the comprehensive tools and resources they need to excel. Our dedicated team works tirelessly to support each student’s aspirations, ensuring they are well-prepared to thrive in their chosen academic and professional paths. With us, you’re not just receiving guidance—you’re gaining a partner in achieving your dreams and unlocking a world of opportunities.







                        </p>
                    </div>
                    <div>


                        <section className="py-12">
                            <div className="container mx-auto px-6 lg:px-20">
                                <h2 className="text-5xl text-gray-700 font-extrabold text-center mb-8">Why Choose Us?</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {items.map((service, index) => (
                                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                            <div className="items-center mb-1 mx-auto">
                                                {service.icon}
                                            </div>
                                            <p className="text-center text-gray-600">{service.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                    </div>
                </section>

                <section className="mb-36 grid gap-8 lg:grid-cols-2">
                    <div className="relative bg-white p-6 rounded-lg shadow-lg">
                        <img
                            src="/images/mission.jpg"
                            alt="Mission"
                            className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-15"
                        />
                        <div className="relative z-10 p-4">
                            <h2 className="text-3xl font-bold mb-4 text-gray-700">Our Mission</h2>
                            <p className="text-lg">
                                To enable college aspirants to identify their interests and goals, pursue a strategic activity plan, and navigate the application and interview process seamlessly. Our goal: to secure admission into colleges that perfectly align with students’ aptitude, interests, and career aspirations.
                            </p>
                        </div>
                    </div>
                    <div className="relative bg-white p-6 rounded-lg shadow-lg">
                        <img
                            src="/images/vision.jpg"
                            alt="Mission"
                            className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-15"
                        />
                        <div className="relative z-10 p-4">
                            <h2 className="text-3xl font-bold mb-4 text-gray-700">Our Values</h2>
                            <p className="text-lg">
                                Trust matters when it comes to shaping your future. That's why our global team of top-tier education consultants is committed to delivering nothing but the best. With honesty, reliability, and unbiased expertise, we provide personalized guidance tailored to meet every student’s unique needs.
                            </p>
                        </div>
                    </div>
                </section>
                <Team />
                
                <div className='h-16'></div>
                
                <Tagline />

                <Logo />

            </div>


            <Footer />
        </>
    );
};


export default About;
