import React from 'react'
import { Link } from 'react-router-dom'
const Landing = () => {
  return (
    <>
    <h1>Welcome to Medico, This is a Landing Page</h1>

       <Link to="/Login">Click to login</Link>

    </>
  )
}

export default Landing