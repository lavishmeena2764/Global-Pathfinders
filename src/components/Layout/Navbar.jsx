import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

// import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) { // Adjust the value to your needs
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const [nav, setNav] = useState(false);
    const navItems = [
        { id: 1, text: "Home", url: "http://localhost:3000/" },
        { id: 2, text: "About Us", url: "http://localhost:3000/about" },
        { id: 3, text: "Why Us", url: "http://localhost:3000/why-us" },
        { id: 4, text: "Programs", url: "http://localhost:3000/programs" },
        { id: 5, text: "Blogs", url: "http://localhost:3000/blog" },
        { id: 6, text: "Contact Us", url: "http://localhost:3000/contact" },
    ];
    const handleNav = () => {
        setNav(!nav);
    };

    // const navigate = useNavigate();
    // function handleLogout() {
    //     localStorage.clear("token");
    //     navigate("/login")
    // }
    return (
        <>

            <div className="bg-gray-800 p-4">
                <nav className="flex justify-center md:justify-between items-center mx-3 flex-wrap">
                    <div className="text-white flex flex-wrap">
                        <span className="mx-6 text-base"><FontAwesomeIcon icon={faPhone} /> <a href="tel:+91 98916 21469">+91 98916 21469</a></span>
                        <span className='ml-6 text-base'><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:admin@globalpathfinders.co.in">
                            admin@globalpathfinders.co.in
                        </a></span>
                    </div>
                    <div className="text-white flex space-x-4" style={{marginTop:'0px'}}>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} size='xl' />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} size='xl' />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} size='xl' />
                        </a>
                    </div>
                </nav>
            </div>

            <nav className={`w-full flex justify-between items-center h-24 mx-auto px-4 text-medBlue-200 bg-white ${isSticky ? 'fixed top-0 left-0 w-full z-10' : ''}`}>

                <div className="flex items-center">
                    <a href='/'> <img
                        src={`./images/logo.png`}
                        alt="Global Pathfinders"
                        width={250}
                        className="ml-1 lg:ml-10 "
                    /></a>
                </div>
                {/* Desktop Navigation */}
                <ul className="hidden md:flex mr-1">
                    {navItems.map((item) => (
                        <li
                            key={item.id}
                            className="p-4 rounded-xl m-2 cursor-pointer duration-300 hover:text-blue-500 text-lg font-semibold"
                        >
                            <Link to={`${item.url}`} >{item.text}</Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Navigation Icon */}
                <div onClick={handleNav} className="block md:hidden mr-2">
                    {nav ? (
                        <AiOutlineClose
                            size={20}
                            style={{ borderColor: "black", border: 2 }}
                        />
                    ) : (
                        <AiOutlineMenu size={20} />
                    )}
                </div>

                {/* Mobile Navigation Menu */}
                <ul
                    className={
                        nav
                            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500 z-10"
                            : "ease-in-out w-[100%] duration-500 fixed top-0 bottom-0 left-[-100%]"
                    }
                >
                    {/* Mobile Logo */}

                    <div className="flex">
                    <a href='/'> <img
                            src={`./images/logo.png`}
                            alt=""
                            // height={50}
                            width={200}
                            className="m-3"
                        /></a>
                    </div>

                    {/* Mobile Navigation Items */}
                    <div className="my-5">
                        {navItems.map((item) => (
                            <li
                                key={item.id}
                                className="py-3 border-b px-5 rounded-xl duration-300 hover:text-white cursor-pointer border-stone-300 text-medBlue-200"
                            >
                                <a href={item.url}>{item.text}</a>
                            </li>
                        ))}
                    </div>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
