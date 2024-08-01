import React, { useState } from 'react';

const testimonials = [
  {
    id: 'content1',
    name: 'Naman Tekriwal',
    uni: 'The Hong Kong University of Science and Technology',
    image: '/images/mentors/nt.PNG',
    title: 'Comprehensive Guidance and Support',
    text1: "My experience with Global Pathfinders was very holistic and structured, starting from planning my academics and extra-curricular activities to assistance with my personal statement, essays and letter of recommendations.",
    text2: "Under Shifali maam’s guidance, you always have a mentor to reach out to and ask all sorts of questions, and she guides you in the best possible direction. I would recommend their excellent services to every student who is looking to secure admission overseas."
  },
  {
    id: 'content2',
    name: 'Gauri Aggarwal',
    uni: 'Vanderbilt University',
    image: '/images/mentors/ga.JPG',
    title: 'Structured Approach to Personal Growth',
    text1: "I wholeheartedly endorse the experience of choosing Global Pathfinders. Not only were my extracurricular initiatives and academics well organised, as a result of their well-structured approach, but it was also ensured that I made the best choices and steadily advanced in the direction of my personal growth.",
    text2: "Under Rajiv sir’s impeccable direction, attaining your highly wanted goals becomes a joyous journey as an extraordinarily challenging application process becomes a relieved event with expert guidance, unwavering support, and experience."
  },
  {
    id: 'content3',
    name: 'Chhavi Luthra',
    uni: 'University of Toronto, Canada',
    image: '/images/mentors/cl.jpg', // Replace with actual image if available
    title: 'Successful Journey to University of Toronto',
    text1: "My experience with Global Pathfinders was extremely helpful. Shifali mam and Isha mam supported me throughout the journey, guiding me at each step. They selected ideal courses for me, aligning with my interest. The most beneficial aspect was their ongoing efforts and regular sessions, which assisted me stay on course and maintain my application concentration. This journey would not have been possible without them.",
    text2: "I am thankful for their unwavering support which enabled me to be accepted into my dream universities with scholarships."
  },
  {
    id: 'content4',
    name: 'Navya Sehgal',
    uni: 'University of Illinois, Urbana Champaign',
    image: '/images/mentors/ns.jpg',
    title: 'Grateful for unwavering mentorship and support.',
    text1: "Thank you for everything, Shifali Ma'am. I couldn't be more grateful to have you as my mentor. I am incredibly thankful for everything you've done for me. Without your support, I'm sure I wouldn't have achieved even a fraction of what I have. ",
    text2: "Thank you for being there at every step, motivating, strengthening, and pushing me to reach higher. Thanks for sticking with and believing in me, even when I wasn't shining bright. You are the best counselor anyone could ever ask for. Thanks again to the team of Global Pathfinders who work so diligently for all their students."
  },
  {
    id: 'content5',
    name: 'Divyansh Agarwal',
    uni: 'London School of Economics (LSE)',
    image: '/images/mentors/da.jpg',
    title: 'Transformative mentorship and application support',
    text1: "Getting into LSE was a dream come true. Embarking on a journey with Global Pathfinders was truly joyous. Their meticulous approach towards personal growth, guided by Shifali ma'am's expertise and unwavering support, transformed challenges into milestones as I found an intricate balance between academics and extracurriculars. She focuses on the personal growth of the student to make him/her university ready.",
    text2: "The support extended to crafting impactful SOPs and LORs added immense value, making the application process surprisingly relieving. I am wholeheartedly grateful for the dedication and diligence of my mentors at Global Pathfinders, who ensured my high school experience was transformative and one I'm proud of."
  },
  {
    id: 'content6',
    name: 'Madhav Sharma',
    uni: 'University of British Columbia (UBC)',
    image: '/images/mentors/ms.jpeg',
    title: 'Exceptional support and expert guidance',
    text1: "My experience with Global Pathfinders has been exceptional and they have gone above and beyond to help me achieve my goals. <br /><br />What sets Global Pathfinders apart is their dedication to their clients. They truly care about their students' success and work tirelessly to ensure that they achieve their goals. They are always available to answer any questions I had and offered unwavering support throughout the entire process.",
    text2: "Additionally, Shifali ma’am has a wealth of knowledge about the college landscape and is always up-to-date with the latest trends and developments. Their advice and recommendations were spot-on and helped me make informed decisions about my future. <br /><br />I had consulted with more than 10 college counsellors, and I’m happy to say that I made the best decision to go with Global Pathfinders as I was able to get into my dream university!"
  },
  {
    id: 'content7',
    name: 'Ritwik Gupta',
    uni: 'University of Edinburgh',
    image: '/images/mentors/demo.jpg',
    title: 'Exceptional mentorship and unwavering support.',
    text1: "I am thrilled to recommend Shifali Mam for their exceptional mentorship and guidance throughout the application process. She has been an invaluable mentor and supporter, helping me navigate every turn with their extensive knowledge and unwavering dedication.<br /><br />From the very beginning, Shifali Mam displayed a genuine commitment to my success. They took the time to understand my goals and aspirations, tailoring their advice to suit my unique circumstances. Whether it was reviewing my application materials or providing constructive feedback, she consistently went above and beyond to ensure I was well-prepared.",
    text2: "What truly sets Shifali Mam apart is their ability to inspire and instil confidence. Their patience, encouragement, and genuine belief in my abilities pushed me to strive for excellence. They provided insightful insights into the industry and offered valuable connections that proved instrumental in my journey. Not only that, she always motivated me to become self-reliant and self-independent in everything I did, and she was standing there to support me at every hurdle I encountered.<br /><br />I am grateful for the mentorship and guidance I received from Shifali Mam. Their expertise, kindness, and unwavering support have been instrumental in my success. I wholeheartedly recommend her to anyone seeking a mentor who is not only knowledgeable but also genuinely invested in helping others achieve their goals."
  },
  {
    id: 'content8',
    name: 'Nishant Garg',
    uni: '',
    image: '/images/mentors/demo.jpg',
    title: 'Prompt and Proactive Counseling',
    text1: "My journey with Global Pathfinders was very good. The counselling part was done excellently. They are very prompt in their services and guide you at each step.",
    text2: "Shifali mam was very proactive in all the processes right from selection of the universities till the final stage. Hence Global Pathfinders is highly recommended to anyone planning to study in Canada."
  },
  
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
              <p className="mt-4 text-gray-700" dangerouslySetInnerHTML={{__html:testimonial.text1}}></p>
              <p className="mt-4 text-gray-700" dangerouslySetInnerHTML={{__html:testimonial.text2}}></p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
