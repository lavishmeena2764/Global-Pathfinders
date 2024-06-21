import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Dashboard = () => (
  <div className="flex min-h-screen bg-gray-100">
    <aside className="w-64 bg-indigo-900 text-white">
      <div className="flex flex-col items-center py-6">
        <a href="/"><img src="https://globalpathfinders.co.in/assets/images/logo.png" alt="Global Pathfinders Logo" className="w-full mb-4" /></a>
        <h1 className="text-xl font-bold">Dashboard</h1>
      </div>
      <nav className="p-4 space-y-4">
        <Link to="create-blog" className="block px-4 py-2 rounded hover:bg-indigo-300">Create Blog</Link>
        <Link to="manage-blogs" className="block px-4 py-2 rounded hover:bg-indigo-300">Manage Blogs</Link>
        <Link to="contact-queries" className="block px-4 py-2 rounded hover:bg-indigo-300">Contact Queries</Link>
        <Link to="create-event" className="block px-4 py-2 rounded hover:bg-indigo-300">Create Event</Link>
        <Link to="manage-events" className="block px-4 py-2 rounded hover:bg-indigo-300">Manage Events</Link>
      </nav>
    </aside>
    <main className="flex-1 p-4 flex flex-col items-center justify-center">
      <div className="text-center">
        <img src="https://globalpathfinders.co.in/assets/images/logo.png" alt="Global Pathfinders Logo" className="h-36 mx-auto mt-8" />
        <h1 className="text-6xl font-extrabold text-indigo-900 mb-4">Admin Portal</h1>
      </div>
      <Outlet />
    </main>
  </div>
);

export default Dashboard;
