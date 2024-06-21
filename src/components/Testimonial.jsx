import React from 'react';

const ProgramCard = ({ title, bulletPoints, image }) => (
  <div className="p-6 bg-white rounded-lg shadow-lg m-4 flex items-start">
    <img src={image} alt={title} className="w-20 h-20 object-cover rounded-full mr-4" />
    <div>
      <h3 className="text-2xl font-bold mb-2 text-indigo-900">{title}</h3>
      <ul className="list-disc list-inside list-disc">
        {bulletPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  </div>
);

const BlogCard = ({ title, content, image }) => (
  <div className="p-6 bg-white rounded-lg shadow-lg m-4 flex flex-col justify-between">
    <img src={image} alt={title} className="w-full h-32 object-cover rounded-lg mb-4" />
    <h3 className="text-xl font-bold mb-2 text-indigo-900">{title}</h3>
    <p className="mb-4">{content}</p>
    <a href="#" className="text-blue-500 hover:underline mt-auto">Read More</a>
  </div>
);

const GoalsAcademicSupport = () => {
  return (
    <>
      <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <section className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4 text-indigo-900">Goals Academic Support Program</h2>
          <p className="text-lg mb-4">
            Creating a detailed plan for high school coursework can help students stay organized, track their progress, and ensure that they meet all the necessary requirements for graduation. Hence, we meticulously forge a comprehensive plan for your school coursework.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-indigo-900">Our Expertise Areas</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ProgramCard
              title="Course Offerings"
              bulletPoints={[
                "Ensuring full advantage of course offerings at high school."
              ]}
              image="https://via.placeholder.com/80"
            />
            <ProgramCard
              title="Research Groups & Forums"
              bulletPoints={[
                "Joining groups to connect with students with similar research interests.",
                "Discussing research ideas, sharing resources, and finding research buddies."
              ]}
              image="https://via.placeholder.com/80"
            />
            <ProgramCard
              title="Extracurricular & Academic Interests"
              bulletPoints={[
                "Applying interests to deepen and broaden experiences.",
                "Looking for internships and performance opportunities."
              ]}
              image="https://via.placeholder.com/80"
            />
            <ProgramCard
              title="Intellectual Vitality"
              bulletPoints={[
                "Finding something you care about deeply.",
                "Demonstrating commitment, dedication, and genuine interest."
              ]}
              image="https://via.placeholder.com/80"
            />
          </div>
        </section>

        <div className="text-center mb-12">
          <a
            href="#"
            className="inline-block bg-indigo-900 text-white font-bold py-2 px-6 rounded hover:bg-indigo-700 transition duration-300"
          >
            Book a Demo
          </a>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-indigo-900">Programs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <BlogCard
              title="SAT/ACT Prep"
              content="High-quality content designed by experienced trainers for Verbal and Quant. 10 Mock Tests and 1000+ questions offered as part of the study kit."
              image="https://via.placeholder.com/150"
            />
            <BlogCard
              title="IELTS, TOEFL Prep"
              content="Graded Speaking & Writing assessment sessions. Multiple study program formats. 10+ Mock tests. Online/Offline classes."
              image="https://via.placeholder.com/150"
            />
          </div>
        </section>
      </div>
    </div>
    </>
  );
};

export default GoalsAcademicSupport;
