import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faLocationDot, faSquare } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-10 pb-3 text-center">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 pl-10">
                    <div>
                        <h2 className="text-left text-3xl font-bold mb-4">Address</h2>
                        <div className='text-left text-lg leading-8'>
                            <p><FontAwesomeIcon icon={faLocationDot} /> Global Pathfinders</p>
                            <p>204-205, 2nd Floor Aggarwal Bhawan, Building Number 35-36, Nehru Place, New Delhi (110019)</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-left text-3xl font-bold mb-4">About Us</h2>
                        <ul className='text-left text-lg leading-10'>
                            <li><FontAwesomeIcon icon={faSquare} size="2xs" style={{color: "#74C0FC",}} />&nbsp;<a href="/" style={{textDecoration:'none', color:'white'}}> Home</a></li>
                            <li><FontAwesomeIcon icon={faSquare} size="2xs" style={{color: "#74C0FC",}} />&nbsp;<a href="/about" style={{textDecoration:'none', color:'white'}}> About</a></li>
                            <li><FontAwesomeIcon icon={faSquare} size="2xs" style={{color: "#74C0FC",}} />&nbsp;<a href="/why-us" style={{textDecoration:'none', color:'white'}}> Why Us</a></li>
                            <li><FontAwesomeIcon icon={faSquare} size="2xs" style={{color: "#74C0FC",}} />&nbsp;<a href="/programs" style={{textDecoration:'none', color:'white'}}> Programs</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-left text-3xl font-bold mb-4">Resources</h2>
                        <ul className='text-left text-lg leading-10'>
                            <li><FontAwesomeIcon icon={faSquare} size="2xs" style={{color: "#74C0FC",}}  />&nbsp;<a href="/blog" style={{textDecoration:'none', color:'white'}}> Blog</a></li>
                            <li><FontAwesomeIcon icon={faSquare} size="2xs" style={{color: "#74C0FC",}}  />&nbsp;<a href="/contact" style={{textDecoration:'none', color:'white'}}> Contact Us</a></li>
                            <li><FontAwesomeIcon icon={faSquare} size="2xs" style={{color: "#74C0FC",}}  />&nbsp;<a href="/#" style={{textDecoration:'none', color:'white'}}> Terms & Conditions</a></li>
                            <li><FontAwesomeIcon icon={faSquare} size="2xs" style={{color: "#74C0FC",}}  />&nbsp;<a href="/#" style={{textDecoration:'none', color:'white'}}> Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-left text-3xl font-bold mb-4">Contact Details</h2>
                        <div className='text-left text-lg leading-10'>
                            <p><FontAwesomeIcon icon={faPhone} />
                                <span className="ml-2">
                                    <a href="tel:+91 98916 21469" style={{textDecoration:'none', color:'white'}}>+91 98916 21469</a>
                                </span>
                            </p>
                            <p className="mt-2 whitespace-nowrap"><FontAwesomeIcon icon={faEnvelope} /> 
                                <span className='ml-2'>
                                    <a href="mailto:admin@globalpathfinders.co.in" style={{textDecoration:'none', color:'white'}}>
                                        admin@globalpathfinders.co.in
                                    </a>
                                </span>
                            </p>
                            <div className="space-x-4 my-4">
                                <a href="https://www.facebook.com/profile.php?id=100090796356340" target="_blank" rel="noopener noreferrer" className="text-2xl text-white">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                                <a href="https://www.linkedin.com/company/global-pathfinders/" target="_blank" rel="noopener noreferrer" className="text-2xl text-white">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                                <a href="https://www.instagram.com/globalpathfinders" target="_blank" rel="noopener noreferrer" className="text-2xl text-white">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                                <a href="https://www.youtube.com/@GlobalPathfinders" target="_blank" rel="noopener noreferrer" className="text-2xl text-white">
                                    <FontAwesomeIcon icon={faYoutube} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center border-t border-gray-700 pt-2 flex justify-evenly flex-wrap">
                    <p>&copy; Copyright @ 2024 <a href="/#" className="text-white">Global Pathfinders</a>. All Right Reserved.</p> <p>Created by <a href="https://linkedin.com/in/lavish-meena" className="text-white">Lavish Meena</a></p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
