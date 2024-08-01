import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faGraduationCap, faClipboardList, faFileAlt, faGlobe } from '@fortawesome/free-solid-svg-icons';
import Accordion from '../components/Accordian';
import Footer from '../components/Layout/Footer';
import Logo from '../components/Logo';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Layout/PageHeader';
import { FaCalendarAlt } from 'react-icons/fa';

const faqs = [
    {
        question: 'What is the cost of studying in Australia?',
        answer: 'The total cost to study in Australia, including tuition fees and living expenses, varies based on the institution and location. On average, it ranges from AUD 30,000 to AUD 50,000 per year.',
    },
    {
        question: 'How competitive is it to get into Australian universities?',
        answer: 'Australian universities have varying levels of competitiveness. Admission requirements and competitiveness depend on the institution and the chosen course. Building a strong application is key.',
    },
    {
        question: 'What is the Group of Eight (Go8)?',
        answer: 'The Group of Eight (Go8) is a coalition of eight leading Australian universities known for their research excellence and academic prestige. It includes institutions like the University of Melbourne, Australian National University, and the University of Sydney.',
    },
    {
        question: 'When should I start preparing for Australian applications?',
        answer: 'You should begin preparing for your Australian university applications during the final years of high school. Research universities, choose courses, and start your application process well in advance.',
    },
    {
        question: 'Are scholarships available for international students in Australia?',
        answer: 'Yes, many Australian universities offer scholarships and financial aid to international students. Explore various scholarship opportunities available for your academic pursuit.',
    }
];

const StudyInAustralia = () => {
    return (
        <>
            <Navbar />
            <PageHeader title="Study in Australia" />
            <div className="bg-gray-100 py-10 px-6">
                <div className="max-w-7xl mx-auto">

                    {/* Header */}
                    <div className="text-center mb-24 mx-auto">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">Are you considering pursuing higher education in Australia?</h1>
                        <p className="text-lg text-gray-600 mb-8">
                            Australia is renowned for its world-class education system, diverse cultural environment, and stunning natural landscapes. From bustling cities to serene beaches, Australia offers a unique and enriching experience for international students. If you are fascinated by the laid-back Australian lifestyle or want to study at some of the world's top universities, then this might be the destination for you. Beyond all that, here are some reasons why studying in Australia should be on your list:
                        </p>
                    </div>

                    {/* Reasons to Study in Australia */}
                    <div className="mb-24">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose to Study in Australia?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <ReasonCard
                                icon={faUserGraduate}
                                title="Join the Legacy"
                                description="Australia has been a preferred study destination for many successful professionals and scholars. From groundbreaking researchers to influential artists, Australia has a legacy of attracting and nurturing talent. When you choose to study here, you become part of this rich intellectual tradition."
                            />
                            <ReasonCard
                                icon={faGraduationCap}
                                title="Work Opportunities"
                                description="Australia offers excellent work opportunities for students. You can work part-time during your studies and undertake internships to gain valuable practical experience. Moreover, after graduation, international students can apply for the Temporary Graduate Visa (subclass 485), allowing you to stay and work in Australia or seek employment opportunities."
                            />
                            <ReasonCard
                                icon={faClipboardList}
                                title="High-Quality Education"
                                description="Australian universities are known for their high academic standards and innovative teaching methods. A degree from an Australian institution is recognized worldwide and enhances your career prospects. Australia's education system focuses on research and practical skills, ensuring you are well-prepared for your future career."
                            />
                            <ReasonCard
                                icon={faGlobe}
                                title="Multicultural Environment"
                                description="Australia is one of the most multicultural countries in the world, offering a welcoming environment for international students. Studying in Australia gives you the chance to experience diverse cultures, make global connections, and gain a broader perspective."
                            />
                            <ReasonCard
                                icon={faFileAlt}
                                title="Stunning Natural Landscapes"
                                description="From the Great Barrier Reef to the Outback, Australia is known for its breathtaking natural beauty. Studying in Australia allows you to explore its stunning landscapes, engage in outdoor activities, and experience a high quality of life."
                            />
                            <ReasonCard
                                icon={faClipboardList}
                                title="Research Excellence"
                                description="Australia is a global leader in research and innovation across a wide range of academic disciplines. As a student, you'll have the chance to engage in groundbreaking research projects and gain valuable research experience. Australia's commitment to research excellence ensures you'll be at the forefront of innovation during your academic journey."
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
                                    'Standardized Tests (GRE, GMAT, etc. – if required by the program)',
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

export default StudyInAustralia;
