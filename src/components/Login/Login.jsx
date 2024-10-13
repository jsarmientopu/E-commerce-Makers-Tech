import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Container, Box, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useAuth } from "../../Auth/AuthContext";
import Template from "./Template";
import { useNavigate } from "react-router-dom";
import { redirect } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import Swal from "sweetalert2";

// Custom theme for consistent purple color
const theme = createTheme({
  palette: {
    primary: {
      main: "#7e22ce", // Purple color
    },
  },
});

const LoginPage = () => {
  //   const { login } = useAuth();
  const [username, setUsername] = useState(""); // State for username
  const [password, setPassword] = useState(""); // State for password
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Store the token in localStorage or other secure place
        localStorage.setItem("token", data.token);

        // Navigate to the home page upon successful login
        navigate("/home");
        window.location.reload();
      } else {
        // Show error message from the server

        Swal.fire({
          title: "Login failed",
          text: data.message,
          icon: "error",
        });
      }
    } catch (err) {
      Swal.fire({
        title: "Login failed",
        text: "An error occurred. Please try again.",
        icon: "error",
      });
    }

    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    // const success=login(username, password)

    // if (success) {
    redirect("/home");
    // } else {
    //   // Show error message if login fails
    // //   setError('Invalid username or password');
    // }
  };

  return (
    <Template>
      <Typography
        variant="h3"
        className="text-center mb-8 font-semibold text-purple-600 py-2"
        style={{ fontFamily: "'Poppins', sans-serif" }} // Custom typography
      >
        Log In
      </Typography>
      <Typography
        variant="h5"
        className="text-center mb-8 font-semibold text-purple-600 pb-10"
        style={{ fontFamily: "'Poppins', sans-serif" }} // Custom typography
      >
        Welcome Back!
      </Typography>

      {/* Login Form */}
      <form
        noValidate
        autoComplete="off"
        className="flex flex-col items-center"
        onSubmit={handleLogin}
      >
        <div className="mb-6 w-[75%]">
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            className="rounded-lg"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#7e22ce", // Default purple border
                },
                "&:hover fieldset": {
                  borderColor: "#7e22ce", // Hover effect
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#7e22ce", // Focus effect
                },
              },
            }}
          />
        </div>
        <div className="mb-6 w-[75%]">
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            className="rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#7e22ce", // Default purple border
                },
                "&:hover fieldset": {
                  borderColor: "#7e22ce", // Hover effect
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#7e22ce", // Focus effect
                },
              },
            }}
          />
        </div>
        <div className="flex justify-center">
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ borderRadius: 28 }}
            className="bg-purple-600 hover:bg-purple-700 text-white rounded-lg px-12 py-2"
            type="submit"
          >
            Login
          </Button>
        </div>
      </form>

      {/* Footer Links */}
      <div className="text-center mt-6">
        <Typography
          variant="body2"
          className="text-gray-600"
          style={{ fontFamily: "'Poppins', sans-serif" }} // Custom typography
        >
          Don't have an account?{" "}
          <Link to="/signup ">
            <span className="text-purple-600 cursor-pointer">Sign up</span>
          </Link>
        </Typography>
      </div>
    </Template>
  );
};

export default LoginPage;
