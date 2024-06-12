import React from 'react'

const Team = () => {
    return (
        <>
            <section className="mb-12">
                <h2 className="text-5xl text-gray-700 font-bold text-center mb-8">Our Team</h2>
                <div className="grid gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className={`bg-white p-6 rounded-lg flex flex-col ${index % 2 === 0 ? 'xl:flex-row' : 'xl:flex-row-reverse'}`}>
                            <img src={member.photo} alt={member.name} className="h-full mx-auto lg:mx-0" />
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
        name: "Shifali Mehta",
        description: "Shifali Mehta is the co-founder of Global Pathfinders. I began my journey as an independent educational consultant because it combines my expertise in personal branding and higher education with my passion for coaching students. The passion that fuels my work is deeply personal. As a mother of two college students, one at Stanford University and the other at UC Berkeley, I know firsthand how education can change a life. As a parent, I understand the desire of other parents to see their kids in top-ranked universities and recognize their confusions and workload that sometimes bring delays in application until they realize it’s too late. While travelling to competitions and tournaments with my children, I had the pleasure of meeting some of the brightest kids around. While interacting with these students, I identified many gap areas missed by students and counsellors in the students’ application journey. This experience made me realize my passion for mentoring children with resourceful insights for their future. Soon enough, I became the go-to person whenever they needed personal and professional advice . My expertise lies not just in helping the students build their profile but also in helping them realise and raise their emotional quotient. I strongly believe in the power  of education, and I feel privileged to have the opportunity to help guide students on their path to success. By helping them develop a strong personal brand and stay motivated, I hope to empower them to achieve their full potential and make a positive impact in the world.",
        photo: "./images/shifali.jpg"
    },
    {
        name: "Rajiv Mehta",
        description: "Mr Mehta is the founder of Xtended Business Reporting LTD bringing substantial years of financial and entrepreneurial experience to the firm. He has invested in various companies and start-ups across sectors. His key passion is to mentor and guide students to follow their dreams.",
        photo: "./images/rajiv.jpg"
    },
    {
        name: "Parminder Kaur",
        description: "Going beyond the set standards” has always been Ms. Parminder’s motto. Parminder has always made sure to deliver exemplary training to her students and travelling the extra mile to identify the caliber of each individual. With her 10+ years of experience in tutoring SAT, GRE, and GMAT, she has built her legacy by guiding and teaching over 1000+ individuals. Parminder is an expert not only in the verbal section of such competitive tests, but also in mentoring students and walking them through the obscurity of these tests with ease. Alongside being a teacher, she is also a certified trainer coach. She has led several 'train the trainer' programs and has certified 25+ trainers and conducted 30+ training sessions. In her recent works as a consultant, Parminder has consulted and designed course curriculums for some major education companies.",
        photo: "./images/parminder.jpg"
    }
];

export default Team