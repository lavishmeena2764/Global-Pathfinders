import React, { useState, useEffect } from 'react';
import CarouselMain from '../components/CarouselMain';
import VideoPlayer from '../components/VideoPlayer';
import Accordion from '../components/Accordian';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Stats from '../components/Stats';
import Logo from '../components/Logo';
import Mentors from '../components/Mentors';
import CounselingHelp from '../components/CounselingHelp';
import Events from '../components/Events';

const Home = () => {
  // State for dynamic numerical data
  const [collegesCount, setCollegesCount] = useState(0);
  const [studentsCount, setStudentsCount] = useState(0);
  const [expertsCount, setExpertsCount] = useState(0);
  const [satisfactionRate, setSatisfactionRate] = useState(0);

  // Simulate incrementing numerical data on reload
  useEffect(() => {
    // Simulate API call to fetch actual data
    const fetchNumericalData = () => {
      // Replace with actual API call logic if needed
      setTimeout(() => {
        setCollegesCount(100);
        setStudentsCount(200);
        setExpertsCount(50);
        setSatisfactionRate(100);
      }, 1500); // Adjust timing as needed
    };

    fetchNumericalData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="mx-0 w-full bg-gray-100">
        <CarouselMain />

        <Events />

        <section className="py-20 bg-gray-200">
          <div className="flex flex-row mx-auto px-2 flex-wrap">
            <div className="max-w-4xl mx-auto text-left mb-16 px-4">
              <h2 className="text-5xl text-gray-700 font-bold text-left mb-8">The Importance of Telling Your Story</h2>
              <p className="text-lg text-gray-700 text-left">
                Your college application should do much more than just document your GPA and standardized test score. It should tell your story. Admissions counsellors want to be able to picture a student on their campus and know that they will thrive. Just as important, they want to understand what makes you different from every other application that will cross their desk. <br /><br />

                Your story helps you communicate who you are, your values and why you are a good fit for the institutions to which you are applying. Your narrative can help you engage an admissions officer, establish a connection and ultimately inspire them to advocate on your behalf. <br /> <br />

                As you start your journey with Global Pathfinders, we serve as a trusted adviser company to help you become more familiar with your gifts and passions. As we work together, you will be an expert at articulating what motivates you, your strengths and weaknesses and how to describe yourself in a way that allows you to become more than another file. These storytelling skills are critical in the college admissions process; these are life skills that will help you long after college.The college process is also a time for maturation, self-discovery, learning and fun. We encourage teens to embrace activities and courses that reflect who they genuinely are, not who they think colleges want them to be. <br /> <br />
              </p>
            </div>

            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-0 mb-8">
              <div className="bg-blue-500 m-0 p-12 text-white rounded-t-lg">
                <h3 className="text-4xl font-bold mb-4">Request a Call Back</h3>
                <p>Please fill your details and we will get back to you within 24hrs</p>
              </div>
              <form className="p-12">
                <div className="mb-6">
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    name="name"
                    className="w-full border border-gray-300 rounded-full py-3 px-5 focus:outline-none focus:border-blue-500 placeholder:text-lg"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    id="email"
                    placeholder="Email"
                    name="email"
                    className="w-full border border-gray-300 rounded-full py-3 px-5 focus:outline-none focus:border-blue-500 placeholder:text-lg"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    id="subject"
                    placeholder="Subject"
                    name="subject"
                    className="w-full border border-gray-300 rounded-full py-3 px-5 focus:outline-none focus:border-blue-500 placeholder:text-lg"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    id="phone"
                    placeholder="Phone"
                    name="phone"
                    className="w-full border border-gray-300 rounded-full py-3 px-5 focus:outline-none focus:border-blue-500 placeholder:text-lg"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300"
                >
                  Submit
                </button>
              </form>
            </div>

          </div>


        </section>


        {/* Video testimonial section */}
        <section className="py-5 bg-blue-500">
          <div className="container mx-auto px-6">
            <h2 className="text-5xl text-white font-bold text-center mb-16">Testimonials</h2>

            <div className='flex flex-row justify-evenly flex-wrap'>
              <div className='text-center m-2'>
                <h1 className='text-3xl md:w-96 w-max-96 font-bold text-gray-200'>"hiee this is me GP is very good Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis adipisci illum aspernatur iste explicabo excep  Debitis adipisci illum aspernatur iste explicabo excep  Debitis adipisci illum aspernatur iste explicabo excep "</h1>
                <a href="/testimonials"><button className='btn btn-light text-lg mt-2'>View All</button></a>
              </div>
              <VideoPlayer src="/videos/1.mp4" />
            </div>
          </div>
        </section>
        <CounselingHelp />
        <Stats />
        <section className="bg-gray-200 py-20">
          <Mentors />
        </section>
        <section className="bg-gray-200 py-20">
          <div className="container mx-auto px-6">
            <Accordion />
          </div>
        </section>
        <Logo />
      </div>
      <Footer />
    </>
  );
};

export default Home;
