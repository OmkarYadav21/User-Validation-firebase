import { useEffect, useState } from 'react'
import Login from './pages/Login'; 
import Signup from './pages/Signup'; 
import Home from './pages/Home'
import { BrowserRouter,Route,Routes } from "react-router-dom";
import {auth} from './firebase'

function App() {
  const [userName, setUserName] = useState()
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      console.log(user.displayName);
      if (user) {
        setUserName(user.displayName)
      }else{
        setUserName("")
      }
    })
  },[])

  return (
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/Signup' element={<Signup/>} />
          <Route path='/Home' element={<Home name={userName}/>} />

        </Routes>
      </BrowserRouter>
    
  )
}

export default App
