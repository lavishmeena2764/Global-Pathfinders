import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios'; // Import Axios for API calls
import { Button, FileInput, TextInput } from 'flowbite-react';

const CreateEvent = () => {
    const [formData, setFormData] = useState({ 
        title: '', 
        caption: '', 
        image: null, 
        link: '', 
        date: '', 
        time: '', 
        venue: '' 
    });
    const [imagePreview, setImagePreview] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(formData)
            const { data } = await axios.post('http://localhost:4000/event/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            
            alert("Event uploaded Successfully");
            window.location.reload();
        } catch (error) {
            alert(error.response.data.message);
            console.error('Error creating event:', error);
            // Handle error as needed
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({ ...formData, image: file });
            setImagePreview(URL.createObjectURL(file));
        } else {
            setImagePreview(null);
        }
    };

    return (
        <div className="container flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
                <h2 className="text-2xl font-bold mb-6 text-center">Create Event</h2>
                <form onSubmit={handleSubmit}>
                    <div className="relative mb-4 items-center justify-center">
                        <input
                            type="file"
                            onChange={handleFileChange}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <div className="bg-blue-500 text-white text-center py-2 px-4 rounded cursor-pointer">
                            Choose a file
                        </div>
                        {imagePreview && (
                            <div className="mt-4">
                                <img src={imagePreview} alt="Image Preview" className="w-full h-auto rounded" />
                            </div>
                        )}
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Title"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            required
                            className="w-full p-2 text-lg border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <textarea
                            placeholder="Description"
                            value={formData.caption}
                            onChange={(e) => setFormData({ ...formData, caption: e.target.value })}
                            required
                            className="w-full p-2 text-lg border rounded"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <input
                            type="date"
                            placeholder="Date"
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            required
                            className="w-full p-2 text-lg border rounded"
                        />
                        <input
                            type="time"
                            placeholder="Time"
                            value={formData.time}
                            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                            required
                            className="w-full p-2 text-lg border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Venue"
                            value={formData.venue}
                            onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                            required
                            className="w-full p-2 text-lg border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="url"
                            placeholder="Link"
                            value={formData.link}
                            onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                            className="w-full p-2 text-lg border rounded"
                        />
                    </div>
                    <div className="flex justify-center">
                        <Button type="submit" className="btn btn-primary">
                            Publish
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateEvent;
