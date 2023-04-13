import React, { useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listRestaurants } from '../actions/restaurantAction';
import { AiOutlineMail, AiOutlinePhone, AiFillFacebook, AiFillInstagram } from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg';
import '../styles/ContactUs.css'

function ContactUs() {
    const navigate = useNavigate();
    const params = useParams();
    const dispatch = useDispatch()

    const restoData = useSelector(state => state.restaurantReducer)
    const { resto } = restoData

    useEffect(() => {
        dispatch(listRestaurants())
    }, [])
    console.log("resto: ", resto)
    
    const details = resto.find((i) => i.id == params.id)
    console.log("details: ", details)
    
  return (
    <div className=''>
        <Button variant='outline-dark' size='sm' className='my-2 rounded' onClick={() => navigate(-1)}>Back</Button>
        {details ?(
            <div>
                <header><h1 className='head'>Contact Us</h1>
                    <div className='divider'></div>
                    <h3 className='subhead'>HOW TO GET IN TOUCH ?</h3>
                    <p>ways to get in touch with us...</p>
                </header>
                
                <Row>
                    <Col md={6} lg={6} xl={6} sm={12} >
                        <Container>
                        <section>
                            <h5>CALL US: </h5>
                            <p><AiOutlinePhone className='icon'/> <Link to={`tel: ${details.contact.phone}`} className='links'>
                                {details.contact.phone}</Link></p>
                            <h5>EMAIL US: </h5>
                            <p><AiOutlineMail className='icon'/> <Link to={`mailto: ${details.contact.email}`} className='links'>
                                {details.contact.email}</Link></p>
                        </section>
                        </Container>
                    </Col>
                    <Col md={6} lg={6} xl={6} sm={12}>
                        <Container>
                        <section>
                            <h5>VISIT OUR WEBSITE: </h5>
                            <p><CgWebsite className='icon' /> <Link to={`${details.contact.website}`} className='links'>
                                {details.name}</Link></p>
                            <h5>OUR SOCIALS: </h5>
                            <p><Link to={`${details.contact.facebook}`}><AiFillFacebook className='socials'/></Link>
                            <Link to={`${details.contact.instagram}`}><AiFillInstagram className='socials'/></Link></p>
                        </section>
                        </Container>
                        
                    </Col>
                </Row>
            </div>
        ): "null"}
    </div>
  )
}

export default ContactUs