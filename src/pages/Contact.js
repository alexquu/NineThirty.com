import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const StyledBox = styled(Box)(({theme}) => ({
  height: '30vw',
  width: '30vw',
  margin: '0 auto',
  marginTop: '3em',
  display: 'flex',
  flexDirection: 'column',
  gap: '3em',
  padding: '2em',
}));

const Contact = () => {

  return (
    <>
      <Navbar />
      <Sidebar />
      <StyledBox
        component="form"
        noValidate
        autoComplete="off"
      >
        <p style={{margin: '0 auto'}}>REACH OUT:</p>
        <TextField className="formName" label="Name" variant="outlined"  
            InputLabelProps={{
              shrink: true,
            }}/>
        <TextField className="formMail" label="Mail" variant="outlined" 
          InputLabelProps={{
            shrink: true,
          }}/>
        <TextField className="formMessage" label="Message" variant="outlined" multiline rows={5}
          InputLabelProps={{
          shrink: true,
          }}/>
      </StyledBox>
    </>
    
  );
}

export default Contact;