import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';

function BasicExample({Text,Title,Buttons,Imagen}) {
  return (
   
    <Card className="duvan" style={{ width: '18rem' }}>
       <div className="cares">
      <Card.Img variant="top" src={Imagen}/>
      <Card.Body>
        
        <Card.Title>{Title}</Card.Title>
        <Card.Text>
         {Text}
        </Card.Text>
        <Button variant="primary">{Buttons} </Button>
      </Card.Body>
      </div>
    </Card>
    
    
  );
}

export default BasicExample;