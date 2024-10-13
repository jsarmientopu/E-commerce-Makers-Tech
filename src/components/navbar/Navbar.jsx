// Navbar.js
import React from "react";
import Button from "@mui/material/Button";
import { Outlet, Link } from "react-router-dom";
import { useAuth } from "../../Auth/AuthContext";
import { useNavigate } from "react-router-dom";
import CartDrawer from "../Cart/CartDrawer";

const Navbar = () => {
  const navigate = useNavigate();
  //   const { logout} = useAuth();

  const handleLogout = () => {
    // logout();
    navigate("/");
  };
  return (
    <nav className="bg-gray-800 w-full fixed top-0 left-0 z-50">
      <div className="container mx-auto p-4 px-10 flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-white text-2xl font-bold">
          <a href="/home">MyLogo</a>
        </div>

        {/* Links Section */}
        <ul className="flex space-x-6">
          <li>
            <a href="/home" className="text-white hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="text-white hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="/services" className="text-white hover:text-gray-400">
              Services
            </a>
          </li>
          <li>
            <a href="/contact" className="text-white hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>

        <div>
          <CartDrawer />
        </div>

        {/* Material-UI Buttons */}
        <div className="flex space-x-4">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#7e22ce",
              "&:hover": {
                backgroundColor: "#6b21a8",
              },
            }}
            href="/login"
          >
            Login
          </Button>
          <Button variant="outlined" color="secondary" href="/signup">
            Sign Up
          </Button>
        </div>
      </div>
      <Outlet />
    </nav>
  );
};
export default Navbar;
