import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import person from '../../components/img/person.jpg'

export const Personajes = () => {

  const [people, setPeople] = useState([]);

    useEffect(()=> {
        async function fetchpeople(){
            const personaje = await fetch ('https://swapi.dev/api/people/');
            const data = await personaje.json();
            setPeople(data.results);

        }
        fetchpeople();
    },[])
  return (
    
    <div className='person'>
      {people.map(people=>(
      <Card  style={{ width: '18rem' }}>
      <Card.Img variant="top" src={person} />
      
      <Card.Body>
        <div className='person_card' key={setPeople}>
                <p>{people.height}</p>
                <p>{people.name }</p>
                <p>{people.mass}</p>
                <p>{people.hair_color}</p>
                <p>{people.skin_color}</p>
                <p>{people.eye_color}</p>
                <p>{people.birth_year}</p>
                <p>{people.gender}</p>
            </div>
        <Button variant="primary">Ver mas</Button>
      </Card.Body>
    </Card>
        
        ))}
    </div>
   
  )
}