import React from 'react';
import"./home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import hero from "../assests/myphoto.jpeg"
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
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
                <div className='anchor-min'>
                  <ul>
                    <li><a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/gokulakrishnan-k-ab7712169/'><FontAwesomeIcon icon={faLinkedin}/></a></li>
                    <li><a target='_blank' rel='noreferrer' href='https://github.com/Gokulcoder-99'><FontAwesomeIcon icon={faGithub}/></a></li>
                  </ul>
                </div>
            </div>
        </div>
        <div className='pic'>
        <img src={hero} alt='portfolio' />
        </div>
        
    </div>
  )
}

export default Home