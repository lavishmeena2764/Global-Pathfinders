import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faBriefcase, faUniversity, faLandmark, faFlask, faLanguage } from '@fortawesome/free-solid-svg-icons';
import Accordion from '../components/Accordian';
import Footer from '../components/Layout/Footer';
import Logo from '../components/Logo';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Layout/PageHeader';
import { FaCalendarAlt } from 'react-icons/fa';

const faqs = [
    {
        question: 'What is the cost of studying in Europe?',
        answer: 'The total cost to study in Europe, including tuition fees and living expenses, varies based on the country and institution. Some countries offer affordable or even free tuition for international students. On average, it ranges from €10,000 to €30,000 per year.',
    },
    {
        question: 'How competitive is it to get into European universities?',
        answer: 'European universities have varying levels of competitiveness. Admission requirements and competitiveness depend on the institution and the chosen course. Building a strong application is key.',
    },
    {
        question: 'What is the Erasmus+ program?',
        answer: 'Erasmus+ is a European Union program that supports education, training, youth, and sport in Europe. It offers opportunities for students to study, train, and gain experience abroad, enhancing their academic and professional skills.',
    },
    {
        question: 'When should I start preparing for European applications?',
        answer: 'You should begin preparing for your European university applications during the final years of high school. Research universities, choose courses, and start your application process well in advance.',
    },
    {
        question: 'Are scholarships available for international students in Europe?',
        answer: 'Yes, many European universities and organizations offer scholarships and financial aid to international students. Explore various scholarship opportunities available for your academic pursuit.',
    }
];

const StudyInEurope = () => {
    return (
        <>
            <Navbar />
            <PageHeader title="Study in Europe" />
            <div className="bg-gray-100 py-10 px-6">
                <div className="max-w-7xl mx-auto">

                    {/* Header */}
                    <div className="text-center mb-24 mx-auto">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">Are you considering pursuing higher education in Europe?</h1>
                        <p className="text-lg text-gray-600 mb-8">
                            Europe is renowned for its rich history, diverse cultures, and world-class educational institutions. With a population that spans many countries and languages, Europe offers a unique and enriching experience for international students. Whether you are fascinated by the ancient architecture, vibrant cities, or scenic landscapes, Europe has something for everyone. Here are some compelling reasons why studying in Europe should be on your list:
                        </p>
                    </div>

                    {/* Reasons to Study in Europe */}
                    <div className="mb-24">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Study in Europe?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <ReasonCard
                                icon={faGlobe}
                                title="Join the Legacy"
                                description="Europe has been a cradle of knowledge and culture for centuries. From renowned philosophers and scientists to influential artists and writers, Europe has a legacy of attracting and nurturing talent. When you choose to study here, you become part of this rich intellectual tradition."
                            />
                            <ReasonCard
                                icon={faBriefcase}
                                title="Work Opportunities"
                                description="Europe offers excellent work opportunities for students. You can work part-time during your studies and undertake internships to gain valuable practical experience. Moreover, many European countries offer post-study work visas, allowing you to stay and work in Europe or seek employment opportunities after graduation."
                            />
                            <ReasonCard
                                icon={faLanguage}
                                title="Diverse and Multilingual Environment"
                                description="Europe is home to a diverse range of cultures and languages. Studying in Europe gives you the chance to experience this diversity firsthand, learn new languages, and make global connections. It’s an excellent opportunity to gain a broader perspective and enrich your personal and academic life."
                            />
                            <ReasonCard
                                icon={faUniversity}
                                title="High-Quality Education"
                                description="European universities are known for their high academic standards and rigorous educational programs. Many European countries offer affordable or even free tuition for international students. A degree from a European institution is recognized worldwide and enhances your career prospects."
                            />
                            <ReasonCard
                                icon={faLandmark}
                                title="Historical and Cultural Richness"
                                description="Europe is steeped in history and culture. Studying here allows you to explore ancient landmarks, museums, and cultural festivals. Whether you are interested in history, art, music, or cuisine, Europe offers a wealth of experiences to enrich your academic journey."
                            />
                            <ReasonCard
                                icon={faFlask}
                                title="Research Excellence"
                                description="Europe is a global leader in research and innovation across a wide range of academic disciplines. As a student, you'll have the chance to engage in groundbreaking research projects and gain valuable research experience. Europe's commitment to research excellence ensures you'll be at the forefront of innovation during your academic journey."
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
                                    'Language Proficiency (English, French, German, etc. – depending on the country)',
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

export default StudyInEurope;
