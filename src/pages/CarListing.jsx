import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Spinner } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import CarItem from '../components/UI/CarItem'
import { Link, useLocation } from 'react-router-dom'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getCars } from '../axios'
import Message from '../components/Message'


const CarListing = () => {
  const [popupOpen, setPopupOpen] = useState(false)
  const DetailsPopup = () => (
    <div
        style={{
            position:"fixed",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background:"rgba(0,0,0,0.5)",
            zIndex: 999,
            top:0,
            left:0,
            height: "100vh"
        }}
    >
      <div style={{ display: "flex", background: "whitesmoke", padding: 50,  flexDirection: "column"}}>
        <div style={{ display: "flex", marginBottom: 15}}>
            <i style={{ fontSize: 30, marginRight: 15}} class='ri-timer-flash-line'></i>
            <div style={{ display: "flex", flexDirection: "column"}}>
                <h3>Unlimited mileage</h3>
                <h5>Your rental includes unlimited free kilometres.</h5>
            </div>
        </div>
        <div style={{ display: "flex", marginBottom: 15}}>
            <i style={{ fontSize: 30, marginRight: 15}} class='ri-gas-station-fill'></i>
            <div style={{ display: "flex", flexDirection: "column"}}>
                <h3>Fuel Policy</h3>
                <h5>Customers can return the car as they wish. Should the car return less than full, the customer will be charged a local refuelling fee plus the standard fuel price per litre.</h5>
            </div>
        </div>
        <div style={{ display: "flex", marginBottom: 15}}>
            <i style={{ fontSize: 30, marginRight: 15}} class='ri-pencil-fill'></i>
            <div style={{ display: "flex", flexDirection: "column"}}>
                <h3>Free amendments</h3>
                <h5>You can amend your booking at any time up to 4 Hours before your pick up time. FREE OF CHARGE.</h5>
            </div>
        </div>
        <div style={{ display: "flex", marginBottom: 15}}>
            <i style={{ fontSize: 30, marginRight: 15}} class='ri-bank-card-fill'></i>
            <div style={{ display: "flex", flexDirection: "column"}}>
                <h3>Deposit / Insurance</h3>
                <h5>*A pre-authorisation of the excess amount (€1500-€2500) is required.</h5>
            </div>
        </div>
        <div
        style={{          
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: 24,
            color: "greenyellow",
            borderRadius: 8,
            marginBottom: 20,
            cursor: "pointer"

        }}
          onClick={(e) => {
            setPopupOpen(false);
          }}
        >
          <h3 style={{ justifyContent:"center", marginTop: 50, background: "green", color: "white", padding: 8, borderRadius: 8, display: "flex"}} >
            Okey
          <i className='ri-checkbox-circle-fill' style={{ marginLeft: 6}}></i>
          </h3>
        </div>
      </div>
    </div>
)

  const location = useLocation()
  const [cars, setCars] = useState([])
  const [sortDown, setSortDown] = useState(true)

  const { isLoading, isFetching, data } = useQuery(["cars"], () => getCars(location.state.params).then(res => res.data))
  
  useEffect(() => {
    setCars(data)} , [data])

  return <Helmet title='Cars'>
    <CommonSection title="Car Listing" />

    <section>
      <Container>
        { popupOpen && <DetailsPopup /> }
        {
          (isLoading || isFetching) ?
        <div style={{ display:"flex", justifyContent: "center"}}>
          <Spinner />
        </div>
        :
        <Row>
          {
            data?.length > 0 ? 
            <>
            <Col lg={12}>
              <div className="d-flex aliogn-items-center gap-3 mb-5">
                <span className='d-flex align-items-center gap-2'>
                   Sort By
                </span>
                <div style={{ cursor: "pointer"}} onClick={(e) => {
                  
                  const copy = [...cars]
                  if(sortDown) {
                    copy.sort((a,b) => { return parseInt(b.price.substring(1)) - parseInt(a.price.substring(1)) })
                  } else {
                    copy.sort((a,b) => { return parseInt(a.price.substring(1)) - parseInt(b.price.substring(1)) })
                  }

                  setSortDown(!sortDown)
                  setCars(copy)
              }}>
                <div style={{ borderBottom: "2px solid green", padding: 5}}>
                  {sortDown ? <span className="d-flex ">Price Low to High <i className="ri-sort-asc" style={{ marginLeft: 4}}></i></span> : 
                  <span className="d-flex ">Price High to Low <i className="ri-sort-desc" style={{ marginLeft: 4}}></i></span>
                  }

                </div>
                </div>
              </div>
            </Col>
          
            {
              cars?.map((item) => (
                <CarItem setPopupOpen={setPopupOpen} item={item} key={item.id} />
                )) 
            }
            
            </>
          : <Message color="danger">Couldn't find a car with the required specifications, <Link to="/home">go back</Link></Message>} 
          
        </Row>
        }
      </Container>
    </section>
  </Helmet> 
}

export default CarListing