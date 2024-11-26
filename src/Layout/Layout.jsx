import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <h3>header</h3>
        <div>
            <Outlet />
        </div>
        <h3>footer</h3>
    </div>
  )
}

export default Layout