// Navbar.js
import React from 'react';
import Button from '@mui/material/Button';
import {Outlet,  Link } from "react-router-dom";

const NotAuthNavbar = () => {
  return (
    <nav className="bg-gray-800 w-full fixed top-0 left-0">
      <div className="container mx-auto p-4 px-10 flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-white text-2xl font-bold">
          <a href="/">MyLogo</a>
        </div>

        {/* Links Section */}
        <ul className="flex space-x-6">
          <li>
            <a href="/" className="text-white hover:text-gray-400">Home</a>
          </li>
          <li>
            <a href="/about" className="text-white hover:text-gray-400">About</a>
          </li>
          <li>
            <a href="/services" className="text-white hover:text-gray-400">Services</a>
          </li>
          <li>
            <a href="/contact" className="text-white hover:text-gray-400">Contact</a>
          </li>
        </ul>

        {/* Material-UI Buttons */}
        <div className="flex space-x-4">
            <Button variant="contained" color="primary" href="/login">
                Login
            </Button>
        </div>
      </div>
      <Outlet />
    </nav>
  );
};

export default NotAuthNavbar;