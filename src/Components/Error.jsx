import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='pageError'>
      <h1>Page Not Found</h1>
      <p>Sorry, the page you are looking for could not be found on our website.</p>
      <p>You can return to<Link to="/">our homepage </Link>.</p>
    </div>
  )
}

export default Error