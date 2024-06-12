import React from 'react';
import Carousel from '../components/Carousel';
import Testimonial from '../components/Testimonial';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Logo from '../components/Logo';
import PageHeader from '../components/Layout/PageHeader';

const Programs = () => {   

    return (
        <>
            <Navbar />
            <PageHeader title="Programs" />
            <div className="container mx-auto my-12">
                <Carousel />
            </div>
            <div className="container mx-auto my-24">
                <Testimonial />
            </div>
            
            <div className="container mx-auto mb-24">
                <Logo />
            </div>

            <Footer />
        </>
    );
};

export default Programs;
