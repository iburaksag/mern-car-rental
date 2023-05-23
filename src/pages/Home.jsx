import React from 'react'

import HeroSlider from '../components/UI/HeroSlider'
import Helmet from '../components/Helmet/Helmet'

import { Container, Row, Col } from 'reactstrap'
import FindCarForm from '../components/UI/FindCarForm'
import AboutSection from '../components/UI/AboutSection'
import ServicesList from '../components/UI/ServicesList'
import carData from '../assets/data/carData.js'
import CarItem from '../components/UI/CarItem'
import BecomeDriverSection from '../components/UI/BecomeDriverSection'
import Testimonial from '../components/UI/Testimonial'

import BlogList from '../components/UI/BlogList'

const Home = () => {
  return <Helmet title='Home'>
    <section className="p-0 hero__slider-section">
      <HeroSlider />
      <div className="hero__form">
        <Container>
          <Row className='hero__row'>
            <Col lg={4} md={4}>
              <div className="find__cars-left">
                <h2 className='text-center'>Find your best car here</h2>
              </div>
            </Col>

            <Col lg={8} md={8} sm={12}>
              <FindCarForm />
            </Col>
          </Row>
        </Container>
      </div>
    </section>

    { /* About Section */ }

    <AboutSection/>


    { /* Services Section */ }

    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5 text-center'>
            <h6 className="section__subtitle">See our</h6>
            <h2 className='section__title'>Popular Services</h2>
          </Col>
          <ServicesList/>
        </Row>
      </Container>
    </section>
    

    { /* Become a Driver Section */ }
    <BecomeDriverSection/>

    { /* Testimonial Section */ }

    <section>
      <Container>
        <Row>
          <Col lg='12' className="mb-4 text-center">
            <h6 className='section__subtitle'>Our clients says</h6>
            <h2 className='section__title'>Our clients says</h2>
          </Col>

          <Testimonial/>
        </Row>
      </Container>
    </section>


        {/* Blog section */}

      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5 text-center'>
              <h6 className='section__subtitle'>Explore our blogs</h6>
              <h2 className='section__title'>Latest Posts</h2>
            </Col>
            <BlogList />
          </Row>
        </Container>
      </section>

  </Helmet>
}

export default Home 