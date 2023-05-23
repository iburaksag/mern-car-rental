import React from 'react'
import '../../styles/booking-form.css'
import { Form, FormGroup, Spinner } from 'reactstrap'
import { useQuery } from '@tanstack/react-query'
import { me } from '../../axios'

const BookingForm = ({ bookingInformation, setBookingInformation }) => {
    const { isFetching, data } = useQuery(["me"], () => me().then(res => res.data))

    const submitHandler = event => {
        event.preventDefault();
    }
  return isFetching ? 
  <div style={{ display:"flex", justifyContent: "center"}}>
    <Spinner />
  </div> : <Form onSubmit={submitHandler}>
  <FormGroup className='booking__form d-inline-block w-100 me-4 mb-4'>
      <input disabled value={data.fullName} type="text" placeholder='Full Name' />
  </FormGroup>

  <FormGroup className='booking__form d-inline-block me-4 mb-4'>
      <input disabled value={data.email} type="email" placeholder='Email' />
  </FormGroup>

  <FormGroup className='booking__form d-inline-block ms-1 mb-4'>
      <input type="number" onChange={(e) => { setBookingInformation({...bookingInformation, phone: e.target.value})}} placeholder='Phone Number' required />
  </FormGroup>

  <FormGroup>
      <textarea onChange={(e) => { setBookingInformation({...bookingInformation, message: e.target.value})}} rows="5" type='textarea' className='textarea' placeholder='Add note'></textarea>
  </FormGroup>
</Form>
    
  
}

export default BookingForm