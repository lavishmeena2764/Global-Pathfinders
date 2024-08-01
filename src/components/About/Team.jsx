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
        description: "Mr. Rajiv Mehta, the visionary founder of Global Pathfinders, brings a wealth of experience from his successful career in finance and entrepreneurship. As the founder of Xtended Business Reporting LTD and a seasoned investor across diverse sectors, Mr. Mehta's real-world expertise forms the backbone of our unique mentorship approach. At Global Pathfinders, Mr. Mehta goes beyond traditional counseling. He offers students unparalleled opportunities such as shadowing him in high-level business meetings, personalized internship placements through his extensive network, and hands-on guidance in developing and pitching startup ideas to real investors. This immersive mentorship transforms theoretical knowledge into practical skills, empowering students to navigate the complexities of the world with confidence and acumen.",
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
        description: "Jiya is deeply passionate about technology and loves mentoring students in this field. With a strong commitment to sharing her knowledge and expertise, she guides the students to successful journeys in programming and development. Jiya brings a wealth of research expertise to the organization, having been associated with prestigious institutions such as Lady Shri Ram College (LSR) and the Indian School of Business (ISB). Her experience in these institutions has equipped her with a profound understanding of the technological landscape, which she leverages to drive innovation and excellence within the organization.",
        photo: "/images/jiya.jpg"
    }
];

export default Team