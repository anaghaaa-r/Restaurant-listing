import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function RestaurantCard({details}) {
  return (
    <Link style={{textDecoration: 'none'}} to={`/details/${details.id}`}>
    <Card className='my-3 p-3'>
      <Card.Img src={details.photograph} className="p-3" variant='top' />
      <Card.Body>
        <Card.Title>
          <h4>{details.name}</h4>
        </Card.Title>
        <Card.Text>
          <p><strong>Cuisine: {details.cuisine_type}</strong></p>
        </Card.Text>
        <p>{details.neighborhood}</p>
      </Card.Body>
    </Card>
    </Link>
  )
}

export default RestaurantCard