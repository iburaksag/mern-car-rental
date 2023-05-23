import React from 'react'
import '../../styles/become-driver.css'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import driverImg from '../../assets/all-images/cars-img/bmw-offer.png'
import { notifyManager } from '@tanstack/react-query'

const BecomeDriverSection = () => {
  return (
  <section className='become__driver'>
    <Container>
        <Row>
            <Col lg='6' md='6' sm='12' className='become__driver-img'>
                <img src={driverImg} alt="" className='w-100' />
            </Col>

            <Col lg='6' md='6' sm='12'>
                <h2 className="section__title become__driver-title text-center mt-5">
                    Do you have a vehicle you want to add to our fleet?
                </h2>
                <button className="btn become__driver-btn mt-4" style={{marginLeft:250}}>
                    <Link to="/fleet" className='link__text'>
                        <i class="ri-eye-line"></i> Check out our Fleet
                    </Link>
                </button>
            </Col>
        </Row>
    </Container>
  </section>
  );
}

export default BecomeDriverSection