import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Container, Box, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useAuth } from "../../Auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { redirect } from "react-router-dom";
import { Outlet } from "react-router-dom";

// Custom theme for consistent purple color
const theme = createTheme({
  palette: {
    primary: {
      main: "#7e22ce", // Purple color
    },
  },
});

const Template = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-400 to-purple-600">
        <Container maxWidth="sm">
          <Box
            className="bg-white rounded-lg shadow-lg py-14 px-14"
            sx={{ boxShadow: 3 }}
          >
            {children}
          </Box>
        </Container>
      </div>

      <Outlet />
    </ThemeProvider>
  );
};

export default Template;
