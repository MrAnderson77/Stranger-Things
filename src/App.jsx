import {useState} from 'react'
import {Routes, Route} from "react-router-dom"
import Post from "./pages/Post"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Profile from './pages/Profile'
import Navbar from "./components/Navbar"
import './App.css'

function App() {
  const [token, setToken] = useState(localStorage.setItem('token'))
  return (
    <div>
      <Navbar setToken={setToken} token={token}/>
      <Routes>
        <Route path="/post" element={<Post token={token} />} /> 
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login token={token} setToken={setToken}/>} />
        <Route path="/register" element={<Register token={token} setToken={setToken}/>} />
       </Routes>
    </div>
  )
}

export default App
