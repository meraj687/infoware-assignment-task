import React from 'react'
import { Link } from 'react-router-dom'
import './Navlinks.css'

function Navlinks() {
  return (
    <div className='navlinks'>
      <div className='navlinks__outer'>
        <div className='navlinks__inner'>
          <Link>Today deal's</Link>
          <Link>Customer Services</Link>
          <Link>Registry</Link>
          <Link>Supplies</Link>
          <Link>Gifts</Link>
        </div>
      </div>
    </div>
  )
}

export default Navlinks
