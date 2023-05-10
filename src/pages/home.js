import React from 'react';
import"./home.css";
import hero from "../assests/myphoto.jpeg"
function Home() {
  return (
    <div className='home'>
        <div className='intro'>
            <div className='myself'>
                <h1>Hello <span>👋</span><br/>
                My name is <br/>Gokulakrishnan.<br/>
                </h1>
                <p>I am a Full stack developer(MERN)</p>
                <button className='btn'>Resume</button>
            </div>
        </div>
        <div className='pic'>
        <img src={hero} alt='portfolio' />
        </div>
        
    </div>
  )
}

export default Home