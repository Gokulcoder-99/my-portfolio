import React from 'react'
import './about.css'
import html from'../assests/html-5.png'
import css from'../assests/css-3.png'
import js from'../assests/js.png'
import boot from'../assests/bootstrap.png'
import rjs from'../assests/physics.png'
import nodejs from'../assests/nodejs.png'
import mysql from'../assests/mysql.png'
import mongodb from'../assests/icons8-mongodb-48.png'
function About() {
  return (
    <div className='about'>
        <div className='explore'>
          <h1>About</h1>
          <p>
          As a fresher Full Stack Developer with expertise in the MERN (MongoDB, Express, React, Node.js) stack, I am excited to embark on a career in web development. I am passionate about creating efficient and effective web applications, and I am eager to learn and grow as a developerI am committed to producing high-quality work. I am excited to collaborate with other developers and contribute to the development of innovative web applications. I am also eager to continue learning and developing my skills as a Full Stack Developer in the MERN stack.
          </p>
        </div>
        <div className='skill'>
            <h1>Skills</h1>
            <ul>
                <li><img src={html} alt='htlm'/><progress value="95" max="100"></progress>  <span>95%</span></li>
                <li><img src={css} alt='css'/><progress value="80" max="100"></progress>  <span>80%</span></li>
                <li><img src={boot} alt='boot'/><progress value="80" max="100"></progress>  <span>80%</span></li>
                <li><img src={js} alt='javascript'/><progress value="85" max="100"></progress>  <span>85%</span></li>
                <li><img src={rjs} alt='react'/><progress value="75" max="100"></progress>  <span>75%</span></li>
                <li><img src={mysql} alt='mysql'/><progress value="50" max="100"></progress>  <span>50%</span></li>
                <li><img src={mongodb} alt='mongodb'/><progress value="65" max="100"></progress>  <span>65%</span></li>
                <li><img src={nodejs} alt='nodejs'/><progress value="65" max="100"></progress>  <span>65%</span></li>
            </ul>
        </div>
    </div>
  )
}

export default About