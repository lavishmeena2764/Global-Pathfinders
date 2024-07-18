import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
// import event from '../../data/event';
import { Button } from 'flowbite-react';

const ManageEvents = () => {
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [inputPage, setInputPage] = useState(1);
  const eventsPerPage = 5;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editEvent, setEditEvent] = useState({ _id: null, title: '', caption: '', link: '', date: '', time: '', venue: '' });

  useEffect(() => {
    // Simulate fetching data from the backend
    const fetchEvents = async () => {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/event`);
      const data = await response.json();
      console.log(data.data);
      setEvents(data.data);
    };

    fetchEvents();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this event?');
    if (confirmDelete) {
      try {
        await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/event/${id}`);
        setEvents(events.filter((event) => event.id !== id));
        window.location.reload();
      } catch (error) {
        console.error('Error deleting event:', error);
      }
    }
  };

  const handleEdit = (event) => {
    setEditEvent(event);
    setModalIsOpen(true);
  };

  const handleUpdate = async () => {
    try {
      const res = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/event/update/${editEvent._id}`, editEvent);
      const updatedEvent = res.data;
      // console.log("updated event",res.data)
      setEvents(events.map((event) => (event._id === updatedEvent._id ? updatedEvent : event)));
      setModalIsOpen(false);
      window.location.reload();
      
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);
  const totalPages = Math.ceil(events.length / eventsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setInputPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setInputPage(currentPage - 1);
    }
  };

  const handleGoToPage = () => {
    if (inputPage >= 1 && inputPage <= totalPages) {
      setCurrentPage(inputPage);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditEvent({ ...editEvent, [name]: value });
  };

  return (
    <div className="container p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-indigo-900">Manage Events</h1>
      <ul className="space-y-4">
        {currentEvents.map((event) => (
          <li key={event._id} className="p-4 bg-white rounded shadow flex justify-between items-center">
            <img
              src={event.img}
              alt=""
              className="h-16 mr-4 rounded"
            />
            <div className="flex-1">
              <a href={`/event/${event.id}`} className="text-xl font-bold text-indigo-700">
                {event.title}
              </a>
              <p className="text-gray-700 mt-2 pr-8">{event.caption}</p>
            </div>
            <div>
              <button
                type="button"
                onClick={() => handleEdit(event)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2"
                data-toggle="modal" 
                data-target="#exampleModal" 
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(event._id)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-center mt-6 items-center">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="mx-1 px-3 py-1 rounded bg-gray-200 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <span className="mx-2 flex items-center">
          Page{' '}
          <input
            type="number"
            value={inputPage}
            onChange={(e) => setInputPage(Number(e.target.value))}
            className="w-12 mx-2 text-center border rounded"
            min="1"
            max={totalPages}
          />{' '}
          of {totalPages}
        </span>
        <button
          onClick={handleGoToPage}
          className="mx-1 px-3 py-1 rounded bg-gray-200 text-gray-700"
        >
          Go
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="mx-1 px-3 py-1 rounded bg-gray-200 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
      <Modal
       className='w-1/2 mx-auto bg-white p-8 px-16 mt-2'
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Edit Event"
      >
        <h2 className="text-xl font-bold mb-4">Edit Event</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="title" className="block mb-1 font-semibold">Title:</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              id="title"
              name="title"
              value={editEvent.title}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="link" className="block mb-1 font-semibold">Link:</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              id="link"
              name="link"
              value={editEvent.link}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="desc" className="block mb-1 font-semibold">Description:</label>
            <textarea
              className="w-full border rounded px-3 py-2"
              id="desc"
              name="caption"
              value={editEvent.caption}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block mb-1 font-semibold">Date:</label>
            <input
              type="date"
              className="w-full border rounded px-3 py-2"
              id="date"
              name="date"
              value={editEvent.date}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="time" className="block mb-1 font-semibold">Time:</label>
            <input
              type="time"
              className="w-full border rounded px-3 py-2"
              id="time"
              name="time"
              value={editEvent.time}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="venue" className="block mb-1 font-semibold">Venue:</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              id="venue"
              name="venue"
              value={editEvent.venue}
              onChange={handleChange}
            />
          </div>
        </form>
        <div className="flex justify-end">
          <button type="button" className="btn btn-secondary mr-2" onClick={() => setModalIsOpen(false)}>Close</button>
          <button type="button" className="btn btn-primary" onClick={handleUpdate}>Save</button>
        </div>
      </Modal>
    </div>
  );
};

export default ManageEvents;
