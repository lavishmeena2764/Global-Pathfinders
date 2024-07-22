import React, { useState } from 'react';
import { Alert, Button, FileInput, Spinner } from 'flowbite-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';

const CreateBlog = () => {
  const [formData, setFormData] = useState({ title: '', body: '', image: null });
  const [publishError, setPublishError] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const modules = {
    toolbar: {
      container: [
        [{ 'header': '1' }, { 'header': '2' }, { 'header': '3' }, { 'font': [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image', 'video'],
        ['clean']
      ],
    },
  };

  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
  ];

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPublishError(null); // Clear any previous error message
    setIsLoading(true); // Show loader
    try {
      console.log('Submitting form data:', formData);
      const resp = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/blog/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Response from server:', resp);
      if (resp.data.blog) {
        alert('Blog published successfully!');
        window.location.reload();
      } else {
        alert("Error Publishing Blog at the moment. \nPlease try after some time");
      }
    } catch (error) {
      alert("Error Publishing Blog!!");
      console.error('Error publishing post:', error);
      setPublishError('Something went wrong');
    } finally {
      setIsLoading(false); // Hide loader
    }
  };

  return (
    <div className="container p-8 max-w-4xl mx-auto min-h-screen bg-gray-50">
      <h1 className="text-center text-4xl my-10 font-semibold text-indigo-900">Create a Post</h1>
      <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-8 sm:flex-row justify-between">
          <input
            type="text"
            placeholder="Title"
            required
            id="title"
            className="flex-1 p-2 text-lg border border-gray-300 rounded"
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-8">
          <div className="relative mb-4 items-center justify-center">
            <FileInput onChange={handleFileChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
            <div className="bg-blue-500 text-white text-center py-2 px-4 rounded cursor-pointer">
              Choose a file
            </div>
            {imagePreview && (
              <div className="mt-4">
                <img src={imagePreview} alt="Upload Preview" className="w-full h-auto rounded" />
              </div>
            )}
          </div>
        </div>
        <ReactQuill
          theme="snow"
          modules={modules}
          formats={formats}
          placeholder="Write something..."
          className="h-72 mb-12 text-2xl"
          required
          onChange={(value) => setFormData({ ...formData, body: value })}
        />
        <div className="flex justify-center">
          <Button
            type="submit"
            gradientDuoTone="purpleToPink"
            className="py-2 text-xl btn btn-primary"
            disabled={isLoading}
          >
            {isLoading ? <Spinner /> : 'Publish'}
          </Button>
        </div>
        {publishError && <Alert color="red">{publishError}</Alert>}
      </form>
    </div>
  );
};

export default CreateBlog;
