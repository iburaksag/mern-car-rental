import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import '../../styles/about-section.css'
import aboutImg from '../../assets/all-images/cars-img/about-cars.png'

const AboutSection = ({aboutClass}) => {
  return <section className='about__section' style={aboutClass === 'aboutPage' ? { marginTop : '0px' } : { marginTop:'180px' }}>
    <Container>
        <Row>
            <Col lg='6' md='6'>
              <div className='about__section-content'>
                <h4 className='section__subtitle'>About Us</h4>
                <h2 className="section__title">Welcome to BuRent Car : Rent a Car Service</h2>
                <p className="section__description text-justify">BuRent Car, established in 2022, is a car rental company that has surpassed all of the leading car rental companies in the sector in a short time. BuRent Car, which always offers new and safe vehicles and high service quality in this sector, has become one of the leading players of the car rental industry in a short time, combining the corporate automotive industry experience of the group under its umbrella for more than 30 years, with its innovative vision and expert staff.</p>

                <div className='about__section-item d-flex align-items-center'>
                  <p className='section__description d-flex align-items-center gap-2'>
                    <i class="ri-checkbox-circle-line"></i> Quality Services
                  </p>

                  <p className='section__description d-flex align-items-center gap-2' style={{marginLeft:'35px'}}>
                    <i class="ri-checkbox-circle-line"></i> Cheap Prices
                  </p>
                </div>

                  
                <div className='about__section-item d-flex align-items-center'>
                  <p className='section__description d-flex align-items-center gap-2'>
                    <i class="ri-checkbox-circle-line"></i> Good User Experience
                  </p>

                  <p className='section__description d-flex align-items-center gap-2'>
                    <i class="ri-checkbox-circle-line"></i> Easy and smooth
                  </p>
                </div>
              </div>
            </Col>

            <Col lg='6' md='6'>
              <div className="about__img">
                <img src={aboutImg} alt="" className="w-100"/>
              </div>
            </Col>
        </Row>
    </Container>

  </section>
}

export default AboutSection