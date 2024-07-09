import React from 'react'

const Team = () => {
    return (
        <>
            <section className="mb-12">
                <h2 className="text-5xl text-gray-700 font-bold text-center mb-8">Our Team</h2>
                <div className="grid gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className={`bg-white p-6 rounded-lg flex flex-col ${index % 2 === 0 ? 'xl:flex-row' : 'xl:flex-row-reverse'}`}>
                            <img src={member.photo} alt={member.name} className="h-96 mx-auto lg:mx-0" />
                            <div className="lg:ml-6 lg:mr-6 flex flex-col justify-center lg:text-left">
                                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                                <p className="text-lg text-gray-600">{member.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

const teamMembers = [
    {
        name: "Shifali Mehta (Founder & CEO)",
        description: "With over seven years of dedicated experience in international admissions, Shifali Mehta has achieved a remarkable 100% success rate in guiding students to gain acceptance into their best-fit universities. Her dynamic leadership and deep understanding of the admissions landscape make her an invaluable resource for aspiring students. Shifali excels in profile building, helping students craft compelling and unique personal narratives. She is also an expert in essay writing, ensuring that every application she oversees stands out to admissions committees. Under her guidance, students are empowered to present their best selves, significantly increasing their chances of success.",
        photo: "./images/shifali.jpg"
    },
    {
        name: "Rajiv Mehta (Co-Founder)",
        description: "Rajiv is the CEO of Xtended Business Reporting LTD and brings substantial years of financial and entrepreneurial experience to the firm. He is passionate about mentoring and guiding students toward success.",
        photo: "./images/rajiv.jpg"
    },
    {
        name: "Isha George (Director, Lead Counsellor)",
        description: "Going beyond the set standards” has always been Ms. Parminder’s motto. Parminder has always made sure to deliver exemplary training to her students and travelling the extra mile to identify the caliber of each individual. With her 10+ years of experience in tutoring SAT, GRE, and GMAT, she has built her legacy by guiding and teaching over 1000+ individuals. Parminder is an expert not only in the verbal section of such competitive tests, but also in mentoring students and walking them through the obscurity of these tests with ease. Alongside being a teacher, she is also a certified trainer coach. She has led several 'train the trainer' programs and has certified 25+ trainers and conducted 30+ training sessions. In her recent works as a consultant, Parminder has consulted and designed course curriculums for some major education companies.",
        photo: "./images/parminder.jpg"
    },
    {
        name: "Jiya Chawla (Head of Tech & Research)",
        description: "Jiya is passionate about technology and loves mentoring students in this field. She brings research expertise to the organization and has previously been associated with institutions such as LSR and ISB.",
        photo: "./images/jiya.jpg"
    }
];

export default Team