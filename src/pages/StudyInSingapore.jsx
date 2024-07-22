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
        question: 'What is the cost of studying in Singapore?',
        answer: 'The total cost of studying in Singapore, including tuition fees and living expenses, varies based on the institution and location. On average, it ranges from SGD 25,000 to SGD 40,000 per year.',
    },
    {
        question: 'What are some of the most prestigious universities in Singapore?',
        answer: 'Some of the best universities in Singapore include the National University of Singapore (NUS), Nanyang Technological University (NTU), Singapore Management University (SMU) etc. Singaporean universities have varying levels of competitiveness. Admission requirements and competitiveness depend on the institution and the chosen course. Building a strong application is crucial.',
    },
    {
        question: 'Are scholarships available for international students in Singapore?',
        answer: 'Yes, many Singaporean universities offer scholarships and financial aid to international students. Explore various scholarship opportunities available for your academic pursuit.',
    }
];

const StudyInSingapore = () => {
    return (
        <>
            <Navbar />
            <PageHeader title="Study in Singapore" />
            <div className="bg-gray-100 py-10 px-6">
                <div className="max-w-7xl mx-auto">

                    {/* Header */}
                    <div className="text-center mb-10 max-w-screen-lg mx-auto">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">Considering Studying in Singapore?</h1>
                        <p className="text-lg text-gray-600 mb-8">
                        Singapore offers an exceptional blend of academic excellence, promising career opportunities, and global recognition. Its world-class universities are known for their rigorous programs and innovative research, setting the stage for a high-quality education. The city-state’s thriving economy and diverse industries provide ample internship and job prospects, enhancing your career potential. Degrees from Singaporean institutions are highly regarded worldwide, opening doors to international opportunities. Additionally, Singapore’s modern and vibrant environment, combined with its rich cultural tapestry, ensures a unique and enriching experience. Consider Singapore for a well-rounded and globally recognized educational journey.
                        </p>
                    </div>

                    {/* Reasons to Study in Singapore */}
                    <div className="mb-10">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose to Study in Singapore?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <ReasonCard
                                icon={faUserGraduate}
                                title="Academic Prestige"
                                description="Singapore nurtures academic talent with a tradition of excellence."
                            />
                            <ReasonCard
                                icon={faGraduationCap}
                                title="Career Opportunities"
                                description="Exceptional prospects for part-time work and internships."
                            />
                            <ReasonCard
                                icon={faClipboardList}
                                title="Tailored Programs"
                                description="Flexible degree options to suit individual interests and goals."
                            />
                            <ReasonCard
                                icon={faGlobe}
                                title="Global Recognition"
                                description="High rankings in international assessments."
                            />
                            <ReasonCard
                                icon={faFileAlt}
                                title="Cutting-Edge Research"
                                description="Leader in innovative research across fields."
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
                                    'Academic Transcripts (High School Grades)',
                                    'English Language Proficiency (IELTS, TOEFL, etc.)',
                                    'Personal Statement',
                                    'Letter of Recommendation',
                                    'Admission Test (if required)',
                                ]}
                            />
                            <RequirementCard
                                title="For Prospective Graduate Students"
                                items={[
                                    'College/University Transcripts',
                                    'Personal Statement (Statement of Purpose)',
                                    'Letters of Recommendation',
                                    'Standardized Tests (GRE, GMAT, etc.)',
                                    'Work Experience (if required)',
                                ]}
                            />
                        </div>
                    </div>


                    {/* Personal Statement Requirements */}
                    <div className='mb-16'>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Personal Statement Requirements</h2>
                        <div className="space-y-6">
                            <PersonalStatementCard
                                university="National University of Singapore (NUS)"
                                requirement="National University of Singapore (NUS) requires applicants to share their achievements through a personal statement of no more than 2,000 characters (about 300 words)."
                            />
                            <PersonalStatementCard
                                university="Nanyang Technological University (NTU)"
                                requirement="At Nanyang Technological University (NTU), the requirement differs by programme. For example, the School of Art, Design and Media (ADM) requires students to write about what they think is unique and interesting about themselves and briefly discuss a piece of art, design, or media work of their choice. "
                            />
                            <PersonalStatementCard
                                university="Singapore Management University (SMU)"
                                requirement="Students applying to Singapore Management University (SMU) are to provide a 300-word personal statement about their most outstanding achievements and contributions and respond to 2-3 short answer questions in no more than 50 words."
                            />
                            <PersonalStatementCard
                                university="Singapore University of Technology and Design (SUTD)"
                                requirement="Students applying to the Singapore University of Technology and Design (SUTD) are to choose two out of four “personal insights” questions to answer and provide a list of past experiences and achievements relating to leadership, internship, research, entrepreneurship, and community service."
                            />
                            <PersonalStatementCard
                                university="Singapore Institute of Technology (SIT)"
                                requirement="The Singapore Institute of Technology (SIT) application portal provides a series of prompts to guide students in writing their 300-word personal statement that should describe an exceptional achievement or key highlights in their academic or employment experience. "
                            />
                            <PersonalStatementCard
                                university="Singapore University of Social Sciences (SUSS)"
                                requirement="Singapore University of Social Sciences (SUSS) requires a portfolio showcasing the applicant’s non-academic achievements and a 500-word personal reflection essay on a given topic."
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

const PersonalStatementCard = ({ university, requirement }) => {
    return (
        <>
            <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex flex-row flex-wrap">
                <FaCircleCheck className='h-8 w-8 mr-2' />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{university}</h3>
            </div>
                <p className="text-gray-600">{requirement}</p>
            </div>
        </>
    );
};

export default StudyInSingapore;
