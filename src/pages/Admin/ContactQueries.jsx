import React, { useEffect, useState } from 'react';
import contact from '../../data/contacts';

const ContactQueries = () => {
  const [queries, setQueries] = useState(contact);
  const [currentPage, setCurrentPage] = useState(1);
  const [inputPage, setInputPage] = useState(1);
  const queriesPerPage = 7;

  useEffect(() => {
    // Fetch all contact queries from the server
    const fetchQueries = async () => {
      const res = await fetch('/api/contact-queries');
      const data = await res.json();
      setQueries(data);
    };
    fetchQueries();
  }, []);

  // Pagination logic
  const indexOfLastQuery = currentPage * queriesPerPage;
  const indexOfFirstQuery = indexOfLastQuery - queriesPerPage;
  const currentQueries = queries.slice(indexOfFirstQuery, indexOfLastQuery);
  const totalPages = Math.ceil(queries.length / queriesPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleGoToPage = () => {
    if (inputPage >= 1 && inputPage <= totalPages) {
      setCurrentPage(inputPage);
    }
  };

  const handlePageInputChange = (e) => {
    setInputPage(Number(e.target.value));
  };

  return (
    <div className="container p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-indigo-900">Contact Queries</h1>
      <table className="min-w-full bg-white rounded-lg shadow">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Phone No.</th>
            <th className="py-2 px-4 border-b">Subject</th>
            <th className="py-2 px-4 border-b">Message</th>
          </tr>
        </thead>
        <tbody>
          {currentQueries.map((query) => (
            <tr key={query.id}>
              <td className="py-2 px-4 border-b">{query.name}</td>
              <td className="py-2 px-4 border-b">{query.email}</td>
              <td className="py-2 px-4 border-b">{query.phone}</td>
              <td className="py-2 px-4 border-b">{query.subject}</td>
              <td className="py-2 px-4 border-b">{query.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-6 items-center">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="mx-1 px-3 py-1 rounded bg-blue-500 text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <span className="mx-2">
          Page{' '}
          <input
            type="number"
            value={inputPage}
            onChange={handlePageInputChange}
            className="w-12 text-center border rounded"
            min="1"
            max={totalPages}
          />{' '}
          of {totalPages}
          <button
            onClick={handleGoToPage}
            className="ml-2 px-3 py-1 rounded bg-gray-200 text-gray-700"
          >
            Go
          </button>
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="mx-1 px-3 py-1 rounded bg-blue-500 text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ContactQueries;
