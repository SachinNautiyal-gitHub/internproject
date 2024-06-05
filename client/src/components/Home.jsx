
import './styles/home.css'
import {useNavigate} from 'react-router-dom';


const Home = (props) => {

  const navigate = useNavigate();

  const handleOnclick = ()=>{
     navigate('/profile');
  }

  if (props.user.length > 0) {
    return (
      <>
        
        <div className="home">
          <h1>User Profile</h1>

                <div className="container">
                   <div className="image">
                  <img src={props.user[0].profileImg} alt="" />
                  </div>
                 <div className="details">
                   <p>Name : {props.user[0].firstName} {props.user[0].lastName}</p>
                   <p>Email : {props.user[0].email}</p>
                   <p>Address : {props.user[0].address}</p>

                  <button className='update-profile' onClick={handleOnclick}>Update Profile</button>
                 </div>

              </div>
        </div>


      </>
    )

  }

  else {
    return (
      <>
        
        <h1>Loading ....</h1>
      </>
    )
  }
}

export default Home
