import {useContext, ChangeEvent} from 'react';
import {useForm, Controller, SubmitHandler} from 'react-hook-form';
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

export interface FormState {
  email: string
  password: string
}

const SignIn: NextPage = () => {
  const {isLoading, setIsLoading} = useContext(AppContext);
  const {control, handleSubmit} = useForm<FormState>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  
  const onSubmit: SubmitHandler<FormState> = async (data) => {
    console.log('submit handler', data);
    setIsLoading(true);

    try {
      const response = await signIn('credentials', {
        username: data.email,
        password: data.password,
        redirect: false,
      });

      console.log('login success', response);
    } catch (e) {
      console.log('login failed', e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      sx={{flexGrow: 1}}
      component='form'
      onSubmit={handleSubmit(onSubmit)}
    >
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
              <Controller
                name='email'
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    disabled={isLoading}
                    fullWidth
                    id='email-input'
                    label='Email'
                    type='email'
                    sx={{mb: '25px'}}
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
              <Controller
                name='password'
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    disabled={isLoading}
                    fullWidth
                    id='password-input'
                    label='Password'
                    type='password'
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
            </CardContent>
            <Divider />
            <CardActions sx={{alignItems: 'right', justifyContent: 'right'}}>
              <input type='submit' hidden />
              <Button
                variant='contained'
                onClick={handleSubmit(onSubmit)}
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
