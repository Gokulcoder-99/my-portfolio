import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import'./contact.css'
import { Dna  } from  'react-loader-spinner'
import {useState , useEffect} from 'react'

  const Contact = () => {
    const [loading,setLoading]=useState(true);
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000);
      
      return () => clearTimeout(timer);
    }, []);
    
    const form = useRef()
    const position =[13.144429 , 80.035699 ]
    
    
    const sendEmail = (e) => {
      e.preventDefault()
      
      emailjs
      .sendForm('service_xb2xo8a', 'template_sudvqnh', form.current, 'mx-dAhjZR7s4YKcDj')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
        )
      }
      
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
    <div className='contact'>
      <div className="container">
        <div className="text-zone">
          <h1>
            Contact
          </h1>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="map">
          <div className='box'>
          <MapContainer center={position} zoom={13} className="location">
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="Map data &copy; OpenStreetMap contributors"
              />
              <Marker position={position}>
                <Popup>Hi,I'm here<br/>
                  Gokulakrishnan
                </Popup>
              </Marker>
          </MapContainer>
          </div>
        </div>
      </div>
      </div>)}
      </>
  )
}

export default Contact