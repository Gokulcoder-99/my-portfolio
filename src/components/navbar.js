import React from 'react'
import { NavLink,Link } from 'react-router-dom';
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import logo from '../assests/logo-g.png'

function Navbar () {
  return (
    <div className='sidebar'>
      <div className='logo'>
        <Link to="/">
        <img src={logo} alt='logo' /> 
        </Link>
      </div>
      <div className='navbar'>
        <nav>
          <ul>
            <li><NavLink exact="true" activeclassname="active" to="/" title="Home"><FontAwesomeIcon icon={faHome} /></NavLink></li>
            <li><NavLink exact="true" activeclassname="active" className="about-link" to="/about" title="About"><FontAwesomeIcon icon={faUser} /> </NavLink></li>
            <li><NavLink exact="true" activeclassname="active" className="project-link" to="/project" title="Project"><FontAwesomeIcon icon={faProjectDiagram} /> </NavLink></li>
            <li><NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" title="Contact"><FontAwesomeIcon icon={faEnvelope} /></NavLink></li>
          </ul>
        </nav>
        </div>
        <div className='anchor'>
        <ul>
          <li><a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/gokulakrishnan-k-ab7712169/'><FontAwesomeIcon icon={faLinkedin}/></a></li>
          <li><a target='_blank' rel='noreferrer' href='https://github.com/Gokulcoder-99'><FontAwesomeIcon icon={faGithub}/></a></li>
          <li><a target='_blank' rel='noreferrer' href='gokulkrishnan@gmail.com'><FontAwesomeIcon icon={faGoogle} /></a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;