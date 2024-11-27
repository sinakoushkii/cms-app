import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const LoginForm = () => {
  return (
    <div>
        <div className='flex justify-center items-center'>
      <Box
          className="flex flex-col gap-4 w-72"
          // onSubmit={(e) => formSubmitHandler(e)}
        >
        <h2 className='self-center text-3xl font-semibold'>Log In</h2>
        <p className='self-center'>Welcome, please log in to continue</p>
          <TextField
            label="Username *"
            variant="outlined"
            name="username"
            // value={formData.title}
            // onChange={handleChange}
          />
          <TextField
            label="Password *"
            variant="outlined"
            name="password"
            type='password'
            // value={formData.caption}
            // onChange={handleChange}
          />
          <div className="flex gap-2">
          <Button
                // onClick={(e) => formSubmitHandler(e)}
                variant="contained"
                className='w-full'
              >
                Login
              </Button>
            {/* <Button variant="outlined" color="error">
              Cancel
            </Button> */}
          </div>
          <p className='self-center'>Don't have an account ? <Link className='text-blue-600 underline text-center' to="/register">Register</Link></p>
        </Box>
      </div>
    </div>
  )
}

export default LoginForm