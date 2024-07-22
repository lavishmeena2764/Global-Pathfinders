import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faGraduationCap, faClipboardList, faFileAlt, faGlobe, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import Accordion from '../components/Accordian';
import Footer from '../components/Layout/Footer';
import Logo from '../components/Logo';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Layout/PageHeader';
import { FaCircleCheck } from 'react-icons/fa6';
import { FaCalendarAlt } from 'react-icons/fa';

const faqs = [
    {
        question: 'How much does it cost to study in the US?',
        answer: 'On average, the total cost to study in the United States at a 4-year institution (with living expenses included) is 200,000 to 400,000 USD.',
    },
    {
        question: 'Is it difficult to get into US colleges/universities?',
        answer: 'Some US universities are extremely competitive, and it is difficult to get into without having the right profile. To get admission into a good university in the US, profile building is essential.',
    },
    {
        question: 'What is the Ivy League?',
        answer: 'The Ivy League is a group of eight extremely prestigious research universities located in the northeast. These include Harvard, Princeton, Yale, Brown, Dartmouth, UPenn, Cornell, and Columbia.',
    },
    {
        question: 'When should I start preparing to apply to the US?',
        answer: 'Eleventh grade is a good place to start preparing for your US applications, whereas profile building should start as early as ninth grade.',
    },
    {
        question: 'What are the best colleges for studying in the US?',
        answer: 'We have compiled a list of the top colleges and universities in the United States for international applicants. Read here.',
    },
    {
        question: 'What is the digital SAT?',
        answer: 'As of 2023, the College Board has shifted from a pen and paper-based SAT to a digital variant for both US-based and International testers. Learn more here.',
    },
    {
        question: 'Does the US offer scholarships for international students?',
        answer: 'While the US government does not offer scholarships to undergraduate applicants, many universities do. Learn more about the various scholarships offered here.',
    }
];

const StudyInUSA = () => {
    return (
        <>
            <Navbar />
            <PageHeader title="Study in the USA" />
            <div className="bg-gray-100 py-10 px-6">
                <div className="max-w-7xl mx-auto">

                    {/* Header */}
                    <div className="text-center mb-10 max-w-screen-lg mx-auto">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">Are you considering pursuing your higher education in the United States?</h1>
                        <p className="text-lg text-gray-600 mb-8">
                        Your journey towards excellence and a world of opportunities begins right here! The United States is celebrated for its prestigious universities, advanced research facilities, and inclusive learning environments that embrace diversity. By choosing to study in the USA, you unlock a multitude of opportunities for academic, professional, and personal growth. With access to top-ranked institutions and cutting-edge technology, you’ll gain valuable skills and experiences that prepare you for a successful future. Moreover, the rich cultural environment and extensive networking opportunities enhance your global perspective and career prospects. Studying in the USA is not just about education; it’s about opening doors to endless possibilities and shaping your future.Here are some compelling reasons why studying in the USA should be at the top of your list:
                        </p>
                    </div>

                    {/* Reasons to Study in the USA */}
                    <div className="mb-10">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-left">Why Choose to Study in the USA?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <ReasonCard
                                icon={faUserGraduate}
                                title="World-Class Education"
                                description="The United States is home to some of the world's ranked universities offering a vast array of programs and majors. By choosing to study here, you will gain access to education provided by renowned faculty members."
                            />
                            <ReasonCard
                                icon={faGraduationCap}
                                title="Global Reputation"
                                description="A degree from an institution carries weight worldwide. It not only enhances your career prospects but also opens doors to global opportunities that can shape your future."
                            />
                            <ReasonCard
                                icon={faClipboardList}
                                title="Research"
                                description="The USA is a hub for groundbreaking research and innovation across fields. As a student, you have the chance to engage in cutting-edge projects and gain research experience that can propel your journey forward."
                            />
                            <ReasonCard
                                icon={faGlobe}
                                title="Cultural Richness"
                                description="Studying in the USA exposes you to a tapestry of cultures. You'll have the opportunity to meet people from all corners of the globe, fostering cultural understanding and personal growth along the way."
                            />
                            <ReasonCard
                                icon={faFileAlt}
                                title="Internship and Job Opportunities"
                                description="In the United States, there are plenty of internships and job prospects. These opportunities enable individuals to acquire hands-on experience while they are studying or after they graduate."
                            />
                            <ReasonCard
                                icon={faBookOpen}
                                title="Holistic Academic Experience"
                                description="The USA offers a flexible academic system, allowing students to explore diverse fields. Universities invest in state-of-the-art facilities and provide networking opportunities with professionals and alumni through events and career fairs."
                            />
                        </div>
                    </div>

                    {/* Requirements */}
                    <div className="mb-10">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-left">Requirements for Admission</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <RequirementCard
                                title="For Prospective Undergraduate Students"
                                items={[
                                    'Transcripts from 9th to 12th grade',
                                    'English Proficiency (IELTS, TOEFL, DET etc)',
                                    'Standardized Tests (SAT, ACT)',
                                    'Letters of Recommendation',
                                    'Volunteer Activities',
                                    'Extracurriculars',
                                    'Essays/SOPs',
                                ]}
                            />
                            <RequirementCard
                                title="For Prospective Graduate Students"
                                items={[
                                    'College transcripts',
                                    'Letters of Recommendation',
                                    'Essays/SOPs',
                                    'GRE/GMAT',
                                    'Work Experience',
                                ]}
                            />
                        </div>
                    </div>

                    <Accordion faqs={faqs} />

                    <div className="text-left my-10">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-left">The Global Pathfinders Edge</h2>
                        <p className="text-xl text-gray-600 mb-8">
                            <PersonalStatementCard
                                requirement="The college admissions journey can be overwhelming. Getting entry into top-tier institutions in countries like the US is no cake walk. That's where our expert advisors step in, playing a pivotal role in guiding students toward their dream universities. Learn more about our experts here"
                            />
                            <br />
                            <PersonalStatementCard
                                requirement="We have a step-by-step strategic approach to college admissions and profile building. We empower students to stand out by providing personalized growth plans and weekly calls to keep them on track."
                            />
                            <br />
                            <PersonalStatementCard
                                requirement="By showcasing your child’s exceptional qualities across all application materials, we enhance their odds of securing coveted spots in top colleges around the globe. To get started, reach out to us today! We enroll only a limited number of children per cohort due to the personalized nature of our services."
                            />
                        </p>
                    </div>

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

const PersonalStatementCard = ({ requirement }) => {
    return (
        <>
            <div className="bg-white shadow-lg rounded-lg p-6">
                <div className="flex flex-row flex-wrap">

                    <p className="text-gray-600 text-lg"><FaCircleCheck className='h-6 w-6 mr-2' style={{ float: "left" }} /> {requirement}</p>
                </div>

            </div>
        </>
    );
};

export default StudyInUSA;
