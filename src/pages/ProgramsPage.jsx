import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Footer from '../components/Layout/Footer';
import Logo from '../components/Logo';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Layout/PageHeader';
import BlogC from '../components/BlogC';



const ProgramCard = ({ title, content, image }) => (
  <div className="p-6 bg-white rounded-lg shadow-lg m-4 flex flex-center flex-col md:flex-row md:items-start ">
    <FontAwesomeIcon icon={faCircleCheck} size='xl' className='w-16 text-blue-500 h-16 object-cover rounded-full mr-4' />
    <div>
      <h3 className="text-2xl font-bold mb-2 text-indigo-900">{title}</h3>
      <ul className='list-disc'>
        {content.map((item, index) => (
          <li className='ml-5' key={index}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
);



const ProgramsPage = (props) => {
  return (
    <>
      <Navbar />
      <PageHeader title={props.title1} />
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <section className="mb-12 text-center">
            <h2 className="text-4xl font-bold mb-4 text-indigo-900">{props.head1}</h2>
            <p className="text-lg mb-4">
              {props.c1}
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-indigo-900">Our Expertise Areas</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {props.programData1.map((program, index) => (
                <ProgramCard
                  key={index}
                  title={program.title}
                  content={program.content}
                  image={program.image}
                />
              ))}
            </div>
          </section>

          <div className="text-center mb-12">
            <a
              href="/contact"
              className="inline-block bg-indigo-900 text-white font-bold py-4 px-8 rounded-lg hover:bg-indigo-700 transition duration-300 text-lg"
            >
              Book a Demo
            </a>
          </div>

         <BlogC />
        </div>
        <Logo />
      </div>
      <Footer />
    </>
  );
};

export default ProgramsPage;
