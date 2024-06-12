import React from 'react';
import Team from '../components/About/Team';
import Footer from '../components/Layout/Footer';
import Navbar from '../components/Layout/Navbar';
import Logo from '../components/Logo';
import Testimonial from '../components/Testimonial';
import PageHeader from '../components/Layout/PageHeader';
import './styles.css';

const About = () => {
    return (
        <>
            <Navbar />
            <PageHeader title="About Us" />
            <div className="container mx-auto p-6">

                <section className="mb-24 text-left">
                    <h1 className="text-4xl font-bold mb-4 text-gray-700">About Us</h1>
                    <p className="text-lg mx-auto mb-8">
                        We take pride in our track record of successfully placing numerous international students in renowned universities worldwide. With our expert guidance and extensive network, we ensure that your academic journey leads to the doors of prestigious institutions. At our consultancy, we go beyond traditional counseling services. We are passionate about shaping young minds, nurturing their talents, and equipping them with the tools they need to excel.
                    </p>
                    <h1 className="text-4xl font-bold mb-4 text-gray-700">Why Choose Us?</h1>
                    <ul className="text-lg mx-4 list-disc">
                        <li>Trusted expertise and experience in the field</li>
                        <li>Proven success in placing students in prestigious universities</li>
                        <li>Comprehensive support tailored to your unique needs</li>
                        <li>Extensive network of global university partnerships</li>
                        <li>Personalized guidance for a seamless application process</li>
                        <li>Insights into scholarship opportunities for international students</li>
                        <li>Ongoing support and assistance at every step of your journey</li>
                    </ul>
                </section>

                <section className="mb-36 grid gap-8 lg:grid-cols-2">
                    <div className="relative bg-white p-6 rounded-lg shadow-lg">
                        <img
                            src="./images/mission.jpg"
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
                            src="./images/vision.jpg"
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
                </section>
                <Team />
                <Testimonial />
                <Logo />

            </div>


            <Footer />
        </>
    );
};

export default About;
