import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import { useLocation, useParams } from "react-router-dom" 

import BookingForm from "../components/UI/BookingForm"
import PaymentMethod from '../components/UI/PaymentMethod'


const CarDetails = () => {

  const location = useLocation()
  const singleCarItem = location.state.carInformation

  const [bookingInformation, setBookingInformation] = useState({
    phone: "",
    message: ""
  })

  useEffect(()=>{
    window.scrollTo(0,0);
  },[singleCarItem])

  return <Helmet title={ singleCarItem.carName }>
    <section>
      <Container>
        <Row>
          <Col lg={3}>
            <img src={singleCarItem.carImageUrl} alt=""  />
          </Col>

          <Col lg={9}>
            <div className="car__info" >
              <h2 className='section__title'>{singleCarItem.carName}</h2>

              <div className="d-flex align-items-center gap-5 mb-4 mt-3">
                <h6 className="rent__price fw-bold fs-4">
                  {singleCarItem.price} {singleCarItem.priceFor}
                </h6>
              </div>

              <div className='d-flex align-items-center mt-3' style={{columnGap: '6rem'}}>
                <span className='d-flex align-items-center gap-1 section__description'>
                  <i class="ri-roadster-line" style={{color:'#f9a9826'}}></i> {singleCarItem.carName}
                </span>

                <span className='d-flex align-items-center gap-1 section__description'>
                  <i class="ri-settings-2-line" style={{color:'#f9a9826'}}></i> {singleCarItem.transmission}
                </span>

                <span className='d-flex align-items-center gap-1 section__description'>
                  <i class="ri-timer-flash-line" style={{color:'#f9a9826'}}></i> Unlimited Mileage
                </span>
              </div>
              <div className='d-flex align-items-center mt-3' style={{columnGap: '2.8rem'}}>
                <span className='d-flex align-items-center gap-1 section__description'>
                  <i class="ri-map-pin-line" style={{color:'#f9a9826'}}></i> <span style={{ fontWeight: "bold"}}>Pickup Location:</span> {singleCarItem.pickupLocation}
                </span>

                <span className='d-flex align-items-center gap-1 section__description'>
                  <i class="ri-account-circle-line" style={{color:'#f9a9826'}}></i> {singleCarItem.passengers}
                </span>
              </div>
              <div className='d-flex align-items-center mt-3' style={{columnGap: '2.8rem'}}>
                <span className='d-flex align-items-center gap-1 section__description'>
                  <i class="ri-map-pin-line" style={{color:'#f9a9826'}}></i> <span style={{ fontWeight: "bold"}}>Dropoff Location:</span> {singleCarItem.dropoffLocation}
                </span>
              </div>
            </div>
          </Col>

          <Col lg='7' className='mt-5'>
            <div className="booking-info mt-5">
              <h5 className='mb-4 fw-bold'>Booking Information</h5>
              <BookingForm bookingInformation={bookingInformation} setBookingInformation={setBookingInformation} />
            </div>
          </Col>

          
          <Col lg='5' className='mt-5'>
            <div className="payment__info mt-5">
              <h5 className='mb-4 fw-bold'>Payment Information</h5>
              <PaymentMethod carInformation={singleCarItem} bookingInformation={bookingInformation} />
            </div>
          </Col>

        </Row>
      </Container>
    </section>

  </Helmet>
}

export default CarDetails