import {useState, useContext, ChangeEvent} from 'react';
import {signIn} from 'next-auth/react';
import type {NextPage} from 'next';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardHeader from '@mui/material/CardHeader';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';

import {AppContext} from 'contexts/AppContext';

const SignIn: NextPage = () => {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const {isLoading, setIsLoading} = useContext(AppContext);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmailInput(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(event.target.value);
  };
  
  const clearInput = () => {
    setEmailInput('');
    setPasswordInput('');
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    try {
      const response = await signIn('credentials', {
        username: emailInput,
        password: passwordInput,
        redirect: false,
      });

      clearInput();

      console.log('login success', response);
    } catch (e) {
      console.log('login failed', e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        direction='row'
        alignItems='center'
        justifyContent='center'
      >
        <Grid item md={8} sm={12} xs={12} lg={6}>
          <Card>
            <CardHeader title='Sign In' />
            <Divider />
            <CardContent>
              <TextField
                disabled={isLoading}
                required
                fullWidth
                id='email-input'
                label='Email'
                type='email'
                sx={{mb: '25px'}}
                value={emailInput}
                onChange={handleEmailChange}
              />
              <TextField
                disabled={isLoading}
                required
                fullWidth
                id='password-input'
                label='Password'
                type='password'
                value={passwordInput}
                onChange={handlePasswordChange}
              />
            </CardContent>
            <Divider />
            <CardActions sx={{alignItems: 'right', justifyContent: 'right'}}>
              <Button
                variant='contained'
                onClick={handleSubmit}
              >
                Login
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default SignIn;
