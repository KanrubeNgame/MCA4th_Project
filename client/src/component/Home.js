import React from 'react';
import '../App.css'
import {Typography, Container, Button} from '@mui/material/';
import backgroundImage from '../asset/bg.jpg'
import { Link } from 'react-router-dom';

//background Image
const backgroundStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};
const Home = () => {
  return (
    <>
          <div style={backgroundStyle}>
            <Container maxWidth="md">
              <Typography variant='h4' component="div" gutterBottom color='white'>
                Welcome to Campus Recruitment Management System
              </Typography>
              <Typography variant='body1' paragraph color='white'>
                 Explore opportunities, connect with employers, comapany and Student and shape your future.
              </Typography>

              <Link to="/reg">
                <Button variant='contained' color='primary' >
                  Get Started
                </Button>
              </Link>
            </Container>
          </div> 
    </>
  );
};

export default Home;