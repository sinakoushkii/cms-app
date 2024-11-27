import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='container mx-auto px-8'>
      <div className='flex justify-center items-center h-screen'>
      <Box
          className="flex flex-col gap-4 w-72"
          // onSubmit={(e) => formSubmitHandler(e)}
        >
          <TextField
            label="Username"
            variant="outlined"
            name="username"
            // value={formData.title}
            // onChange={handleChange}
          />
          <TextField
            label="Password"
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

export default Login