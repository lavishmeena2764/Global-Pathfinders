// pages/Home.js
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
import Events from '../components/Home/Events';
import CallBackForm from '../components/Home/CallBackForm';
import Tagline from '../components/Home/Tagline';

import { AcademicCapIcon, BriefcaseIcon, ClipboardListIcon, DocumentTextIcon, CashIcon, ChatIcon, BellIcon, UserGroupIcon, ClipboardCheckIcon } from '@heroicons/react/outline';

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
    <div className='bg-gray-100'>
      <Navbar />
      <CarouselMain />
      <div className=" mx-auto p-0 bg-gray-100">

        {/* Hero Section */}

        {/* Events Carousel */}
        <Events />

        {/* Form Section */}
        <section className="py-20 bg-gray-200">
          <div className="flex flex-row mx-auto px-2 flex-wrap">
            {/* Importance of Telling your story */}
            <div className="max-w-4xl mx-auto text-left mb-16 px-4">
              <h2 className="text-5xl text-gray-700 font-bold text-left mb-12">The Importance of Telling Your Story</h2>
              <p className="text-lg text-gray-700 text-left leading-9">
                Your college application should do much more than just document your GPA and standardized test score. It should tell your story. Admissions counsellors want to be able to picture a student on their campus and know that they will thrive. Just as important, they want to understand what makes you different from every other application that will cross their desk. <br /><br />

                Your story helps you communicate who you are, your values and why you are a good fit for the institutions to which you are applying. Your narrative can help you engage an admissions officer, establish a connection and ultimately inspire them to advocate on your behalf. <br /> <br />

                As you start your journey with Global Pathfinders, we serve as a trusted adviser company to help you become more familiar with your gifts and passions. As we work together, you will be an expert at articulating what motivates you, your strengths and weaknesses and how to describe yourself in a way that allows you to become more than another file. These storytelling skills are critical in the college admissions process; these are life skills that will help you long after college. The college process is also a time for maturation, self-discovery, learning and fun. We encourage teens to embrace activities and courses that reflect who they genuinely are, not who they think colleges want them to be. <br /> <br />
              </p>
            </div>
            {/* Request a Call Back */}
            <CallBackForm />
          </div>
        </section>

        {/* Video testimonial section */}
        <section className="py-5 bg-blue-500">
          <div className="container mx-auto px-6">
            <h2 className="text-5xl text-white font-bold text-center mb-16">Testimonials</h2>

            <div className='flex flex-row justify-evenly flex-wrap'>
              <div className='text-center m-2'>
                <h1 className='text-2xl md:w-96 w-max-96 font-italic text-gray-200'>"They helped me craft my story and understand my real interest and passion, and now when I bring that to Hong Kong, I can network better I can meet with people better, and I am able to aggregate myself into a network that lends me a lot, and I recommend their service to everyone." <p className='text-right mt-2 text-xl'>~ Naman Tekriwal,<br />Hong Kong Technological University(HKUST)</p></h1>
                <a href="/testimonials"><button className='btn btn-light text-lg mt-4'>View All</button></a>
              </div>
              <VideoPlayer src="/videos/1.mp4" />
            </div>
          </div>
        </section>

        {/* Counselling Help */}
        <CounselingHelp services={services} head="How will Counselling Help" text="By syncing their personality, aptitude, and passion with their career path, Global Pathfinders can help align a student's strengths and interests with their college and course choices." />

        {/* Stats */}
        <Stats />

        {/* Mentors */}
        <section className="bg-gray-200 py-20 px-10">
          <Mentors />
        </section>
        <section className="bg-gray-200">
          <Tagline />
        </section>

        {/* FAQ */}
        {/* <section className="bg-gray-200 pb-20">
          <div className="container mx-auto px-6">
            <Accordion faqs={faqs} />
          </div>
        </section> */}

        {/* Logo */}
        {/* <div className="mx-auto p-6 md:mb-0 mb-64"> */}
        <Logo />
        {/* </div> */}

      </div>
      <Footer />
    </div>
  );
};

const services = [
  { icon: <AcademicCapIcon className="h-6 w-6 text-blue-500" />, title: "360 Career Counselling", description: "One on one college counselling" },
  { icon: <BriefcaseIcon className="h-6 w-6 text-green-500" />, title: "University Selection", description: "Helping you choose the right university" },
  { icon: <ClipboardListIcon className="h-6 w-6 text-red-500" />, title: "Profile Building", description: "Your Road Map/story" },
  { icon: <DocumentTextIcon className="h-6 w-6 text-yellow-500" />, title: "SOPS | LORS | Resumes", description: "Assistance with essential documents" },
  { icon: <CashIcon className="h-6 w-6 text-purple-500" />, title: "Scholarships Guidance", description: "Helping you secure scholarships" },
  { icon: <ChatIcon className="h-6 w-6 text-indigo-500" />, title: "Interview Preparation", description: "Get ready for your interviews" },
  { icon: <BellIcon className="h-6 w-6 text-pink-500" />, title: "Weekly Task Reminder", description: "For Students and Parents" },
  { icon: <UserGroupIcon className="h-6 w-6 text-orange-500" />, title: "Future Career Guidance", description: "Explore career options" },
  { icon: <ClipboardCheckIcon className="h-6 w-6 text-teal-500" />, title: "Full Application Assistance", description: "Help with editing and submitting College Applications (Common App)" },
];


export default Home;
