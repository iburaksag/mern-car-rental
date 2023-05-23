import React, { useEffect, useState } from 'react'
import { Col } from 'reactstrap'
import '../../styles/car-item.css'
import moment from 'moment'



 
const CarItem = (props) => {

const { pickupLocation, dropoffLocation, pickupDate, dropoffDate, carName, status, carImageUrl, price } = props.item

  return <Col lg={4} md={4} sm={6} className='mb-5'>
    <div className="car__item">
        <div className="car__img" style={{ display: "flex", justifyContent: "center"}}>
            <img src={carImageUrl} alt=""  />
        </div>
        <div className="car_item-content mt-4">
            <h4 className="section__title text-center">{carName}</h4>
            
            <h6 className="rent__price text-center mt-">€{price}</h6>

                <div>
                    <span style={{ fontWeight: "bold"}}>Pickup Location:</span> {pickupLocation}
                </div>
                <div>
                    <span style={{ fontWeight: "bold"}}>Pickup Date:</span> {moment(pickupDate).format("MMMM Do YYYY")}
                </div>

            <div>
                <span style={{ fontWeight: "bold"}}>Dropoff Location:</span> {dropoffLocation}
            </div>
            <div>
                <span style={{ fontWeight: "bold"}} >Dropoff Date:</span> {moment(dropoffDate).format("MMMM Do YYYY")}
            </div>

            <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
                <span className='d-flex align-items-center gap-1'><i class='ri-timer-flash-line'></i>Unlimited Mileage</span>
            </div>

            <div>
                <span style={{ fontWeight: "bold"}}>Status:</span> { status === "INIT" ? <h3 style={{ color: "rgb(249, 139, 1)", fontWeight: "bold"}}>Waiting for approval.</h3> 
                : status === "APPROVED" ?     
                <h3 style={{ color: "#009900", fontWeight: "bold"}}>Approved.</h3> 
                : <h3 style={{ color: "#CC0000", fontWeight: "bold"}}>Rejected.</h3>  
            }
            </div>
        </div>
    </div>
  </Col>
}

export default CarItem