import React from 'react'

const Profile = () => {
  return (
   <>
   
   <div className="profilePage">
    <h1>My profile</h1>

    <button className="btn"> Add a profile photo</button>
    
    <div className="name">
        <div className="firstname">
         <label htmlFor="First Name"></label>
         <input type="text" />
        </div>
        <div className="lastname">
        <label htmlFor="Last Name"></label>
         <input type="text" />
        </div>
    </div>

    <div className="email">
        <label htmlFor="Email"></label>
        <input type="email" />
    </div>

    <div className="address">
        <label htmlFor="Address"></label>
        <input type="text" />
    </div>

   </div>
   
   </>
  )
}

export default Profile
