import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card } from 'react-bootstrap'
import { Reviews } from './Reviews'
// import { useSelector } from 'react-redux'


function RestaurantDetails() {

  const [data, setData] = useState([])
  const params = useParams()

  const fetchData = async () => {
    await fetch('/restaurants.json')
      .then((res) => res.json())
      .then((item) => setData(item.restaurants))
  }

  useEffect(() => {
    fetchData()
  }, [])

  console.log("RestaurantDetails data: ", data)
  console.log("params id: ", params.id)

  const details = data.find((i) => i.id == params.id)
  console.log("RestaurantDetails params-data: ", details)

  // calling data from store
  // console.log("params id: ", params.id)
  // const restaurantData = useSelector(state => state.restaurantReducer)
  // const { resto } = restaurantData
  // console.log("RestaurantDetails data: ", resto)
  // const details = resto.find((i) => i.id == params.id)
  // console.log("RestaurantDetails params-data: ", details)

  return (
    <div>
      <Link className='btn btn-outline-dark my-2 rounded btn-sm' to='/'>Back</Link>
      {details ? (
        <Row className='my-3'>
          <Col md={3}>
            <Image className='img' src={details.photograph} fluid />
          </Col>
          <Col md={4}>
            <ListGroup>
              <ListGroup.Item>
                <h2>{details.name}</h2>
                <h2>{details.neighborhood}</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>Cuisnie: {details.cuisine_type}</p>
                <p>Address: {details.address}</p>
                <p><Link className='btn btn-primary' to={`/contact-us/${details.id}`}>Contact Us</Link></p>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={4}>
            <ListGroup>
              <ListGroup.Item>
                <h4>Operating Hours: </h4>
                <p>Monday: {details.operating_hours.Monday}</p>
                <p>Tuesday: {details.operating_hours.Tuesday}</p>
                <p>Wednesday: {details.operating_hours.Wednesday}</p>
                <p>Thursday: {details.operating_hours.Thursday}</p>
                <p>Friday: {details.operating_hours.Friday}</p>
                <p>Saturday: {details.operating_hours.Saturday}</p>
                <p>Sunday: {details.operating_hours.Sunday}</p>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Row>
            <Card className='my-3 mx-3 p-3 rounded card'>
              <Reviews data={details.reviews} />
            </Card>
            <img src={details.logo} class="img" alt="logo" />
          </Row>
        </Row>
      ) : 'null'}
    </div>
  )
}

export default RestaurantDetails