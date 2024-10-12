import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const RegisterComponent = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Navigation hook

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation (could be extended)
    if (username && email && password) {
      // For now, just log to the console and navigate to the home page
      console.log('Registration successful');
      console.log({ username, email, password });
      navigate('/');
    } else {
      setError('Please fill out all fields');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f3e5f5', // light purple background
      }}
    >
      <Box
        sx={{
          width: '400px',
          padding: '2rem',
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
        }}
      >
        <h2 style={{ color: '#7e57c2', marginBottom: '1.5rem' }}>Register</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            margin="normal"
            sx={{
              '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                  borderColor: '#7e57c2', // purple border when focused
                },
              },
            }}
          />
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            sx={{
              '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                  borderColor: '#7e57c2', // purple border when focused
                },
              },
            }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            sx={{
              '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                  borderColor: '#7e57c2', // purple border when focused
                },
              },
            }}
          />
          {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              marginTop: '1.5rem',
              backgroundColor: '#7e57c2',
              '&:hover': {
                backgroundColor: '#6d4cba', // hover color for the button
              },
            }}
          >
            Register
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default RegisterComponent;
