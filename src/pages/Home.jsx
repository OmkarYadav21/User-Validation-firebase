import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import {Link,useNavigate} from 'react-router-dom'

const Home = (props) => {
  const navigate=useNavigate()

  const signOutt=()=>{
    const auth = getAuth();
    signOut(auth).then(() => {
        // Sign-out successful.
        navigate('/')

    }).catch((error) => {
        // An error happened.
        console.log(error);
    });

  }
  return (
    <div>
      <h1>Welcome home {props.name}</h1>
      <button type="button" style={{backgroundColor:'#007bff', color:"white", padding:"10px", border:'none',borderRadius:"5px"}} onClick={
        signOutt
      }>Signout</button>
    </div>
  )
}

export default Home
