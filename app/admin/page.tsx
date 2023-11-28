import AuthButton from '@/components/AuthButton';
import { Box, Container } from '@mui/material';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

export default async function Profile() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data: { user } } = await supabase.auth.getUser();

  let userInfoArray = [' '];
  if (user && user.email) {
    userInfoArray = [`Email: ${user.email}`];
  }

  function generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const numRandomNumbers = 1;
  const randomNum = generateRandomNumber(1, 1000);

  const apiRequestsBox = (
    <Box sx={{ position: 'absolute', top: '50%', left: '0', transform: 'translateY(-50%)', padding: '2vh 2vw', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div>API requests - {randomNum}</div>
    </Box>
  );

  const emailBox = (
    <Box sx={{ position: 'absolute', top: '0', left: '0', padding: '2vh 2vw', display: 'flex' }}>
      <div>{userInfoArray}</div>
    </Box>
  );

  const scraperNames = (
    <Box
      sx={{
        position: 'fixed',
        top: '50%',
        left: '0',
        transform: 'translateY(-50%)',
        padding: '2vh 2vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
      }}
    >
      <ul>
        <li>Kinnisvara24</li>
        <li>City24</li>
        <li>Rendin</li>
      </ul>
    </Box>
  );

  const helloAdminMessage = (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      Hello Admin!
    </Box>
  );

  const actionButtons = (
    <Box sx={{ position: 'absolute', top: '0', right: '0', padding: '2vh 2vw', display: 'flex', alignItems: 'center' }}>
      <Box sx={{ marginLeft: '1rem' }}>
        <AuthButton />
      </Box>
    </Box>
  );

  return (
    <>
      <Container sx={{ position: 'relative', width: '100%' }}>
        {apiRequestsBox}
        {emailBox}
        {helloAdminMessage}
        {scraperNames}
        {actionButtons}
      </Container>
    </>
  );
}
