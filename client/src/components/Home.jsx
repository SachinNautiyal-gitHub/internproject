import React from 'react'
import './styles/home.css'

const Home = (props) => {

  
  if(props.user) return (
    <>
    
    <div className="home">
        <h1>User Profile</h1>

          <div className="main">
             <div className="image">
               <img src="" alt="" />
             </div>
             <div className="details">
               {/* <p>{props.user[0].firstName} {props.user[0].lastName}</p>
               <p>{props.user[0].email}</p>
               <p>{props.user[0].address}</p> */}

             </div>
          </div>
    </div>
    
    
    </>
  )
  else{
    return (
      <>
       please create a profile
      </>
    )
  }
}

export default Home
