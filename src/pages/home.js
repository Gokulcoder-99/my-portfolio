import React from 'react';
import"./home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import hero from "../assests/myphoto.jpeg"
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Dna  } from  'react-loader-spinner'
import {useState , useEffect} from 'react'
function Home() {
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
    <div className='home'>
        <div className='intro'>
            <div className='myself'>
                <h1>Hello <span>👋</span><br/>
                My name is <br/>Gokulakrishnan.<br/>
                </h1>
                <p>I am a Full stack developer(MERN)</p>
               <a target='_blank'  rel='noreferrer' href='https://drive.google.com/file/d/1lsU5rM5rjCUBih4nrTY60vyUosb2ZDP6/view?usp=sharing' ><button className='btn'>Resume</button></a>
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
    )}
    </>
  )
}

export default Home