import React from 'react'
import { Outlet } from 'react-router-dom'

const IdentityLayout = () => {
  return (
    <div className='mt-9 pt-9'>
      <div className='container mx-auto px-8'>
          <Outlet />
      </div>
    </div>
  )
}

export default IdentityLayout