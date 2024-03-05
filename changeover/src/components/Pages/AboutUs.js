import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

export default function AboutUsPage () {

  return (
    <Container maxWidth="md">
      <Paper className='about-us'>
        <Typography variant="h4" gutterBottom>
         Welcome To ChangeOver!
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to ChangeOver, your one-stop-shop for sustainable and stylish fashion! Our mission is to make fashion
          circular by connecting individuals who share a passion for giving pre-loved clothing a second life.
        </Typography>
        <Typography variant="body1" paragraph>
          At ChangeOver, we believe in the power of refurbished fashion to redefine the way we think about clothing. By
          choosing to buy and sell gently-worn clothing, you are contributing to the reduction of textile waste and promoting
          eco-friendly practices in the fashion industry.
        </Typography>
        <Typography variant="body1" paragraph>
          What sets us apart is our commitment to quality and the seamless experience we provide to our users. Every item listed on our
          platform undergoes a meticulous inspection to ensure it meets our strict quality standards. Our user-friendly interface,
          built with React MUI, makes buying and selling a breeze.
        </Typography>
        <Typography variant="body1" paragraph>
          Join our sustainable fashion community and embark on a journey of style and responsibility. Whether you are looking to refresh
          your wardrobe or find a new home for your gently-worn items, ChangeOver is the place to be.
        </Typography>
        <Typography variant="body1" paragraph>
          Thank you for choosing to be a part of the ChangeOver family. Together, let's reshape the future of fashion and
          make a positive impact on the environment. Happy shopping and selling!
        </Typography>
      </Paper>
    </Container>
  );
};