import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
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
                            <p>Delhi, India (335001)</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-left text-3xl font-bold mb-4">About Us</h2>
                        <ul className='text-left text-lg leading-10'>
                            <li><FontAwesomeIcon icon={faSquare} size="2xs" style={{color: "#74C0FC",}} />&nbsp;<a href="/#"> Home</a></li>
                            <li><FontAwesomeIcon icon={faSquare} size="2xs" style={{color: "#74C0FC",}} />&nbsp;<a href="/#"> About Us</a></li>
                            <li><FontAwesomeIcon icon={faSquare} size="2xs" style={{color: "#74C0FC",}} />&nbsp;<a href="/#"> Why Us</a></li>
                            <li><FontAwesomeIcon icon={faSquare} size="2xs" style={{color: "#74C0FC",}} />&nbsp;<a href="/#"> Programs</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-left text-3xl font-bold mb-4">Resources</h2>
                        <ul className='text-left text-lg leading-10'>
                            <li><FontAwesomeIcon icon={faSquare} size="2xs" style={{color: "#74C0FC",}}  />&nbsp;<a href="/#"> Blog</a></li>
                            <li><FontAwesomeIcon icon={faSquare} size="2xs" style={{color: "#74C0FC",}}  />&nbsp;<a href="/#"> Contact Us</a></li>
                            <li><FontAwesomeIcon icon={faSquare} size="2xs" style={{color: "#74C0FC",}}  />&nbsp;<a href="/#"> Terms & Conditions</a></li>
                            <li><FontAwesomeIcon icon={faSquare} size="2xs" style={{color: "#74C0FC",}}  />&nbsp;<a href="/#"> Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-left text-3xl font-bold mb-4">Contact Details</h2>
                        <div className='text-left text-lg leading-10'>
                            <p><FontAwesomeIcon icon={faPhone} />
                                <span className="ml-2">
                                    <a href="tel:+91 98916 21469">+91 98916 21469</a>
                                </span>
                            </p>
                            <p className="mt-2 whitespace-nowrap"><FontAwesomeIcon icon={faEnvelope} /> 
                                <span className='ml-2'>
                                    <a href="mailto:admin@globalpathfinders.co.in">
                                        admin@globalpathfinders.co.in
                                    </a>
                                </span>
                            </p>
                            <div className="space-x-4 my-4">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-white">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-white">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-white">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-white">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center border-t border-gray-700 pt-2 flex justify-evenly flex-wrap">
                    <p>&copy; <a href="/#" className="text-white">Copyright @ 2024 Global Pathfinders</a>. All Right Reserved.</p> <p>Created by Lavish Meena</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
