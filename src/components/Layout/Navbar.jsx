import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
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
        { id: 1, text: "Home", url: "/" },
        { id: 2, text: "About", url: "/about" },
        { id: 3, text: "Why Us", url: "/why-us" },
        { id: 4, text: "Programs", url: "/programs" },
        { id: 5, text: "Blogs", url: "/blog" },
        { id: 6, text: "Contact Us", url: "/contact" },
    ];

    const dropdownItems = [
        { id: 1, text: "Study in USA", url: "/study-in-usa" },
        { id: 2, text: "Study in Singapore", url: "/study-in-singapore" },
        { id: 3, text: "Study in UK", url: "/study-in-uk" },
    ];

    const handleNav = () => {
        setNav(!nav);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <>
            <div className="bg-gray-800 p-4">
                <nav className="flex justify-center md:justify-between items-center mx-3 flex-wrap">
                    <div className="text-white flex flex-wrap">
                        <span className="mx-6 text-base"><FontAwesomeIcon icon={faPhone} /> <a href="tel:+91 98916 21469" style={{textDecoration:'none', color:'white'}}>+91 98916 21469</a></span>
                        <span className='ml-6 text-base'><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:admin@globalpathfinders.co.in" style={{textDecoration:'none', color:'white'}}>
                            admin@globalpathfinders.co.in
                        </a></span>
                    </div>
                    <div className="text-white flex space-x-4" style={{ marginTop: '0px' }}>
                        <a href="https://www.facebook.com/profile.php?id=100090796356340" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'white'}}>
                            <FontAwesomeIcon icon={faFacebook} size='xl' />
                        </a>
                        <a href="https://www.linkedin.com/company/global-pathfinders/" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'white'}}>
                            <FontAwesomeIcon icon={faLinkedin} size='xl' />
                        </a>
                        <a href="https://www.instagram.com/globalpathfinders" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'white'}}>
                            <FontAwesomeIcon icon={faInstagram} size='xl' />
                        </a>
                        <a href="https://www.youtube.com/@GlobalPathfinders" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'white'}}>
                            <FontAwesomeIcon icon={faYoutube} size='xl' />
                        </a>
                    </div>
                </nav>
            </div>

            <nav className={`w-full flex justify-between items-center h-24 mx-auto px-4 text-medBlue-200 bg-white ${isSticky ? 'fixed top-0 left-0 w-full z-20' : ''}`}>
                <div className="flex items-center">
                    <a href='/'> <img
                        src={`/images/logo.png`}
                        alt="Global Pathfinders"
                        width={250}
                        className="ml-1 lg:ml-10 "
                    /></a>
                </div>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex mr-1">
                    {navItems.slice(0, 3).map((item) => (
                        <li
                            key={item.id}
                            className="p-4 rounded-xl m-2 cursor-pointer duration-300 hover:text-blue-500 text-lg font-semibold"
                        >
                            <Link to={item.url}>{item.text}</Link>
                        </li>
                    ))}
                    <li className="relative p-4 rounded-xl m-2 cursor-pointer duration-300 hover:text-blue-500 text-lg font-semibold">
                        <span onClick={toggleDropdown} className="cursor-pointer">Study Abroad</span>
                        {dropdownOpen && (
                            <ul className="absolute top-full left-0 bg-white shadow-lg z-30 mt-2">
                                {dropdownItems.map((item) => (
                                    <li key={item.id} className="px-4 py-2 hover:bg-gray-200">
                                        <Link to={item.url}>{item.text}</Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                    {navItems.slice(3).map((item) => (
                        <li
                            key={item.id}
                            className="p-4 rounded-xl m-2 cursor-pointer duration-300 hover:text-blue-500 text-lg font-semibold"
                        >
                            <Link to={item.url}>{item.text}</Link>
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
                    <div className="flex">
                        <a href='/'> <img
                            src={`/images/logo.png`}
                            alt=""
                            width={200}
                            className="m-3"
                        /></a>
                    </div>

                    <div className="my-2">
                    {navItems.slice(0, 3).map((item) => (
                        <li
                            key={item.id}
                            className="p-4 rounded-xl m-2 my-0 cursor-pointer duration-300 hover:text-blue-500 text-lg font-semibold"
                        >
                            <Link to={item.url}>{item.text}</Link>
                        </li>
                    ))}
                    <li className="relative p-4 rounded-xl m-2 cursor-pointer duration-300 hover:text-blue-500 text-lg font-semibold">
                        <span onClick={toggleDropdown} className="cursor-pointer">Study Abroad</span>
                        {dropdownOpen && (
                            <ul className="absolute top-full left-0 bg-white shadow-lg z-30 mt-2">
                                {dropdownItems.map((item) => (
                                    <li key={item.id} className="px-4 py-2 hover:bg-gray-200">
                                        <Link to={item.url}>{item.text}</Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                    {navItems.slice(3).map((item) => (
                        <li
                            key={item.id}
                            className="p-4 rounded-xl m-2 cursor-pointer duration-300 hover:text-blue-500 text-lg font-semibold"
                        >
                            <Link to={item.url}>{item.text}</Link>
                        </li>
                    ))}
                    </div>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
