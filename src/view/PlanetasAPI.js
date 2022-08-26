import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import {Planetas} from '../components/api/Planetas';


function PlanetasAPI () {
  return (
     <div><Navbar/>
         <Planetas/>
         <div className='footer'>
         <Footer />
       </div> 
    </div>
  )
}

export default PlanetasAPI
