import React from 'react'
import './styles/profile.css'

const Profile = () => {
    return (
        <>

            <div className="profilePage">

                <div className="main">
                    <h1>My profile</h1>

                    <button className="btn"> Add a profile photo</button>

                    <div className="name">
                        <div className="firstname">
                            <label htmlFor="First Name">First Name</label>
                            <input type="text" />
                        </div>
                        <div className="lastname">
                            <label htmlFor="Last Name">Last Name</label>
                            <input type="text" />
                        </div>
                    </div>

                    <div className="email">
                        <label htmlFor="Email">Email</label>
                        <input type="email" />
                    </div>

                    <div className="address">
                        <label htmlFor="Address">Address</label>
                        <textarea type="text" />
                    </div>

                    <div className="buttons">
                        <button className='reset'>Reset</button>
                        <button className='save'>Save</button>
                    </div>
                </div>


            </div>

        </>
    )
}

export default Profile
