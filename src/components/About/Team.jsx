import React from 'react'
import { FaLinkedin } from 'react-icons/fa';

const Team = () => {
    return (
        <>
            <section className="mb-12">
                <h2 className="text-5xl text-gray-700 font-bold text-center mb-8">Our Team</h2>
                <div className="grid gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className={`bg-white p-6 rounded-lg flex flex-col ${index % 2 === 0 ? 'xl:flex-row' : 'xl:flex-row-reverse'}`}>
                            <img src={member.photo} alt={member.name} className="w-80 mx-auto lg:mx-0" />
                            <div className="lg:ml-6 lg:mr-6 flex flex-col justify-center lg:text-left">
                                <h3 className="text-2xl font-bold ">{member.name} <a href={member.linkedin}><FaLinkedin className='text-blue-500' style={{float:"right", marginRight:'3rem'}} /></a> </h3>
                                <h6 className="text-lg font-bold mb-2 text-gray-600">{member.designation}</h6>
                                <p className="text-lg text-gray-600 pr-5 text-justify" dangerouslySetInnerHTML={{ __html: member.description }}></p>
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
        designation:"Founder & CEO",
        linkedin:"https://www.linkedin.com/in/shifali-mehta-/",
        description: "With over seven years of dedicated experience in international admissions, Shifali Mehta has achieved a remarkable 100% success rate in guiding students to gain acceptance into their best-fit universities. Her dynamic leadership and deep understanding of the admissions landscape make her an invaluable resource for aspiring students. Shifali excels in profile building, helping students craft compelling and unique personal narratives. She is also an expert in essay writing, ensuring that every application she oversees stands out to admissions committees. Under her guidance, students are empowered to present their best selves, significantly increasing their chances of success.",
        photo: "/images/shifali.jpg"
    },
    {
        name: "Rajiv Mehta",
        designation:"Co-Founder",
        linkedin:"https://www.linkedin.com/in/rajiv-mehta-7507bb27/",
        description: "Rajiv is the CEO of Xtended Business Reporting LTD and brings substantial years of financial and entrepreneurial experience to the firm. He is passionate about mentoring and guiding students toward success.",
        photo: "/images/rajiv.jpg"
    },
    {
        name: "Isha George",
        designation:"Director, Lead Counsellor",
        linkedin:"#",
        description: "Isha is your ultimate ally in turning academic dreams into reality. With a knack for helping students reach top-tier universities around the globe, she's not just about getting you into college but also ensuring you thrive once you're there. <br /> With over four years of experience, Isha has mastered the intricacies of global admissions. Whether your goal is a university in the US, UK, Asia, or beyond, Isha’s expertise ensures you get there. Her journey—from the bustling art scenes of Bombay to life-altering stints with UNICEF and an Indo-French NGO, to the esteemed halls of renowned institutions like St. Stephen's—brings a unique perspective to her counseling approach.",
        photo: "/images/isha.jpg"
    },
    {
        name: "Jiya Chawla",
        designation:"Head of Tech & Research",
        linkedin:"https://www.linkedin.com/in/jiyachawla/",
        description: "Jiya is passionate about technology and loves mentoring students in this field. She brings research expertise to the organization and has previously been associated with institutions such as LSR and ISB.",
        photo: "/images/jiya.jpg"
    }
];

export default Team