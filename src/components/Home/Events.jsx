import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/solid';

const EventsCarousel = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Simulate fetching data from the backend
    const fetchEvents = async () => {
      const response = await fetch(`http://localhost:4000/event`);
      const data = await response.json();
      console.log(data.data);
      setEvents(data.data);
    };

    fetchEvents();
  }, []);

  // Determine the settings based on the number of events
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <>
    {events.length>0?<div className="container mx-auto py-12">
      <h2 className="text-5xl text-gray-700 font-bold text-left mb-8">Upcoming Events</h2>
      {events.length < 4 ? (
        <div className="flex flex-wrap justify-start">
          {events.map((event) => (
            <div key={event._id} className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/3 event-card">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={event.img} alt={event.title} className="w-full h-48 object-cover" />
                <div className="p-6 relative">
                  <h3 className="text-xl font-semibold text-gray-800">{event.title}</h3>
                  <p className="text-gray-600 mt-2 caption">{event.caption}</p>
                  <div className="mt-4">
                    <p className="text-gray-600"><strong>Date:</strong> {event.date}</p>
                    <p className="text-gray-600"><strong>Time:</strong> {event.time}</p>
                    <p className="text-gray-600"><strong>Venue:</strong> {event.venue}</p>
                  </div>
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
                  >
                    Register Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Slider {...settings}>
          {events.map((event) => (
            <div key={event._id} className="p-4 event-card">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={event.img} alt={event.title} className="w-full h-48 object-cover" />
                <div className="p-6 relative">
                  <h3 className="text-xl font-semibold text-gray-800">{event.title}</h3>
                  <p className="text-gray-600 mt-2 caption">{event.caption}</p>
                  <div className="mt-4">
                    <p className="text-gray-600"><strong>Date:</strong> {event.date}</p>
                    <p className="text-gray-600"><strong>Time:</strong> {event.time}</p>
                    <p className="text-gray-600"><strong>Venue:</strong> {event.venue}</p>
                  </div>
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
                  >
                    Register Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>:<></>}
    </>
  );
};

const NextArrow = ({ onClick }) => {
  return (
    <div
      className="z-2 absolute top-1/2 right-4 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full cursor-pointer"
      onClick={onClick}
    >
      <ArrowRightIcon className="h-6 w-6" />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="z-2 absolute top-1/2 left-4 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full cursor-pointer"
      onClick={onClick}
    >
      <ArrowLeftIcon className="h-6 w-6" />
    </div>
  );
};

export default EventsCarousel;
