import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Layout/Navbar'
import Footer from '../components/Layout/Footer'

const Pagenotfound = () => {
  return (
    <>
        <Navbar />
        <div className='pnf'>
          <h1 className='pnf-title'>404</h1>
          <h2 className='pnf-heading'>Oops ! Page Not Found</h2>
          <Link to="/" className='pnf-btn'>
            Go Back
          </Link>
        </div>
        <Footer />
    </>
  )
}

export default Pagenotfound