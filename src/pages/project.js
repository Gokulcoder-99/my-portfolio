import React from 'react'
import './project.css'
import expense from '../assests/projectimage/expense.png'
import zoro from '../assests/projectimage/zoro.png' 
import chatbox from '../assests/projectimage/chatbox.png'
import netflix from '../assests/projectimage/netflix.png'
import { Dna  } from  'react-loader-spinner'
import {useState , useEffect} from 'react'
function Project() {
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
    <div className='project'>
      <div className='card'>
        <img className='projectimage' src={zoro} alt='food token generator'/>
        <div className='detail'>
          <h2>Food token generator for in-house</h2>
          <p>Implemented user authentication, menu management, and token generation. Achieved seamless communication between frontend and backend components. Deployed application on a cloud hosting platform.<br/>
           Key Technologies: MERN Stack, HTML/CSS, JavaScript, Git/GitHub,RESTful APIs <br/>
           Achievements:<br/>
           - Streamlined in-house food ordering process with a fully functional token generator.<br/>
           - Implemented secure user authentication and authorization.<br/>
           - Designed intuitive user interface</p><br/>
          <p>(For admin:gokul@gmail.com   employee:sudha@gmail.com   counter:raj@gmail.com  all password:"Password@1")</p>
          <div >
          <a target='_blank' rel='noreferrer' href='https://github.com/Gokulcoder-99/Capstone-frontend'><button className='pbtn'>FrontEnd</button></a>
          <a target='_blank' rel='noreferrer' href="https://github.com/Gokulcoder-99/caspstone-backend"><button className='pbtn'>BackEnd</button></a>
          <a target='_blank' rel='noreferrer' href="https://capstone-frontend-aymk.vercel.app/"><button className='pbtn'>Live</button></a>
          </div>
        </div>
      </div>
      <div className='card'>
        <img className='projectimage' src={netflix} alt='netflix'/>
        <div className='detail'>
          <h2>Netflix-Clone</h2>
          <p>
A Netflix clone built using the MERN (MongoDB, Express.js, React, Node.js) stack is a web application designed to replicate some of the core functionalities of the popular streaming platform, Netflix.
The MERN stack Netflix clone is a web application that allows users to browse, search for, and watch a collection of movies and TV shows. It simulates the user experience of Netflix, offering features like user authentication, a dynamic homepage with recommended content, a catalog of movies and TV series, and the ability to play selected titles.</p>
    <p> email:gokul@gmail.com <br/> password:123456789 <p/>
          <div >
          <a target='_blank' rel='noreferrer' href='https://github.com/Gokulcoder-99/Netflix-Ui'><button className='pbtn'>FrontEnd</button></a>
          <a target='_blank' rel='noreferrer' href='https://github.com/Gokulcoder-99/Netflix-Server'><button className='pbtn'>BackEnd</button></a>
          <a target='_blank' rel='noreferrer' href="https://netflix-ui-omega-taupe.vercel.app/"><button className='pbtn'>Live</button></a>
          </div>
        </div>
      </div>
      <div className='card'>
        <img className='projectimage' src={chatbox} alt='chatbox'/>
        <div className='detail'>

          <h2>ChatBox</h2>
          <p>Chatbox is a versatile chatbox application built using the MERN (MongoDB, Express.js, React, Node.js) stack, designed to facilitate both one-on-one and group conversations. Whether you want to have private conversations with friends or collaborate with colleagues in a team environment, Chatbox offers a seamless and secure messaging experience.
</p>
     <p> email:gokul@gmail.com <br/> password:123456789 <p/>
          <div >
          <a target='_blank' rel='noreferrer' href='https://github.com/Gokulcoder-99/Chat-UI'><button className='pbtn'>FrontEnd</button></a>
          <a target='_blank' rel='noreferrer' href="https://github.com/Gokulcoder-99/Chat-Server"><button className='pbtn'>BackEnd</button></a>
          <a target='_blank' rel='noreferrer' href="https://chat-ui-green-omega.vercel.app/"><button className='pbtn'>Live</button></a>
          </div>
        </div>
      </div>
      <div className='card'>
        <img className='projectimage' src={expense} alt='expense'/>
        <div className='detail'>
          <h2>Expenses_Tracker</h2>
          <p>ExpenseTracker is a web application built using the MERN stack that helps users track and manage their expenses. It provides a user-friendly interface 
          for entering expenses, categorizing them, and then visualizing their spending patterns using graphs and charts.</p>
          <div >
             <p> email:gokulkrishnan072@gmail.com <br/> password:123456789 <p/>
          <a target='_blank' rel='noreferrer' href='https://github.com/Gokulcoder-99/exp-ui'><button className='pbtn'>FrontEnd</button></a>
          <a target='_blank' rel='noreferrer' href='https://github.com/Gokulcoder-99/exp-server'><button className='pbtn'>BackEnd</button></a>
          <a target='_blank' rel='noreferrer' href="https://exp-ui.vercel.app/"><button className='pbtn'>Live</button></a>
          </div>
        </div>
      </div>
    </div>
    )}
    </>
  )
}

export default Project
