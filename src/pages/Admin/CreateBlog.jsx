import React, { useState } from 'react';
import { Alert, Button, FileInput, TextInput } from 'flowbite-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CreateBlog = () => {
  const [formData, setFormData] = useState({ title: '', content: '', image: null });
  const [publishError, setPublishError] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const res = await fetch('/api/post/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        setPublishError(data.message);
        return;
      }
      if (res.ok) {
        setPublishError(null);
        // Navigate to the created post or show a success message
      }
    } catch (error) {
      setPublishError('Something went wrong');
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
        </div>
        <ReactQuill
          theme="snow"
          placeholder="Write something..."
          className="h-72 mb-12 text-2xl"
          required
          onChange={(value) => setFormData({ ...formData, content: value })}
        />
        <div className="flex justify-center">
          <Button
            type="submit"
            gradientDuoTone="purpleToPink"
            className="py-2 text-xl btn btn-primary"
          >
            Publish
          </Button>
        </div>
        {publishError && <Alert className="mt-5" color="failure">{publishError}</Alert>}
      </form>
    </div>
  );
};

export default CreateBlog;
