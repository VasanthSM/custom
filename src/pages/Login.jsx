import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle the login logic here
  };

  return (
    <div className='loginPage'>
        <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
                maxWidth: 400,
                mx: 'auto',
                mt: 8, 
                p: 3,
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                borderRadius: 2,
                boxShadow: 3, 
            }}
            >
            <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                {...register('email', {
                required: 'Email is required',
                pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: 'Invalid email address',
                },
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
                sx={{ mb: 2 }} // Added bottom margin for spacing between fields
            />
            <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                {...register('password', {
                required: 'Password is required',
                })}
                error={!!errors.password}
                helperText={errors.password?.message}
                sx={{ mb: 3 }} // Added bottom margin for spacing between fields and button
            />
             <div className='mt-2 flex'>
          <input type="checkbox" className='h-4 w-5 mt-1' required />
          <p className='text-sm ml-1'>
            By continuing, I agree to the use of privacy & Policy
          </p>
          </div>
          <h5 className='mt-3 text-center'>
            Create New account? 
            <Link to='/register' className='text-blue-700 font-semibold ml-2'>Click here..</Link>
          </h5>
            <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
            >
                Log In
            </Button>
       </Box>
      </Box>
    </div>
  );
};

export default Login;
