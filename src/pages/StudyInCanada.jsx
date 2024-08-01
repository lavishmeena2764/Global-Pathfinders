import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faBriefcase, faBook, faGlobe, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import { FaCalendarAlt } from 'react-icons/fa';
import Accordion from '../components/Accordian';
import Footer from '../components/Layout/Footer';
import Logo from '../components/Logo';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Layout/PageHeader';

const faqs = [
    {
        question: 'What is the cost of studying in Canada?',
        answer: 'The total cost to study in Canada, including tuition fees and living expenses, varies based on the institution and location. On average, it ranges from CAD 20,000 to CAD 40,000 per year.',
    },
    {
        question: 'How competitive is it to get into Canadian universities?',
        answer: 'Canadian universities have varying levels of competitiveness. Admission requirements and competitiveness depend on the institution and the chosen course. Building a strong application is key.',
    },
    {
        question: 'What are U15 universities?',
        answer: 'The U15 is a group of 15 leading research-intensive universities in Canada known for their research excellence and academic prestige. It includes institutions like the University of Toronto, McGill University, and the University of British Columbia.',
    },
    {
        question: 'When should I start preparing for Canadian applications?',
        answer: 'You should begin preparing for your Canadian university applications during the final years of high school. Research universities, choose courses, and start your application process well in advance.',
    },
    {
        question: 'Are scholarships available for international students in Canada?',
        answer: 'Yes, many Canadian universities offer scholarships and financial aid to international students. Explore various scholarship opportunities available for your academic pursuits.',
    }
];

const StudyInCanada = () => {
    return (
        <>
            <Navbar />
            <PageHeader title="Study in Canada" />
            <div className="bg-gray-100 py-10 px-6">
                <div className="max-w-7xl mx-auto">

                    {/* Header */}
                    <div className="text-center mb-24 mx-auto">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">Are you considering pursuing higher education in Canada?</h1>
                        <p className="text-lg text-gray-600 mb-8">
                            Canada is renowned for its high-quality education system and multicultural environment. With a population that embraces diversity, it’s no surprise that Canada is home to some of the world’s top universities and academic programs. If you are fascinated by the vibrant cities or want to experience the stunning natural landscapes as you study towards a degree, then this might be the destination for you. Beyond all that, here are some reasons why studying in Canada should be on your list:
                        </p>
                    </div>

                    {/* Reasons to Study in Canada */}
                    <div className="mb-24">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose to Study in Canada?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <ReasonCard
                                icon={faUserGraduate}
                                title="Join the Legacy"
                                description="Canada has been the preferred study destination for many successful professionals and scholars. From groundbreaking scientists to influential artists, Canada has a legacy of attracting and nurturing talent."
                            />
                            <ReasonCard
                                icon={faBriefcase}
                                title="Work Opportunities"
                                description="Canada offers excellent work opportunities for students, including part-time work and internships."
                            />
                            <ReasonCard
                                icon={faBook}
                                title="High-Quality Education"
                                description="Canadian universities are known for their rigorous academic standards and high-quality education. A degree from a Canadian institution is recognized worldwide and enhances your career prospects."
                            />
                            <ReasonCard
                                icon={faGlobe}
                                title="Multicultural Environment"
                                description="Canada is one of the most multicultural countries in the world, offering a welcoming environment for international students. Studying in Canada gives you the chance to experience diverse cultures, make global connections, and gain a broader perspective."
                            />
                            <ReasonCard
                                icon={faShieldAlt}
                                title="Safety and Quality of Life"
                                description="Canada is consistently ranked as one of the safest countries in the world. With a high standard of living, excellent healthcare system, and beautiful natural surroundings, Canada offers an unparalleled quality of life for students."
                            />
                            <ReasonCard
                                icon={faBook}
                                title="Research Excellence"
                                description="Canada is a global leader in research and innovation across a wide range of academic disciplines. As a student, you'll have the chance to engage in groundbreaking research projects and gain valuable research experience."
                            />
                        </div>
                    </div>

                    {/* Requirements */}
                    <div className="mb-24">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Requirements for Admission</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <RequirementCard
                                title="For Prospective Undergraduate Students"
                                items={[
                                    'Academic transcripts (high school grades)',
                                    'English or French Language Proficiency (IELTS, TOEFL, etc.)',
                                    'Personal Statement',
                                    'Letter of Recommendation',
                                    'Admission Test (if required by the university)',
                                ]}
                            />
                            <RequirementCard
                                title="For Prospective Graduate Students"
                                items={[
                                    'College/University transcripts',
                                    'Personal Statement (Statement of Purpose)',
                                    'Letters of Recommendation',
                                    'Standardized Tests (GRE, GMAT, etc.)',
                                    'Work Experience (if required by the program)',
                                ]}
                            />
                        </div>
                    </div>

                    <Accordion faqs={faqs} />

                    <a href='/contact' className='hover:no-underline'>
                        <button className="mt-8 px-6 py-3 bg-blue-500 mx-auto text-gray-50 font-semibold rounded-md flex items-center hover:bg-blue-600 hover:text-white transition duration-300">
                            Consult Now
                            <FaCalendarAlt className="ml-2" />
                        </button>
                    </a>
                </div>
            </div>
            <Logo />
            <Footer />
        </>
    );
};

const ReasonCard = ({ icon, title, description }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
            <FontAwesomeIcon icon={icon} className="text-blue-500 text-4xl mr-4" />
            <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
};

const RequirementCard = ({ title, items }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
            <ul className="list-disc list-inside text-gray-600">
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default StudyInCanada;
