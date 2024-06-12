import React from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const Contact = () => {
    return (
        <>
            <Navbar />
            <div className="relative w-full h-64">
                <img src={"./images/contact.png"} alt="Description" class="absolute inset-0 w-full h-full object-cover" />
                <div className="flex bg-gray-800 bg-opacity-80 flex-col justify-center text-center h-full w-full absolute left-0 px-6">
                    <h1 className="text-white text-4xl font-bold">Contact Us</h1>
                </div>
            </div>
            <div className="min-h-screen flex flex-col items-center justify-center p-6 mb-20">
                {/* <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">Contact Us</h1> */}
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
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Name</label>
                                    <input
                                        type="text"
                                        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Email</label>
                                    <input
                                        type="email"
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
                                        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        placeholder="Your Phone Number"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Your Subject</label>
                                    <input
                                        type="text"
                                        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        placeholder="Your Subject"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Your Message</label>
                                <textarea
                                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    placeholder="Your Message"
                                    rows="5"
                                ></textarea>
                            </div>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold shadow-lg transform transition hover:scale-105 duration-300"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
