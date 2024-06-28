import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faCheck } from '@fortawesome/free-solid-svg-icons';

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
      setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is the cost of your counseling services?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      question: 'How can I schedule a counseling session?',
      answer: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    },
    // Add more FAQ items as needed
  ];

  return (
    <div className="accordion">
      <h2 className="text-3xl font-bold mb-4 text-indigo-900">FAQs</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <button
            className={`flex justify-between w-full px-4 py-2 text-lg font-medium text-left focus:outline-none transition-colors duration-300 ${openIndex === index ? 'text-blue-500' : 'text-indigo-900'
              }`}
            onClick={() => handleToggle(index)}
          >
            <span className='text-xl'><b>{faq.question}</b></span>
            <FontAwesomeIcon
              icon={openIndex === index ? faMinus : faPlus}
              className={`w-6 h-6 rounded-full p-1 ${openIndex === index ? 'bg-blue-500 text-white' : 'text-indigo-900'
                }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-screen' : 'max-h-0'
              }`}
            style={{ transitionProperty: 'max-height' }}
          >
            <div className="px-4 pt-4 pb-2 text-lg text-gray-800">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
