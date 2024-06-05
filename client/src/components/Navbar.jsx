import React,{useState} from 'react'
import './styles/navbar.css'
import { Link } from 'react-router-dom'
import avatar from '../asset/avatar.jpg'

const Navbar = (props) => {
  

   const [isMenuOpen, setMenuOpen] = useState(false);

   const toggleMenu = () => {
     setMenuOpen(!isMenuOpen);
   };

   if (props.user.length > 0) {
      return (
         <>
            <div className={`navbar ${isMenuOpen ? 'menuopen' : ""}`}>
               <div className="title">
                  <h2>Acme Co</h2>
               </div>

               <div className="nav-list">
                  <ul>
                     <Link className="link" to={'/'}>Home</Link>
                     <Link className="link" >Book</Link>
                     <Link className="link">Guests</Link>
                     <Link className="link">Events</Link>
                     <Link className="link">Services</Link>
                     <Link className="link" >Support</Link>
                  </ul>
                  <div className="avatar">
                     <Link to={'/profile'}> <img src={props.user[0].profileImg || avatar} alt="logo" /></Link>
                  </div>
               </div>

               <div className="menuIcon" onClick={toggleMenu}>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
               </div>

               {isMenuOpen && (

                  <div className="hamburgermenu">
                     <ul >

                     <Link className="link" to={'/'}>Home</Link>
                     <Link className="link" >Book</Link>
                     <Link className="link">Guests</Link>
                     <Link className="link">Events</Link>
                     <Link className="link">Services</Link>
                     <Link className="link" >Support</Link>
                     <Link className="link" to={'/profile'} >Profile</Link>

                     </ul>
                  </div>
               )}


            </div>
         </>
      )
   }


}


export default Navbar
