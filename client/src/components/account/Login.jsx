import React from 'react';
import { Box, TextField, Button } from "@mui/material";
import "./Login.css";

export default function Login() {
  const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';
  return (
   <Box className="w-96 login-container">
     <img src={imageURL} alt="Login"  className='img'/>
     <Box className='wrapper'>
      <TextField id="standard-basic"  variant="standard" />
      <TextField id="standard-basic"  variant="standard" />
      <Button variant="contained" className='btn '>Login</Button>
      <p className='text-center pt-2'>OR</p>
      <Button variant="text" className=''>CREATE AN ACCOUNT</Button>
     </Box>
   </Box>
  )
}
