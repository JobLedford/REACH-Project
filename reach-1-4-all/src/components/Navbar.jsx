import React, { useState } from 'react';
import {
    FaBars,
    FaTimes,
    FaTwitter,
    FaLinkedin,
    FaFacebook,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';

function Navbar() {

    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return(
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-gradient-to-r from-bg-gradient-to-r from-[#3E8DE3] to-[#143AA2] text-gray-300">
            <div>
                <h1 className="font-thin text-[#04060D] cursor-pointer text-2xl italic font-serif">
                    <Link to="home"
                    smooth={true} 
                    duration={500}
                    >
                    REACH INC
                    </Link>
                </h1>
            </div>
            {/* Menu */}
            <ul className="hidden md:flex gap-x-0">
                <li>
                    <Link to="home" 
                        smooth={true} 
                        duration={500}
                        className="hover:bg-[#3E8DE3] text-[#04060D] px-3 py-5 rounded-md"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500} className="hover:bg-[#3E8DE3] px-3 text-[#04060D] py-5 rounded-md">
                        About
                    </Link>
                </li>
                <li>
                    <Link to="pictures" smooth={true} duration={500} className="hover:bg-[#3E8DE3] text-[#04060D] px-3 py-5 rounded-md">
                        Pictures
                    </Link>
                </li>
                <li>
                    <Link to="donation" smooth={true} duration={500} className="hover:bg-[#3E8DE3] text-[#04060D] px-3 py-5 rounded-md">
                        Donate
                    </Link>
                </li>
                <li>
                    <Link to="checkpoint" smooth={true} duration={500} className="hover:bg-[#3E8DE3] text-[#04060D] px-3 py-5 rounded-md">
                        Contact
                    </Link>
                </li>
            </ul>
            {/* Hamburger */}
            <div onClick={handleClick} className="cursor-pointer text-[#3E8DE3] text-5xl md:hidden z-10">
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            {/* Mobile Menu */}
            <ul
                className={
                    !nav 
                        ? 'hidden' 
                        : 'absolute top-0 left-0 w-full h-screen bg-[#143AA2] flex flex-col justify-center items-center'
                }
            >
                <li className="py-6 text-4xl text-[#3E8DE3]">
                    <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className="py-6 text-4xl text-[#3E8DE3]">
                    {' '}
                    <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl text-[#3E8DE3]'>
                    {' '}
                    <Link onClick={handleClick} to='pictures' smooth={true} duration={500}>
                        Pictures
                    </Link>
                </li>
                <li className='py-6 text-4xl text-[#3E8DE3]'>
                    {' '}
                    <Link onClick={handleClick} to='donation' smooth={true} duration={500}>
                        Donate
                    </Link>
                </li>
                <li className='py-6 text-4xl text-[#3E8DE3]'>
                    {' '}
                    <Link onClick={handleClick} to='checkpoint' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
            {/* Social icons */}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800">
                        <a
                            className="flex justify-between items-center w-full text-gray-300"
                            href="https://www.facebook.com/profile.php?id=100094138809691"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            FaceBook <FaFacebook size={30} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
                        <a
                            className="flex justify-between items-center w-full text-gray-300"
                            href="https://twitter.com/REACH14AllOrg"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Twitter <FaTwitter size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href="mailto:r.e.a.c.h.14all@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://www.linkedin.com/in/reach-organization-005a69280/'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn <FaLinkedin size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;