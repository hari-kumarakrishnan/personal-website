import React from 'react'
import Navbar from '../../components/Navbar'
import { Nav } from '../../components/Navbar/NavbarElements'
import './home.css'
const Home = () => {
  return (
    <div class="container">
        <div class="header">
            <h1>Hey 👋 I'm Hari!</h1>
            <h2>Incoming Intern @ State Farm</h2>
            <p1>I am passionate about building web applications and tangibilizing my dreams through code!</p1>
        </div>
        <div class="icon">
            <a href="https://github.com/HariKrishnanKumarakrishnan"><img src="github.jpg" class ="github"></img></a>
            <a href="https://www.linkedin.com/in/hari-kumarakrishnan-196517184/"><img src="linkedin.jpg" class="linkedin"></img></a>
        </div>
    </div>


  )
}

export default Home