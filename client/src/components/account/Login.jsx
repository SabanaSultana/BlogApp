import React from 'react';
import { Box, TextField, Button } from "@mui/material";
import "./Login.css";

export default function Login() {
  const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';
  return (
   <Box className="container">
     <img src={imageURL} alt="Login"  className='img'/>
     <TextField id="standard-basic" label="Standard" variant="standard" />
     <TextField id="standard-basic" label="Standard" variant="standard" />
     <Button variant="contained">LOGIN</Button>
     <Button variant="text">CREATE AN ACCOUNT</Button>
   </Box>
  )
}
