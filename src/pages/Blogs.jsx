import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Layout/PageHeader';
import Footer from '../components/Layout/Footer';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    // Fetch blogs from the server
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/blog`); // Adjust the API endpoint as needed
        setBlogs(res.data.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };
    fetchBlogs();
  }, []);

  // Calculate the index range for current page
  const indexOfLastBlog = currentPage * itemsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - itemsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate total number of pages
  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  return (
    <>
      <Navbar />
      <PageHeader title="Blogs" />
      <h1 className="text-6xl font-bold my-12 text-indigo-900 text-center">Latest Blogs</h1>
      <div className="container bg-gray-100 min-h-screen p-24">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {currentBlogs.map((blog) => (
            <a href={`/blog/${blog.titleHash}`} key={blog.id} className="hover:no-underline">
              <div className="group bg-white rounded shadow p-4 hover:scale-105 hover:duration-500">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full object-cover rounded mb-4"
                />
                <h2 className="text-2xl font-bold text-indigo-900 group-hover:text-blue-700">{blog.title}</h2>
                <p className="text-blue-500 mt-2">Read More...</p>
              </div>
            </a>
          ))}
        </div>
        
        {/* Pagination Controls */}
        <div className="flex justify-center mt-8">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`mx-1 px-4 py-2 rounded-full ${
                currentPage === index + 1
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-blue-500 border border-blue-500'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
