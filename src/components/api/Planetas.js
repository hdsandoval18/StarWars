import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import planets from '../../components/img/planets.jpg'


export const PlaneApi = () => {
    const [Planetas,setPlanetas] = useState ([]);
    useEffect(()=> {
        async function plan () {
            const yei = await fetch ('https://swapi.dev/api/planets/');
            const uz = await yei.json();
            setPlanetas(uz.results);
        }
        plan();
    },[])
  return (
    <div className='planets'>
    {Planetas.map(Planetas=>(
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={planets} />
    
    <Card.Body>
            <div className='planets_card' key={Planetas.name}>
                <p>{ Planetas.name }</p>
                <p>{ Planetas.rotation_period}</p>
                <p>{ Planetas.orbital_period}</p>
                <p>{ Planetas.diameter}</p>
                <p>{ Planetas.climate}</p>
                <p>{ Planetas.gravity}</p>
                <p>{ Planetas.terrain}</p>
                <p>{ Planetas.population}</p>
                <p>{ Planetas.terrain}</p>
            </div>
            <Button variant="primary">Ver mas</Button>
      </Card.Body>
    </Card>
        
        ))}
    </div>
   
  )
}

          