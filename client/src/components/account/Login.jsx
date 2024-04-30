import React from 'react';
import { Box, TextField, Button } from "@mui/material";
import "./Login.css";
import { useState } from 'react';

export default function Login() {
    const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';
    const [account,setAccount]=useState('login')
    const signUpHandler=()=>{
      account==='login'?setAccount('signup'):setAccount('login')
    }
   
    return (
      <Box className="w-96 login-container">
        <img src={imageURL} alt="Login" className='img' />
         { account==='login'?
                        <Box className='wrapper'>
                          <TextField id="standard-basic" label="Enter username" variant="standard" />
                          <TextField id="standard-basic" label="Enter password" variant="standard" />
                          <Button variant="contained" className='login-btn'>Login</Button>
                          <p className='text-center  text-sm m-2'>OR</p>
                          <Button variant="text" className='signup-btn' onClick={signUpHandler}>CREATE AN ACCOUNT</Button>
                        </Box>
                    :
                        <Box className='wrapper'>
                          <TextField id="standard-basic" label="Enter Name" variant="standard" />
                          <TextField id="standard-basic" label="Enter username" variant="standard" />
                          <TextField id="standard-basic" label="Enter password" variant="standard" />
                          <Button variant="contained" className='login-btn'>Sign Up</Button>
                          <p className='text-center  text-sm m-2'>OR</p>
                          <Button variant="text" className='signup-btn' onClick={signUpHandler}>ALREADY HAVE AN ACCOUNT</Button>
                        </Box>
        }
      </Box>
    );
}

