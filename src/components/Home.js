import React from 'react';
// import { useState } from 'react';
import { useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { listRestaurants } from '../actions/restaurantAction';


function Home() {

  // const [restaurant, setRestaurant] = useState([])
  // const fetchData = async () =>{
  //   await fetch('/restaurants.json')
  //   .then((res) => res.json())
  //   .then((item) => setRestaurant(item.restaurants))
  // }
  // console.log("data: ", restaurant)

  const dispatch = useDispatch()
  const restaurantData = useSelector(state => state.restaurantReducer)
  const { resto } = restaurantData

  useEffect(() => {
    // fetchData()
    dispatch(listRestaurants())
  }, [])
  console.log("Home data: ", resto)

  return (
    <Row>
      {resto?.map((items) => (
        <Col sm={12} md={8} lg={6} xl={3}>
          <RestaurantCard details={items} />
        </Col>
      ))}
    </Row>
  )
}

export default Home