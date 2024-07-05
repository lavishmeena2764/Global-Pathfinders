// components/CallBackForm.js
import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const CallBackForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', phone: '' });
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error

  // Handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    try {
      const response = await fetch('http://localhost:4000/contact/callback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('success');
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-0 mb-8">
      {formStatus === 'success' ? (
        <div className="bg-green-500 pt-48 m-0 h-full p-12 text-white rounded-t-lg text-center align-center">
          <FaCheckCircle color="green-500" className="h-24 w-24 mx-auto mb-4" />
          <p className="text-xl flex flex-wrap">We will reach back to you within the <br /> next 24 hours</p>
        </div>
      ) : (
        <>
          <div className="bg-blue-500 m-0 p-12 text-white rounded-t-lg">
            <h3 className="text-4xl font-bold mb-4">Request a Call Back</h3>
            <p>Please fill your details and we will get back to you within 24hrs</p>
          </div>
          <form className="p-12" onSubmit={handleSubmit}>
            <div className="mb-6">
              <input
                type="text"
                id="name"
                placeholder="Your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-full py-3 px-5 focus:outline-none focus:border-blue-500 placeholder:text-lg"
              />
            </div>
            <div className="mb-6">
              <input
                type="text"
                id="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-full py-3 px-5 focus:outline-none focus:border-blue-500 placeholder:text-lg"
              />
            </div>
            <div className="mb-6">
              <input
                type="text"
                id="subject"
                placeholder="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-full py-3 px-5 focus:outline-none focus:border-blue-500 placeholder:text-lg"
              />
            </div>
            <div className="mb-6">
              <input
                type="text"
                id="phone"
                placeholder="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-full py-3 px-5 focus:outline-none focus:border-blue-500 placeholder:text-lg"
              />
            </div>
            <button
              type="submit"
              className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ${formStatus === 'submitting' && 'opacity-50 cursor-not-allowed'}`}
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
                'Submit'
              )}
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default CallBackForm;
