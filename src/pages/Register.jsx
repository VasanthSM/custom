import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle the form submission logic here
  };

  return (
    <div className='signupPage'>
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
            width: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.7)', 
            padding: 2,
            borderRadius: 2,
            boxShadow: 2,
          }}
        >
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            {...register('username', { required: 'Username is required' })}
            error={!!errors.username}
            helperText={errors.username?.message}
          />
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
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
        <TextField
            label="Phone Number"
            variant="outlined"
            fullWidth
            margin="normal"
            {...register('phoneNumber', {
                required: 'Phone number is required',
                pattern: {
                value: /^(\+?\d{1,4}[\s-]?)?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{4}$/,
                message: 'Invalid phone number format',
                },
                minLength: {
                value: 10,
                message: 'Phone number must be exactly 10 digits',
                },
                maxLength: {
                value: 10,
                message: 'Phone number must be exactly 10 digits',
                },
                validate: (value) => {
                const cleanedValue = value.replace(/\D/g, ''); // Remove non-digit characters
                return cleanedValue.length === 10 || 'Phone number must be exactly 10 digits';
                },
            })}
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber?.message}
        />

          <div className='mt-2 flex'>
          <input type="checkbox" className='h-4 w-5 mt-1' required />
          <p className='text-sm ml-1'>
            By continuing, I agree to the use of privacy & Policy
          </p>
          </div>
          <h5 className='mt-3 text-center'>
            Already have an account? 
            <Link to='/login' className='text-blue-700 font-semibold ml-2'>Click here..</Link>
          </h5>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 4 }}
          >
            Register
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Register;
