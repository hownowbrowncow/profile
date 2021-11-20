import {useContext} from 'react';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup/dist/yup';
import {useSnackbar} from 'notistack';
import {useForm, Controller, SubmitHandler} from 'react-hook-form';
import {signIn} from 'next-auth/react';
import type {NextPage} from 'next';
import {useRouter} from 'next/router';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import LoadingButton from '@mui/lab/LoadingButton';

import {AppContext} from 'contexts/AppContext';

export interface FormState {
  email: string
  password: string
}

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
}).required();

const SignIn: NextPage = () => {
  const router = useRouter();
  const {enqueueSnackbar} = useSnackbar();
  const {isLoading, setIsLoading} = useContext(AppContext);
  const {control, handleSubmit, reset, formState: {errors}} = useForm<FormState>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormState> = async (data) => {
    setIsLoading(true);

    try {
      const response = await signIn('credentials', {
        username: data.email,
        password: data.password,
        redirect: false,
      });

      if (response.ok) {
        reset();
        enqueueSnackbar('Login success', {
          variant: 'success',
        });
        router.push('/');
      } else {
        enqueueSnackbar('Email or password not valid', {
          variant: 'error',
        });
      }
    } catch (e) {
      reset();
      enqueueSnackbar('Something went wrong', {
        variant: 'error',
      });
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
                render={({field: {onChange, value}}) => (
                  <TextField
                    error={Boolean(errors?.email)}
                    helperText={errors?.email?.message}
                    disabled={isLoading}
                    fullWidth
                    id='email-input'
                    label='Email'
                    type='text'
                    sx={{mb: '25px'}}
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
              <Controller
                name='password'
                control={control}
                render={({field: {onChange, value}}) => (
                  <TextField
                    error={Boolean(errors?.password)}
                    helperText={errors?.password?.message}
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
              <LoadingButton
                loading={isLoading}
                variant='contained'
                onClick={handleSubmit(onSubmit)}
              >
                Login
              </LoadingButton>
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
