import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='container mx-auto px-8'>
      <p className='self-center'>Already have an account ? <Link className='text-blue-600 underline text-center' to="/login">Login</Link></p>
    </div>
  )
}

export default Register