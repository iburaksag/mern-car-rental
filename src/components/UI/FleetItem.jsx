import React from 'react'
import { Col } from 'reactstrap'
import '../../styles/car-item.css'

 
const FleetItem = (props) => {

    const { carImageUrl, carName, passengers, doors, transmission } = props.item

  return <Col lg={4} md={4} sm={6} className='mb-5'>
    <div className="car__item">
        <div className="car__img" style={{ display: "flex", justifyContent: "center"}}>
            <img height={150} src={carImageUrl} alt=""  />
        </div>
        <div className="car_item-content mt-4">
            <h4 className="section__title text-center">{carName}</h4>

            <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4" style={{ flexDirection: "column"}}>
                <span className='d-flex align-items-center gap-1' style={{ whiteSpace: "nowrap"}}><i class='ri-car-line'></i>{passengers}</span>
                <span className='d-flex align-items-center gap-1'><i class='ri-timer-flash-line'></i>{doors}</span>
                <span className='d-flex align-items-center gap-1'><i class='ri-settings-2-line'></i>{transmission}</span>
            </div>
        </div>

{/* 
        <button onClick={(e) => { props.setPopupOpen(true) }} className="w-50 car__item-btn car__btn-details">
            Details
        </button> */}
    </div>
  </Col>
}

export default FleetItem