import React from 'react';
import { Container, Typography, Paper, Grid, AppBar, Toolbar } from '@mui/material';

const AboutUsPage: React.FC = () => {
  const meieImage: string = '/Users/rolandsilt/Desktop/Meie.jpg';
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
            Tere tulemast casa catch lehele
          </Typography>
        </Paper>

        <Grid container spacing={2} style={{ marginTop: 20 }}>
          <Grid item xs={12} md={6}>
            <Paper style={{ padding: 16 }}>
              <Typography variant="h5" gutterBottom>
                Our Mission
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper style={{ padding: 16 }}>
              <Typography variant="h5" gutterBottom>
                Meet the Team
              </Typography>
              <Typography variant="body1">
              <img src={"/Users/rolandsilt/Desktop/Meie.png"} alt="Description of the image" width={300} height={200} />
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AboutUsPage;
