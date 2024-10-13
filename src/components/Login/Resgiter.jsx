import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Container, Box, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Outlet, Link } from "react-router-dom";
import Template from "./Template";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Swal from "sweetalert2";

const RegisterComponent = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const navigate = useNavigate(); // Navigation hook
  const [rol, setRol] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setRol(event.target.value);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#7e22ce", // Purple color
      },
    },
  });

  const handleSubmit = async (e) => {
    if (
      !username ||
      !email ||
      !password ||
      password !== confirmPass ||
      rol < 0
    ) {
      Swal.fire({
        title: "Registration failed",
        text: "Please fill out all fields correctly.",
        icon: "error",
      });
      return;
    }
    const token = localStorage.getItem("token");
    try {
      const response = await fetch("http://localhost:3001/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // If registration is successful, redirect to the login page
        navigate("/login");
      } else {
        // Show error message from the server (e.g., username or email exists)
        Swal.fire({
          title: "Registration failed",
          text: data.message,
          icon: "error",
        });
      }
    } catch (err) {
      Swal.fire({
        title: "Registration failed",
        text: "An error occurred. Please try again.",
        icon: "error",
      });
    }

    // Basic form validation (could be extended)
    if (username && email && password && password == confirmPass && rol > -1) {
      // For now, just log to the console and navigate to the home page
      console.log("Registration successful");
      console.log({ username, email, password, rol });
      // navigate("/home");
    }
  };

  return (
    <Template>
      <Typography
        variant="h3"
        className="text-center mb-8 font-semibold text-purple-600 pb-2"
        style={{ fontFamily: "'Poppins', sans-serif" }} // Custom typography
      >
        Sign Up
      </Typography>
      <Typography
        variant="h5"
        className="text-center mb-8 font-semibold text-purple-600 pb-10"
        style={{ fontFamily: "'Poppins', sans-serif" }} // Custom typography
      >
        Fill the form to create an account
      </Typography>

      {/* Login Form */}
      <form
        noValidate
        autoComplete="off"
        className="flex flex-col items-center"
        onSubmit={handleSubmit}
      >
        <div className="mb-6 w-[75%]">
          <TextField
            fullWidth
            label="username"
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
            label="Email"
            variant="outlined"
            className="rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <div className="mb-6 w-[75%]">
          <TextField
            fullWidth
            label="Confirm password"
            type="password"
            variant="outlined"
            className="rounded-lg"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
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
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Rol</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={rol}
              onChange={handleChange}
              label="Rol"
            >
              <MenuItem value="-1">
                <em>None</em>
              </MenuItem>
              <MenuItem value={0}>Usuario</MenuItem>
              <MenuItem value={1}>Admin</MenuItem>
            </Select>
          </FormControl>
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
            Sign up
          </Button>
        </div>
      </form>
      <Outlet />
    </Template>
  );
};

export default RegisterComponent;
