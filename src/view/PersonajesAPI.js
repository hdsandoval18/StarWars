import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import {Personajes} from '../components/api/Personajes';


function PersonajesAPI() {
  return (
    <div><Navbar/>
         <Personajes/>
         <div className='footer'>
         <Footer />
       </div> 
    </div>
  )
}

export default PersonajesAPI      