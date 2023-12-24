
import React, { useState,useEffect } from 'react';
import Logo from '../assets/Logo.png'


export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        console.log(isOpen);
      setIsOpen(!isOpen);
    };
    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check the scroll position and update isScrolled state
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`p-4 pt-8 fixed left-0 right-0 top-0 z-20 ${
      isScrolled ? 'bg-white' : 'bg-transparent'
    }`}>
    <div className="container mx-auto flex items-center justify-between lg:justify-evenly">
      <a href="/" className="ont-bold text-xl"><img style={{height:"30px"}} src={Logo} alt=""  /></a>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden focus:outline-none"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-20 items-center">
        <a href="#" className="">Home</a>
        <a href="#" className="">About</a>
        <a href="#" className="">Services</a>
        <a href="#" className="">Contact</a>
      
          <button> Login </button>
          <button className=' outline-2 outline outline-gray-500 rounded-sm pl-2 pr-2 pt-1 pb-1 '> Sign-up </button>

      </div>
    

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 right-4 bg-white   p-4 rounded">
          <a href="#" className="block py-2">Home</a>
          <a href="#" className="block py-2">About</a>
          <a href="#" className="block py-2">Services</a>
          <a href="#" className="block py-2">Contact</a>
          <button> Sign-up </button>
          <button> Login </button>
        </div>
      )}
    </div>
  </nav>
);
}
