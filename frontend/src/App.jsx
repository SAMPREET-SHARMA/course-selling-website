import { useEffect, useState } from 'react'
import axios from "axios"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from "./Routes/Homepage.jsx";
import Appbar from "./Routes/Appbar.jsx";
import {Signup} from "./Routes/Signup.jsx";
import {Signin} from "./Routes/Login.jsx";
import {Getcourses} from "./Routes/Getcourses.jsx";
import {Addcourses} from "./Routes/Addcourses.jsx";
import {Course} from "./Routes/Course.jsx";

function App() {
  const [username,setUsername] = useState("")

  useEffect(() => {
    async function init() {
      try {
        const response = await axios.get("http://localhost:3000/admin/me", {
          headers: {
            "authorization": "Bearer " + localStorage.getItem("token")
          }
        });
        setUsername(response.data.username);
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    }
    init()
  },[])



  return (
    <div style={{
      backgroundColor : "#eeeee",
    }}>
      <Router >
        <Appbar username={username} setUsername={setUsername}/>
        <Routes>
          <Route path={"/"} element={<Homepage username={username} />}/>
          <Route path={"/signup"} element={<Signup setUsername={setUsername}/>}/>
          <Route path={"/login"} element={<Signin setUsername={setUsername}/>}/>
          <Route path={"/getCourses"} element={<Getcourses/>}/>
          <Route path={"/addCourses"} element={<Addcourses/>}/>
          <Route path={"/course/:id"} element={<Course/>}/>
        </Routes>
      </Router>
    </div>
  )
}



export default App
