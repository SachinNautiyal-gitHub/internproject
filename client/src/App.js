
import React, {useState, useEffect } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Profile from './components/Profile';
import Navbar from './components/Navbar';

function App() {


  const [user, setUser] = useState({});
  
  let data;
  const fetchUserDetails = async()=>{
    try {
     const res = await fetch("http://localhost:5000/profile", {
       method:"GET",
       headers:{
         "Content-Type" : "applicaton/json"
       }

     })
     
     data = await res.json();
     setUser(data);
     console.log(data);

    } catch (error) {
      console.log(error.massage);
    }
 }


 useEffect(()=>{
    fetchUserDetails();
 },[]);



  return (
    <div className="App">
   <>
   <BrowserRouter>
   <Navbar user={user}/>
   
   {/* {user && <p>{user[0].firstName}</p> } */}
   
   <Routes>
    <Route path='/' element={<Home user={user}/>}/>
    <Route path='/profile' element={<Profile/>}/>

   </Routes>
   
   </BrowserRouter>
   
   </>
    </div>
  );
}

export default App;
