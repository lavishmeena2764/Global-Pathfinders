import React from 'react';

const CounselingHelp = (props) => {

  return (
    <section className="bg-gradient-to-r from-gray-100 to-gray-200 py-12">
      <div className="container mx-auto px-6 lg:px-20">
      <h2 className="text-5xl text-gray-700 font-bold text-center mb-8">{props.head}</h2>
        <p className="text-lg text-gray-600 text-center mb-8">
          {props.text}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {props.services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {service.icon}
                <h3 className="text-xl font-semibold text-gray-800 ml-4">{service.title}</h3>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="/contact">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg">
              Consult Now
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CounselingHelp;
