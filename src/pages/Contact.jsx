import React, { useState } from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import '../App.css';
import PageHeader from '../components/Layout/PageHeader';
import { FaCheck, FaCircle } from 'react-icons/fa6';
import { FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        body: ''
    });

    const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('submitting');
        console.log(formData)
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                setFormStatus('success');
            } else {
                const errorData = await response.json();
                setErrorMessage(errorData.message || 'Something went wrong. Please try again.');
                setFormStatus('error');
            }
        } catch (error) {
            setErrorMessage('Something went wrong. Please try again.');
            setFormStatus('error');
        }
    };

    return (
        <>
            <Navbar />
            <PageHeader title='Contact Us' />
            <div className="min-h-screen flex flex-col items-center justify-center p-6 mb-20">
                <div className='flex flex-wrap justify-evenly flex-row w-full my-5'>
                    <div className='flex flex-wrap justify-evenly flex-col mb-5'>
                        <div className="bg-neutral-100 shadow-xl my-3 md:my-0 flex justify-start rounded-2xl py-10 w-80 md:w-96">
                            <FontAwesomeIcon className="ml-6 md:ml-10 mr-2" icon={faEnvelope} size="3x" />
                            <div className="">
                                <h2 className="text-2xl font-semibold text-gray-700">Email Us</h2>
                                <p className="text-gray-600"><a href="mailto:Shifali@globalpathfinders.co.in">Shifali@globalpathfinders.co.in</a></p>
                            </div>
                        </div>
                        <div className="bg-neutral-100 shadow-xl my-3 md:my-0 flex justify-start rounded-2xl py-10 w-80 md:w-96">
                            <FontAwesomeIcon className="ml-6 md:ml-10 mr-2" icon={faPhone} size="3x" />
                            <div className="">
                                <h2 className="text-2xl font-semibold text-gray-700">Phone</h2>
                                <p className="text-gray-600"><a href="tel:+91 98916 21469">+91 98916 21469</a></p>
                            </div>
                        </div>
                    </div>
                    <div className='map'>
                        <iframe title="Global Pathfinders" src="https://maps.google.com/maps?hl=en&q=Global%20Pathfinders,%20Delhi%20Student%20career%20counseling%20office&t=&z=17&ie=UTF8&iwloc=B&output=embed" frameBorder={0} style={{ width: '100%', height: '100%' }} allowFullScreen />
                    </div>
                </div>
                <p className="text-base text-center mt-16 mb-2 text-blue-500">SEND MESSAGE</p>
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Ready to get started?</h2>
                <div className="bg-neutral-100 shadow-xl rounded-2xl p-8 w-full max-w-6xl">
                    <div className="mt-6">
                        {formStatus === 'success' ? (
                            <div className="text-center text-green-500">
                                {/* <h3 className="text-4xl font-bold mb-4">✓</h3> */}
                                <FaCheckCircle color='green-500' className='h-16 w-16 mx-auto mb-4' />
                                <p className='text-xl'>Thank you for contacting us! We will get back to you soon.</p>
                            </div>
                        ) : (
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-2">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-2">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                            placeholder="Your Email"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                            placeholder="Your Phone Number"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-2">Your Subject</label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                            placeholder="Your Subject"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Your Message</label>
                                    <textarea
                                        name="body"
                                        value={formData.body}
                                        onChange={handleChange}
                                        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        placeholder="Your Message"
                                        rows="5"
                                    ></textarea>
                                </div>
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold shadow-lg transform transition hover:scale-105 duration-300"
                                        disabled={formStatus === 'submitting'}
                                    >
                                        {formStatus === 'submitting' ? (
                                            <div className="flex items-center justify-center">
                                                <svg className="animate-spin mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C6.477 0 2 4.477 2 10h2zm2 5.291A7.964 7.964 0 014 12H2c0 3.281 1.662 6.15 4.291 7.709l1.418-1.418z"></path>
                                                </svg>
                                                Please wait a moment
                                            </div>
                                        ) : (
                                            'Send Message'
                                        )}
                                    </button>
                                </div>
                            </form>
                        )}
                        {formStatus === 'error' && (
                            <div className="text-center text-red-500 mt-4">
                                <p>{errorMessage}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
