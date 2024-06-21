import React, { useEffect, useState } from 'react';
import blog from '../../data/blogs';

const ManageBlogs = () => {
  const [blogs, setBlogs] = useState(blog);
  const [currentPage, setCurrentPage] = useState(1);
  const [inputPage, setInputPage] = useState(1);
  const blogsPerPage = 5;

  useEffect(() => {
    // Fetch all blogs from the server
    const fetchBlogs = async () => {
      const res = await fetch('/api/blogs');
      const data = await res.json();
      setBlogs(data);
    };
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this blog?');
    if (confirmDelete) {
      // Delete blog by id
      const res = await fetch(`/api/blog/${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        setBlogs(blogs.filter((blog) => blog.id !== id));
      }
    }
  };

  // Pagination logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

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

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-indigo-900">Manage Blogs</h1>
      <ul className="space-y-4">
        {currentBlogs.map((blog) => (
          <li key={blog.id} className="p-4 bg-white rounded shadow flex justify-between items-center">
            <img src="https://globalpathfinders.co.in/wp-content/uploads/2023/06/blog-img4.jpg" alt="" className="w-16 h-16 mr-4 rounded" />
            <div className="flex-1">
              <a href={`/blog/${blog.id}`} className="text-xl font-bold text-indigo-700">{blog.title}</a>
              <p className="text-gray-700 mt-2">{blog.content.split(' ').slice(0, 10).join(' ')}...</p>
            </div>
            <button
              onClick={() => handleDelete(blog.id)}
              className="ml-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
            >
              Delete
            </button>
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
    </div>
  );
};

export default ManageBlogs;
