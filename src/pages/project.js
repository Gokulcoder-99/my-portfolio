import React from 'react'
import './project.css'
import admin from '../assests/projectimage/admin.png'
import zoro from '../assests/projectimage/zoro.png' 
import weatherapi from '../assests/projectimage/weatherapi.png'
import webscraper from '../assests/projectimage/webscraper.png'
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
           - Designed intuitive user interface</p>
          <div >
          <a target='_blank' rel='noreferrer' href='https://github.com/Gokulcoder-99/Capstone-frontend'><button className='pbtn'>FrontEnd</button></a>
          <a target='_blank' rel='noreferrer' href="https://github.com/Gokulcoder-99/caspstone-backend"><button className='pbtn'>BackEnd</button></a>
          <a target='_blank' rel='noreferrer' href="https://capstone-frontend-aymk.vercel.app/"><button className='pbtn'>Live</button></a>
          </div>
        </div>
      </div>
      <div className='card'>
        <img className='projectimage' src={admin} alt='admin'/>
        <div className='detail'>
<<<<<<< HEAD
          <h2>AdminDashboard</h2>
          <p>Admin Dashboard  using React, Material UI, Nivo Charts, Formik, Yup, FullCalendar, and Data Grid to build this entire application. This application consists of Light and Dark Mode, 4 different Charts, 3 different Data Table Pages, FAQ Page, Form Page, and Calendar Integration.</p>
          <div >
          <a target='_blank' rel='noreferrer' href='https://github.com/Gokulcoder-99/react-admin'><button className='pbtn'>FrontEnd</button></a>
          <a target='_blank' rel='noreferrer' href="https://react-admin-e73s.vercel.app/"><button className='pbtn'>Live</button></a>
          </div>
        </div>
      </div>
      <div className='card'>
        <img className='projectimage' src={webscraper} alt='webscraper'/>
        <div className='detail'>
=======
>>>>>>> ec6e61bf939b3ec2b15484b1e7a1ccdd77a386ba
          <h2>Webscraper(HACKATHON)</h2>
          <p>Scrap product data from E-Commerce websites.<br/>
             The scrapping of the data should be done for the following Websites.<br/>
              → Flipkart<br/>
              → Amazon<br/>
              → Snapdeal<br/>
              Design a search bar Page and Search button with a logo to display the stored data from the Database in the User Interface.<br/>
              Autofill requests of the search term from the database should happen simultaneously when the user presses the key in the search bar.<br/>
              pagination to display the results.<br/>
</p>
          <div >
          <a target='_blank' rel='noreferrer' href='https://github.com/Gokulcoder-99/webscraper-frontend'><button className='pbtn'>FrontEnd</button></a>
          <a target='_blank' rel='noreferrer' href="https://github.com/Gokulcoder-99/webscraper-backend"><button className='pbtn'>BackEnd</button></a>
          <a target='_blank' rel='noreferrer' href="https://webscraper-frontend-xi.vercel.app/"><button className='pbtn'>Live</button></a>
          </div>
        </div>
      </div>
      <div className='card'>
        <img className='projectimage' src={weatherapi} alt='weatherapi'/>
        <div className='detail'>
          <h2>Weather API</h2>
          <p>Bootstrap framework to develop a dynamic web application showcasing my proficiency in frontend development and API integration. Integrated a RESTful countries API to provide comprehensive weather information for multiple locations. Implemented a user-friendly interface displaying real-time weather updates, ensuring a seamless and engaging experience for users. This project demonstrated my skills in data visualization, API utilization, and utilizing Bootstrap to create visually appealing and responsive designs.</p>
          <div >
          <a target='_blank' rel='noreferrer' href='https://github.com/Gokulcoder-99/rest-countries-day-18'><button className='pbtn'>FrontEnd</button></a>
          <a target='_blank' rel='noreferrer' href="https://gokulcoder-99.github.io/rest-countries-day-18/"><button className='pbtn'>Live</button></a>
          </div>
        </div>
      </div>
    </div>
    )}
    </>
  )
}

export default Project
