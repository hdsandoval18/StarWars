import Navbar from '../components/navbar/Navbar';
import Slider from '../components/slider/Slider';
import Texto from '../components/texto/Texto';
import Cards from '../components/cards/Cards';
import Footer from '../components/footer/Footer';
import tarjet1 from '../components/img/tarjet1.jpg';
import tarjet2 from '../components/img/tarjet2.jpg';
import tarjet3 from '../components/img/tarjet3.jpg';


import React from 'react'
 
 const Home = () => {
   return (
     <div>
     <Navbar/>
    
     <Slider/>
     <Texto/>
     <div className='tarjetas'>
       <Cards
         Imagen={tarjet1}
         Title="Star Wars"
         Text="Una nueva esperanza"
         Buttons="Ver mas" />
       <Cards
         Imagen={tarjet2}
         Title="Star Wars"
         Text="El ataque de los clones"
         Buttons="Ver mas" />
       <Cards
         Imagen={tarjet3}
         Title="Star Wars"
         Text="La amenaza fantasma"
         Buttons="Ver mas" />
      </div>
      <div className='footer'>
         <Footer />
       </div>
     
     </div>
     )
 }
 
 export default Home