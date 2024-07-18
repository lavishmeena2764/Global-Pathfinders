import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Layout/PageHeader';
import Footer from '../components/Layout/Footer';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Blog = () => {
  return (
    <>
      <Navbar />
      <BlogTemp />
      <Footer />
    </>
  );
};

const BlogTemp = () => {
  const navigate = useNavigate();
  const { titleHash } = useParams();
  const [otherBlogs, setOtherBlogs] = useState([]);
  const [blog, setBlog] = useState({});

  useEffect(() => {
    // Function to fetch a specific blog by titleHash
    const fetchBlog = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/blog/${titleHash}`);
        const data = await response.json();
        if (data.data.length === 0) {
          return navigate('/page-not-found');
        }
        setBlog(data.data[0]);
      } catch (error) {
        console.error("Error fetching the blog:", error);
      }
    };

    // Function to fetch all blogs for the Latest Blogs section
    const fetchAllBlogs = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/blog`);
        const data = await response.json();
        // Filter out the current blog from the latest blogs
        const filteredBlogs = data.data.filter(blog => blog.titleHash !== titleHash);
        setOtherBlogs(filteredBlogs.slice(0, 7));
      } catch (error) {
        console.error("Error fetching the blogs:", error);
      }
    };

    fetchBlog();
    fetchAllBlogs();
  }, [titleHash, navigate]);

  if (!blog.title) return <div className='text-2xl m-8 h-64'>Loading...</div>;

  return (
    <>
      <PageHeader title={`Blog : ${blog.title}`} />
      <div className="flex flex-col lg:flex-row p-6 bg-gray-100 min-h-screen">
        <div className="w-full lg:w-2/3 p-6">
          <img src={blog.img} alt={blog.title} className="w-full ml-3 object-cover rounded mb-4" />
          <h1 className="text-4xl font-bold ml-2 mb-4 text-indigo-900">{blog.title}</h1>
          <div className=''><div className="text-gray-700 mb-4 ql-editor" style={{lineHeight:'40px'}} dangerouslySetInnerHTML={{ __html: blog.body }}></div></div>
          <a href="/contact"><button className="px-4 py-2 text-lg bg-blue-500 text-white rounded hover:bg-blue-700">Consult Now</button></a>
        </div>
        <div className="w-full lg:w-1/3 lg:ml-6 bg-white rounded shadow p-4 border border-gray-300 h-fit sticky top-0">
          <div className='mx-12'>
          <h2 className="text-2xl font-bold mb-2 text-indigo-900">Latest Blogs</h2>
          {otherBlogs.map(blog => (
            <div key={blog.titleHash} className="mb-2">
              <a href={`/blog/${blog.titleHash}`}>
                <img src={blog.img} alt={blog.title} className="w-full h-32 object-cover rounded mb-2" />
                <h3 className="text-lg font-bold text-indigo-700">{blog.title}</h3>
              </a>
            </div>
          ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
