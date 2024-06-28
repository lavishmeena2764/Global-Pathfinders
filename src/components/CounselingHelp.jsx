import React from 'react';
import { AcademicCapIcon, BriefcaseIcon, ClipboardListIcon, DocumentTextIcon, CashIcon, ChatIcon, BellIcon, UserGroupIcon, ClipboardCheckIcon } from '@heroicons/react/outline';

const CounselingHelp = () => {
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

  return (
    <section className="bg-gradient-to-r from-gray-100 to-gray-200 py-12">
      <div className="container mx-auto px-6 lg:px-20">
      <h2 className="text-5xl text-gray-700 font-bold text-center mb-8">How will Counselling Help</h2>
        <p className="text-lg text-gray-600 text-center mb-8">
          By syncing their personality, aptitude, and passion with their career path, Global Pathfinders can help align a student's strengths and interests with their college and course choices.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {service.icon}
                <h3 className="text-xl font-semibold text-gray-800 ml-4">{service.title}</h3>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="/contact">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg">
              Consult Now
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CounselingHelp;
