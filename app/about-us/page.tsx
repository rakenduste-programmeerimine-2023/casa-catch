import React from 'react';
import { Container, Typography, Paper, Grid, AppBar, Toolbar } from '@mui/material';
//import teamImage from 'file:///Users/rolandsilt/Desktop/CasaCatch/Meie.jpg';

const AboutUsPage: React.FC = () => {
  const teamImage = '//Users/rolandsilt/Desktop/CasaCatch/Meie.jpg'
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">About Us Page</Typography>
        </Toolbar>
      </AppBar>

      <Container>
        <Paper style={{ padding: 16, marginTop: 20 }}>
          <Typography variant="h4" gutterBottom>
            Our Story
          </Typography>
          <Typography variant="body1">
          We came up with CasaCatch because we wanted to make life easier for folks looking for their dream homes. 
          Realizing how all over the place the real estate game is, our team of three computer science students from Tallinn University decided to shake things up a bit.
          Our goal? To take the hassle out of finding the perfect property.
          We saw people juggling through different platforms, each with its own quirks, and it looked like a real headache.
          So, as a bunch of second-year students we thought, "Hey, why not create something that brings all these real estate listings under one roof?"
          That's how CasaCatch came to be – our attempt to lighten up the property search scene.
          No more bouncing around from one site to another. With CasaCatch, you can kick back, set your preferences, and let the house hunt come to you. 
          </Typography>
        </Paper>

        <Grid container spacing={2} style={{ marginTop: 20 }}>
          <Grid item xs={12} md={6}>
            <Paper style={{ padding: 16 }}>
              <Typography variant="h5" gutterBottom>
                Our Mission
              </Typography>
              <Typography variant="body1">
              CasaCatch is designed for real estate seekers who wish to conveniently monitor all real estate platforms through a single central webpage. 
              The application allows users to create a personal account where they can specify their preferred real estate search criteria, 
              such as price range, location, type, and other desired features, without complications.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper style={{ padding: 16 }}>
              <Typography variant="h5" gutterBottom>
                Meet the Team
              </Typography>
              <img src={teamImage}/>
              <Typography variant="body1">
              Our team comprises three second-year Computer Science students from Tallinn University (TLÜ). 
              The leadership role is undertaken by Sander Nõlvak, who adeptly managed the project and primarily focused on backend development. 
              In addition, Roland Silt and Jan Henrik Levertand serve as frontend developers, 
              demonstrating versatility by engaging in supplementary tasks such as creating Python snippets and occasionally jumping into backend responsibilities.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AboutUsPage;
