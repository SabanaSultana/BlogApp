import React, { useState } from 'react';
import { Box, TextField, Button } from "@mui/material";
import "./Login.css";

const initialSignupDetails = {
  name: '',
  username: '',
  password: ''
};

export default function Login() {
  const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';
  const [account, setAccount] = useState('login');
  const [signupInput, setSignupInput] = useState(initialSignupDetails);

  const signUpHandler = () => {
    setAccount(account === 'login' ? 'signup' : 'login');
  };

  const signUpChangeHandler = (e) => {
    setSignupInput((prevSignupInput) => ({
      ...prevSignupInput,
      [e.target.name]: e.target.value
    }));
  };

  const signUpSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/signUp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signupInput)
      });
      const data = await response.json();
      if (response.ok) {
        console.log('Signup successful', data);
        setAccount('login');
      } else {
        console.error('Signup failed', data);
      }
    } catch (error) {
      console.error('An error occurred', error);
    }
  };

  return (
    <Box className="login-container">
      <img src={imageURL} alt="Login" className='login-logo' />
      {account === 'login' ? (
        <Box className='form-wrapper'>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" className='login-btn'>
            Login
          </Button>
          <p className='text-center'>OR</p>
          <Button variant="text" className='toggle-btn' onClick={signUpHandler}>
            Create an Account
          </Button>
        </Box>
      ) : (
        <Box className='form-wrapper'>
          <form onSubmit={signUpSubmitHandler} className='form'>
            <TextField
              label="Name"
              variant="outlined"
              name='name'
              fullWidth
              margin="normal"
              onChange={signUpChangeHandler}
            />
            <TextField
              label="Username"
              variant="outlined"
              name='username'
              fullWidth
              margin="normal"
              onChange={signUpChangeHandler}
            />
            <TextField
              label="Password"
              variant="outlined"
              name='password'
              type="password"
              fullWidth
              margin="normal"
              onChange={signUpChangeHandler}
            />
            <Button variant="contained" color="primary" className='login-btn' type='submit'>
              Sign Up
            </Button>
          </form>
          <p className='text-center'>OR</p>
          <Button variant="text" className='toggle-btn' onClick={signUpHandler}>
            Already have an account?
          </Button>
        </Box>
      )}
    </Box>
  );
}
