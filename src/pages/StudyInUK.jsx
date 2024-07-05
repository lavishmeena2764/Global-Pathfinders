import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faGraduationCap, faClipboardList, faFileAlt, faGlobe } from '@fortawesome/free-solid-svg-icons';
import Accordion from '../components/Accordian';
import Footer from '../components/Layout/Footer';
import Logo from '../components/Logo';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Layout/PageHeader';
import { FaCircleCheck } from 'react-icons/fa6';

const faqs = [
    {
        question: 'What is the cost of studying in the UK?',
        answer: 'The total cost to study in the UK, including tuition fees and living expenses, varies based on the institution and location. On average, it ranges from £20,000 to £35,000 per year.',
    },
    {
        question: 'How competitive is it to get into UK universities?',
        answer: 'UK universities have varying levels of competitiveness. Admission requirements and competitiveness depend on the institution and the chosen course. Building a strong application is key.',
    },
    {
        question: 'What are Russell Group universities?',
        answer: 'The Russell Group is a collection of 24 leading UK universities known for their research excellence and academic prestige. It includes institutions like Oxford, Cambridge, and Imperial College London.',
    },
    {
        question: 'When should I start preparing for UK applications?',
        answer: 'You should begin preparing for your UK university applications during the final years of high school. Research universities, choose courses, and start your application process well in advance.',
    },
    {
        question: 'Are scholarships available for international students in the UK?',
        answer: 'Yes, many UK universities offer scholarships and financial aid to international students. Explore various scholarship opportunities available for your academic pursuit.',
    }
];

const StudyInUK = () => {
    return (
        <>
            <Navbar />
            <PageHeader title="Study in the UK" />
            <div className="bg-gray-100 py-10 px-6">
                <div className="max-w-7xl mx-auto">

                    {/* Header */}
                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">Are you considering pursuing higher education in the United Kingdom?</h1>
                        <p className="text-lg text-gray-600 mb-8">
                            The UK is renowned for its prestigious, and reputed institutions that promise to deliver only the best. While its population making up only 1% of the globe, it’s responsible for almost 8% of academic publications. If you are fascinated by the English culture, or want to experience life in the Scottish Highlands as you study towards a degree then this might be the destination for you. Beyond all that, here are some reasons why studying in the UK should be on your list:
                        </p>
                    </div>

                    {/* Reasons to Study in the UK */}
                    <div className="mb-10">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose to Study in the UK?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <ReasonCard
                                icon={faUserGraduate}
                                title="Join the Legacy"
                                description="The UK has been the preferred study destination for some of the brightest minds in history. When you choose to study here, you become part of this rich intellectual tradition."
                            />
                            <ReasonCard
                                icon={faGraduationCap}
                                title="Work Opportunities"
                                description="The UK offers excellent work opportunities for students, including part-time work and internships."
                            />
                            <ReasonCard
                                icon={faClipboardList}
                                title="Short, Flexible Degrees"
                                description="UK universities offer short and flexible degree programs, allowing you to fast-track your education and career."
                            />
                            <ReasonCard
                                icon={faGlobe}
                                title="World-Class Education"
                                description="The UK is home to top-ranked universities, providing a symbol of quality education and global career opportunities."
                            />
                            <ReasonCard
                                icon={faFileAlt}
                                title="Research Excellence"
                                description="Engage in groundbreaking research projects and gain valuable research experience."
                            />
                        </div>
                    </div>

                    {/* Requirements */}
                    <div className="mb-10">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Requirements for Admission</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <RequirementCard
                                title="For Prospective Undergraduate Students"
                                items={[
                                    'Academic transcripts (high school grades)',
                                    'English Language Proficiency (IELTS, TOEFL, etc.)',
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

export default StudyInUK;
