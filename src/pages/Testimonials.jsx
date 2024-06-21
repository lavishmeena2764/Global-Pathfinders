import React from 'react';
import Footer from '../components/Layout/Footer';
import Navbar from '../components/Layout/Navbar';
import Logo from '../components/Logo';
// import Testimonial from '../components/Testimonial';
import PageHeader from '../components/Layout/PageHeader';
import './styles.css';
import Testimonial from '../components/Testimonial';

const Testimonials = () => {
    return (
        <>
            <Navbar />
            <PageHeader title="Testimonials" />
            <div className="container mx-auto p-6">
                <Testimonial />
                <Logo />

            </div>


            <Footer />
        </>
    );
};

export default Testimonials;
