import React, { useState } from 'react'
import { Col } from 'reactstrap'
import '../../styles/car-item.css'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { me } from '../../axios'
import { useNavigate } from 'react-router-dom'

 
const CarItem = (props) => {
    const navigate = useNavigate()

    const { data } = useQuery(["me"], () => me().then(res => res.data))

    const { carImageUrl, carName, passengers, price, priceFor, transmission } = props.item

  return <Col lg={4} md={4} sm={6} className='mb-5'>
    <div className="car__item">
        <div className="car__img" style={{ display: "flex", justifyContent: "center"}}>
            <img src={carImageUrl} alt=""  />
        </div>
        <div className="car_item-content mt-4">
            <h4 className="section__title text-center">{carName}</h4>
            
            <h6 className="rent__price text-center mt-">{price} <span>/ {priceFor}</span></h6>

            <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
                <span className='d-flex align-items-center gap-1' style={{ whiteSpace: "nowrap"}}><i class='ri-car-line'></i>{passengers}</span>
                <span className='d-flex align-items-center gap-1'><i class='ri-settings-2-line'></i>{transmission}</span>
                <span className='d-flex align-items-center gap-1'><i class='ri-timer-flash-line'></i>Unlimited Mileage</span>
            </div>
        </div>

        <button onClick={(e) => {
            if(!data?.email) { navigate("/login") } 
            else {
                navigate(`/cars/${carName}`, { state: { carInformation: props.item }})
            }
        }} className="w-50 car__item-btn car__btn-rent">
            <span style={{ color: "white"}}>Rent</span>
        </button>

        <button onClick={(e) => { props.setPopupOpen(true) }} className="w-50 car__item-btn car__btn-details">
            Details
        </button>
    </div>
  </Col>
}

export default CarItem