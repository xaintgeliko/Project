import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Site = () => {
  return (
    <>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
        </ul>


      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Site