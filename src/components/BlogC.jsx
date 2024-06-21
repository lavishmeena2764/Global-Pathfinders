import React from 'react'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const blogData = [
  {
    title: "SAT/ACT",
    content: ["High-quality content designed by experienced trainers for Verbal and Quant",
      "10 Mock Tests and 1000+ questions offered as a part of study kit",
      "Personalized Coaching",
      "Classroom and Online Study Programs",
      "Programs offered in 2 to 9 months’ format",
      "Doubt Sessions and Extra Help Sessions"],
    image: "./images/programs/blog-img4.jpg"
  },
  {
    title: "IELTS, TOEFL",
    content: ["Graded Speaking & Writing assessment sessions",
      "Multiple study program formats",
      "10+ Mock tests",
      "Online/Offline classes",
      "Grammar Exercises",
      "Experienced trainers with high test scores",
      "Unlimited Ask an Expert questions",
      "1-on-1 mentor support"],
    image: "./images/programs/blog-img5.jpg"
  }
];

  const BlogCard = ({ title, content, image }) => {
    return (
      <div className="p-6 bg-white rounded-lg shadow-lg m-4 flex flex-col">
        <img src={image} alt={title} className="w-full object-cover rounded-lg mb-4" />
        <h3 className="text-2xl font-bold mb-2 text-indigo-900">{title}</h3>
        <p className="mb-4">
        <ul className='list-disc'>
          {content.map((item, index) => (
            <li className='ml-6 text-lg' key={index}>{item}</li>
          ))}
        </ul>
        </p>
      </div>
    );
  };


const ProgramCard = ({ title, content, image }) => (
    <div className="p-6 bg-white rounded-lg shadow-lg m-4 flex flex-center flex-col md:flex-row md:items-start flex-wrap">
      <FontAwesomeIcon icon={faCircleCheck} size='2xl' className='w-16 text-blue-500 h-16 object-cover rounded-full mr-4' />
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

const BlogC = () => {
  return (
    <section className="mb-12">
            <div className="grid md:grid-cols-2 gap-6">
              {blogData.map((blog, index) => (
                <BlogCard
                  key={index}
                  title={blog.title}
                  content={blog.content}
                  image={blog.image}
                />
              ))}
            </div>
          </section>
  )
}

export default BlogC;