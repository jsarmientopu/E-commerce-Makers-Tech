// Navbar.js
import React, { useState, useContext, useEffect } from "react";
import Button from "@mui/material/Button";
import { Outlet, Link } from "react-router-dom";
import { useAuth } from "../../Auth/AuthContext";
import { useNavigate } from "react-router-dom";
import CartDrawer from "../Cart/CartDrawer";
import { CartContext } from "../../App";

const Navbar = () => {
  const { items, setItems } = useContext(CartContext);

  const [autenticated, setAutenticated] = useState(false);
  const navigate = useNavigate();
  //   const { logout} = useAuth();

  useEffect(() => {
    if (
      localStorage.getItem("token") !== undefined &&
      localStorage.getItem("token")
    ) {
      setAutenticated(true);
      return;
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
    navigate("/home");
  };
  return (
    <nav className="bg-gray-800 w-full fixed top-0 left-0 z-50">
      <div className="container mx-auto p-4 px-10 flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-white text-2xl font-bold">
          <a href="/home">Maker Tech</a>
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
          {autenticated ? (
            <li>
              <a href="/products" className="text-white hover:text-gray-400">
                Recommended
              </a>
            </li>
          ) : (
            <></>
          )}
          {autenticated ? (
            <li>
              <a href="/statistics" className="text-white hover:text-gray-400">
                Dashboard
              </a>
            </li>
          ) : (
            <></>
          )}
        </ul>

        {autenticated ? (
          <div>
            <CartDrawer />
          </div>
        ) : (
          <></>
        )}

        {/* Material-UI Buttons */}
        {!autenticated ? (
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
        ) : (
          <div className="flex space-x-4">
            <Button variant="outlined" color="secondary" onClick={handleLogout}>
              Log out
            </Button>
          </div>
        )}
      </div>
      <Outlet />
    </nav>
  );
};
export default Navbar;
