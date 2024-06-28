import React, { useEffect, useState } from 'react';
import axios from 'axios';
import blog from '../data/blog';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Layout/PageHeader';
import Footer from '../components/Layout/Footer';

const Blogs = () => {
  const [blogs, setBlogs] = useState(blog);

  useEffect(() => {
    // Fetch blogs from the server
    const fetchBlogs = async () => {
      try {
        const res = await axios.get('/api/blogs'); // Adjust the API endpoint as needed
        setBlogs(res.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <>
    <Navbar />
    <PageHeader title="Blogs" />
      <h1 className="text-6xl font-bold my-12 text-indigo-900 text-center">Latest Blogs</h1>
      <div className="container p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {blogs.map((blog) => (
          <a href={`/blog/${blog.titleHash}`}>
            <div key={blog.id} className="group bg-white rounded shadow p-4 hover:scale-105 hover:duration-500">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full object-cover rounded mb-4"
            />
            <h2 className="text-2xl font-bold text-indigo-900 group-hover:text-blue-700">{blog.title}</h2>
            <p className='text-blue-500 mt-2'>Read More...</p>
          </div>
          </a>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Blogs;
