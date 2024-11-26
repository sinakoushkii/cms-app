import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const Layout = () => {
  return (
    <div>
        <Header />
        <div>
            <Outlet />
        </div>
        <h3>footer</h3>
    </div>
  )
}

export default Layout