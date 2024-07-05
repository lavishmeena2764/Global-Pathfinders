import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Dashboard = () => (
  <div className="flex min-h-screen bg-gray-100">
    <aside className="w-64 bg-indigo-900 text-white">
      <div className="flex flex-col items-center py-6">
        <a href="/"><img src="/images/logo.png" alt="Global Pathfinders Logo" className="w-full mb-4" /></a>
        <h1 className="text-xl font-bold">Dashboard</h1>
      </div>
      <nav className="p-4 space-y-4">
        <Link to="create-blog" className="block px-4 py-2 rounded hover:bg-indigo-300">Create Blog</Link>
        <Link to="manage-blogs" className="block px-4 py-2 rounded hover:bg-indigo-300">Manage Blogs</Link>
        <Link to="create-event" className="block px-4 py-2 rounded hover:bg-indigo-300">Create Event</Link>
        <Link to="manage-events" className="block px-4 py-2 rounded hover:bg-indigo-300">Manage Events</Link>
        <Link to="contact-queries" className="block px-4 py-2 rounded hover:bg-indigo-300">Contact Queries</Link>
        <Link to="callback-queries" className="block px-4 py-2 rounded hover:bg-indigo-300">CallBack Queries</Link>
      </nav>
    </aside>
    <main className="flex-1 p-4 flex flex-col items-center justify-center">
    <h2 className="text-5xl text-gray-700 font-bold text-left mb-8">Welcome to Global Pathfinders Admin Portal</h2>
    <Outlet />
    </main>
  </div>
);

export default Dashboard;
