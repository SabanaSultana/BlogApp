import React from 'react';
import { Box, TextField, Button } from "@mui/material";
import "./Login.css";

export default function Login() {
  const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';
  return (
   <Box className="container">
     <img src={imageURL} alt="Login"  className='img'/>
     <Box className='wrapper'>
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <Button variant="contained" className='btn'>LOGIN</Button>
      <p>OR</p>
      <Button variant="text" className='btn'>CREATE AN ACCOUNT</Button>
     </Box>
   </Box>
  )
}
