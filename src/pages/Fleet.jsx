import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Spinner } from 'reactstrap'
import { getFleet } from '../axios'
import Helmet from '../components/Helmet/Helmet'
import Message from '../components/Message'
import CommonSection from '../components/UI/CommonSection'
import FleetItem from '../components/UI/FleetItem'

const Fleet = () => {
  const { isLoading, data } = useQuery(["cars"], () => getFleet().then(res => res.data))

  return (
    <Helmet title='Fleet'>
    <CommonSection title="Fleet Listing" />

    <section>
      <Container>
        {/* { popupOpen && <DetailsPopup /> } */}
        {
          (isLoading) ?
        <div style={{ display:"flex", justifyContent: "center"}}>
          <Spinner />
        </div>
        :
        <Row>
          {
            data?.length > 0 ? 
            <>
            {
              data?.map((item) => (
                <FleetItem item={item} key={item.id} />
                )) 
            }
            </>
          : <Message color="danger">This page is under maintenance, <Link to="/home">go back</Link></Message>} 
          
        </Row>
        }
      </Container>
    </section>
  </Helmet> 
  )
}

export default Fleet