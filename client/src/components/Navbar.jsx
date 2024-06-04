import React from 'react'
import './styles/navbar.css'

const Navbar = () => {
  return (
  <>
  <div className="navbar">
     <div className="title">
        <h2>Acme Co</h2>
     </div>

     <div className="nav-list">
        <ul>
            <li>Home</li>
            <li>Book</li>
            <li>Guests</li>
            <li>Events</li>
            <li>Services</li>
            <li>Support</li>
        </ul>
        <div className="avatar">
           <img src="" alt="logo" />
      </div>
     </div>

   

  </div> 
  </>
  )
}

export default Navbar
