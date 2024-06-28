import React, { useState } from 'react';

const testimonials = [
  {
    id: 'content1',
    name: 'Naman Tekriwal',
    uni: 'The Hong Kong University of Science and Technology',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    title: 'Comprehensive Guidance and Support',
    text1: "My experience with Global Pathfinders was very holistic and structured, starting from planning my academics and extra-curricular activities to assistance with my personal statement, essays and letter of recommendations.",
    text2: "Under Shifali maam’s guidance, you always have a mentor to reach out to and ask all sorts of questions, and she guides you in the best possible direction. I would recommend their excellent services to every student who is looking to secure admission overseas."
  },
  {
    id: 'content2',
    name: 'Gauri Aggarwal',
    uni: '',
    image: '',
    title: 'Structured Approach to Personal Growth',
    text1: "I wholeheartedly endorse the experience of choosing Global Pathfinders. Not only were my extracurricular initiatives and academics well organised, as a result of their well-structured approach, but it was also ensured that I made the best choices and steadily advanced in the direction of my personal growth.",
    text2: "Under Rajiv sir’s impeccable direction, attaining your highly wanted goals becomes a joyous journey as an extraordinarily challenging application process becomes a relieved event with expert guidance, unwavering support, and experience."
  },
  {
    id: 'content3',
    name: 'Nishant Garg',
    uni: '',
    image: '',
    title: 'Prompt and Proactive Counseling',
    text1: "My journey with Global Pathfinders was very good. The counselling part was done excellently. They are very prompt in their services and guide you at each step.",
    text2: "Shifali mam was very proactive in all the processes right from selection of the universities till the final stage. Hence Global Pathfinders is highly recommended to anyone planning to study in Canada."
  },
  {
    id: 'content4',
    name: 'Yash Agarwal',
    uni: '',
    image: '',
    title: 'Effective SAT and IELTS Preparation',
    text1: "I studied for SAT and IELTS from Parminder mam. She's a wonderful teacher and because of her I was able to achieve a generous score of 1420 in SAT and 7.5 band in IELTS.",
    text2: "Her teaching style is very simple and straight to the point, she's very patient and helpful. All the material provided by her was very relevant and helped me to understand the variety of questions being asked and how to approach them."
  },
  {
    id: 'content5',
    name: 'Chhavi Luthra',
    uni: 'University of Toronto, Canada',
    image: '', // Replace with actual image if available
    title: 'Successful Journey to University of Toronto',
    text1: "My experience with Global Pathfinders was extremely helpful. Shifali mam and Isha mam supported me throughout the journey, guiding me at each step. They selected ideal courses for me, aligning with my interest. The most beneficial aspect was their ongoing efforts and regular sessions, which assisted me stay on course and maintain my application concentration. This journey would not have been possible without them.",
    text2: "I am thankful for their unwavering support which enabled me to be accepted into my dream universities with scholarships."
  }
];
const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState('content1');

  return (
    <section className="grid grid-cols-12 w-[calc(min(90rem,85%))] mx-auto py-12 md:py-24">
      <h1 className="col-span-12 text-2xl lg:text-4xl font-bold mb-8 md:mb-16 capitalize">Testimonials</h1>
      <div className="col-span-12 lg:col-span-5 grid gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className={`cursor-pointer p-8 rounded-lg flex items-center space-x-8 transition duration-300 relative border ${activeTestimonial === testimonial.id ? 'border-gray-400 bg-white' : 'border-transparent'}`}
            onMouseOver={() => setActiveTestimonial(testimonial.id)}
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className={`w-16 h-16 rounded-full filter transition duration-500 ${activeTestimonial === testimonial.id ? 'grayscale-0' : 'grayscale'}`}
            />
            <div>
              <h3 className="capitalize text-lg">{testimonial.name}</h3>
              <p className="capitalize text-gray-500 text-sm">{testimonial.uni}</p>
            </div>
            {activeTestimonial === testimonial.id && (
              <div className="absolute bottom-0 left-1/2 w-1/2 h-1 transform -translate-x-1/2 bg-gradient-to-r from-gray-200 to-gray-200 via-indigo-600 shadow-lg"></div>
            )}
          </div>
        ))}
      </div>
      <div className="col-span-12 lg:col-span-7 h-96 relative mx-8 mt-8 lg:mt-0">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className={`absolute w-full h-full transition-opacity duration-500 ${activeTestimonial === testimonial.id ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="text">
              <h2 className="text-2xl font-semibold transition-opacity duration-500">{testimonial.title}</h2>
              <div className="mt-4 flex space-x-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-500">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <p className="mt-4 text-gray-700">{testimonial.text1}</p>
              <p className="mt-4 text-gray-700">{testimonial.text2}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
