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
import tailwind from "../assests/tailwindcss-logo.png"
// import aws from "../assests/aws.png"
import { Dna  } from  'react-loader-spinner'
import {useState , useEffect} from 'react'

function About() {
      const [loading,setLoading]=useState(true);
      useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
      }, []);
      return (
        <>
        {loading ? (
          <div className="Dna">
          <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperClass="dna-wrapper"
        />
        </div>
        ):(
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
                <li><img src={html} alt='htlm'/></li>
                <li><img src={css} alt='css'/></li>
                <li><img src={boot} alt='boot'/></li>
                <li><img src={js} alt='javascript'/></li>
                <li><img src={rjs} alt='react'/></li>
                <li><img src={mysql} alt='mysql'/></li>
                <li><img src={mongodb} alt='mongodb'/></li>
                <li><img src={nodejs} alt='nodejs'/></li>
                <li><img src={tailwind} alt='tailwind'/></li>
                {/* <li><img src={aws} alt='aws'/></li> */}
            </ul>
        </div>
    </div>
  )}
</>
 )
}

export default About