import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import event from '../../data/event';
import { Button } from 'flowbite-react';

const ManageEvents = () => {
  const [events, setEvents] = useState(event);
  const [currentPage, setCurrentPage] = useState(1);
  const [inputPage, setInputPage] = useState(1);
  const eventsPerPage = 5;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editEvent, setEditEvent] = useState({ id: null, title: '', description: '', link: '' });

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await axios.get('/api/events');
      setEvents(res.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this event?');
    if (confirmDelete) {
      try {
        await axios.delete(`/api/events/${id}`);
        setEvents(events.filter((event) => event.id !== id));
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
      const res = await axios.put(`/api/events/${editEvent.id}`, editEvent);
      const updatedEvent = res.data;
      setEvents(events.map((event) => (event.id === updatedEvent.id ? updatedEvent : event)));
      setModalIsOpen(false);
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
          <li key={event.id} className="p-4 bg-white rounded shadow flex justify-between items-center">
            <img
              src={`https://example.com/${event.image}`}
              alt=""
              className="w-16 h-16 mr-4 rounded"
            />
            <div className="flex-1">
              <a href={`/event/${event.id}`} className="text-xl font-bold text-indigo-700">
                {event.title}
              </a>
              <p className="text-gray-700 mt-2">{event.description.slice(0, 50)}...</p>
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
                onClick={() => handleDelete(event.id)}
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
    <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title text-xl" id="exampleModalLabel"><b>Edit Event</b></h1>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div className="modal-body">
      <form>
          <div className="form-group">
            <label htmlFor="title" className="col-form-label">Title:</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={editEvent.title}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="link" className="col-form-label">Link:</label>
            <input
              type="text"
              className="form-control"
              id="link"
              name="link"
              value={editEvent.link}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="desc" className="col-form-label">Description:</label>
            <textarea
              className="form-control"
              id="desc"
              name="description"
              value={editEvent.description}
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={() => setModalIsOpen(false)}>Close</button>
          <button type="button" className="btn btn-primary" onClick={handleUpdate}>Save</button>
        </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default ManageEvents;
