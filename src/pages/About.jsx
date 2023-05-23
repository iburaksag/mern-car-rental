import React from 'react'

import CommonSection from "../components/UI/CommonSection"
import Helmet from '../components/Helmet/Helmet'
import AboutSection from '../components/UI/AboutSection'
import { Container, Row, Col } from 'reactstrap'
import BecomeDriverSection from '../components/UI/BecomeDriverSection'

import driverImg from '../assets/all-images/drive.jpeg'
import OurMembers from '../components/UI/OurMembers'
import '../styles/about.css'

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title='About' />
      <AboutSection aboutClass='aboutPage'/>

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg='6' md='6' sm='12'>
              <div className="about__page-img">
                <img src={driverImg}  alt="" className='w-100 rounded-3' />
              </div>
            </Col>

            <Col lg='6' md='6' sm='12'>
              <div className="about__page-content">
                <h2 className='section__title'>We are committed to provide safe ride solutions</h2>
                
                <p className='section__description'>
                In order to ensure that there are no technical problems with our vehicles, we offer a detailed maintenance service before we deliver our vehicles to you. If you have a technical problem on the way, we reach the scene immediately and save you from this difficult situation. 
                </p>

                <p className='section__description'>
                Since the first principle of our company is customer health and satisfaction, we work more and more every day for your satisfaction. Keep choosing us!
                </p>

                <div className='d-flex align-items-center gap-3 mt-4'>
                  <span className='fs-4'><i class="ri-phone-line"></i></span>

                  <div>
                    <h6 className='section__subtitle'>Need Any Help?</h6>
                    <h4>+353 89 353 3533</h4>
                  </div>
                </div>
              </div>

            </Col>
          </Row>
        </Container>
      </section>

      <BecomeDriverSection/>

      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5 text-center'>
              <h6 className='section__subtitle'>Experts</h6>
              <h2 className='section__title'>Our Members</h2>
            </Col>
            <OurMembers/>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default About