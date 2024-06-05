import React, { useState } from 'react'
import './styles/profile.css'
import avatar from '../asset/avatar.jpg'
import {useNavigate} from 'react-router-dom'

const Profile = ({fetchUserDetails}) => {


    const [userDetails, setUserDetails] = useState({profileImg : "", firstName:"", lastName:"", email:"", address:""})
    const navigate = useNavigate();

    const convertToBase64 = async (file) => {
        return new Promise((resolve, reject) => {
            try {
                const fileReader = new FileReader();
                fileReader.readAsDataURL(file);
                fileReader.onload = () => {
                    resolve(fileReader.result);
                };
                fileReader.onerror = (error) => {
                    reject(error);
                };
            } catch (error) {
                reject(error);
            }
        });
    };


    const onchange = (e)=>{
        setUserDetails({...userDetails,[e.target.name]: e.target.value})
    }

    const uploadprofile = async() => {
         try {
           const res = await fetch("https://internproject-ycbw.onrender.com/profile", {
            method:'POST',
            headers:{
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(userDetails)
           })
          
           const data = await res.json();
           console.log(data);

         } catch(error) {
            console.log("An error occured");
         }
    }

    const handelSubmit = async(e)=>{
       e.preventDefault();
        await uploadprofile();
        fetchUserDetails();
        navigate('/');
    }


    const handleonchange = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file)
        console.log(base64);
        setUserDetails({ ...userDetails, profileImg: base64 })
    }

    return (
        <>

            <div className="profilePage">

                <div className="main">
                    <form onSubmit={handelSubmit}>

                    <h1>My profile</h1>

                    <div className='profile-img'>

                        <img src={userDetails.profileImg || avatar} alt="" />
                    </div>
                    <input type="file"  lable="image" name='profileImg' id='file-upload' accept='.jpeg, .png, .jpg' style={{ display: "none" }} onChange={(e) => handleonchange(e)} />
                    <label htmlFor='file-upload' className="btn"><i className="fa-solid fa-camera"></i>Add a profile photo</label>

                    <div className="name">
                        <div className="firstname">
                            <label  htmlFor="First Name">First Name</label>
                            <input type="text" name='firstName' onChange={onchange} />
                        </div>
                        <div className="lastname">
                            <label htmlFor="Last Name" >Last Name</label>
                            <input type="text" name='lastName' onChange={onchange}/>
                        </div>
                    </div>

                    <div className="email">
                        <label htmlFor="Email">Email</label>
                        <input type="email" name='email' onChange={onchange} />
                    </div>

                    <div className="address">
                        <label htmlFor="Address">Address</label>
                        <textarea type="text" name='address' onChange={onchange} />
                    </div>

                    <div className="buttons">
                        <button className='reset'>Reset</button>
                        <button className='save' type='submit'>Save</button>
                    </div>

                    </form>
                </div>
            </div>

        </>
    )
}

export default Profile
