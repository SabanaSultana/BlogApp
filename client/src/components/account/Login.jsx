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
    console.log(e.target.value)
    setSignupInput((prevSignupInput) => ({
      ...prevSignupInput,         // why ...prevSignupInput...coz if I change only username so name and password will be same as previous
      [e.target.name]: e.target.value
    }));
    console.log(signupInput)
  };

  return (
    <Box className="w-96 login-container mt-10">
      <img src={imageURL} alt="Login" className='img' />
      {account === 'login' ? (
        <Box className='wrapper'>
          <TextField
            id="standard-basic"
            label="Enter username"
            variant="standard"
          />
          <TextField
            id="standard-basic"
            label="Enter password"
            variant="standard"
          />
          <Button variant="contained" className='login-btn'>
            Login
          </Button>
          <p className='text-center  text-sm m-2'>OR</p>
          <Button variant="text" className='signup-btn' onClick={signUpHandler}>
            CREATE AN ACCOUNT
          </Button>
        </Box>
      ) : (
        <Box className='wrapper'>
          <TextField
            id="standard-basic"
            label="Enter Name"
            variant="standard"
            name='name'
            onChange={signUpChangeHandler}
          />
          <TextField
            id="standard-basic"
            label="Enter username"
            variant="standard"
            name='username'
            onChange={signUpChangeHandler}
          />
          <TextField
            id="standard-basic"
            label="Enter password"
            variant="standard"
            name='password'
            onChange={signUpChangeHandler}
          />
          <Button variant="contained" className='login-btn' >
            Sign Up
          </Button>
          <p className='text-center  text-sm m-2'>OR</p>
          <Button variant="text" className='signup-btn' onClick={signUpHandler}>
            ALREADY HAVE AN ACCOUNT
          </Button>
        </Box>
      )}
    </Box>
  );
}
