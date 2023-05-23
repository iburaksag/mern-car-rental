import React from 'react'

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import '../../styles/footer.css';

const quickLinks = [
  {
    path:'/about',
    display:'About'
  },
  {
    path:'#',
    display:'Privacy Policy'
  },
  {
    path:'/fleet',
    display:'Fleet'
  },
  {
    path:'/blogs',
    display:'Blog'
  },
  {
    path:'/contact',
    display:'Contact'
  },
]


const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return( <footer className='footer'>
    <Container>
      <Row>
        <Col lg={4} md={4} sm={12}>
        <div className="logo footer__logo">
            <h1>
              <Link to='/home' className="d-flex align-items-center gap-3">
                <i class="ri-car-line"></i>
                <span>BuRent Car</span>
              </Link>
            </h1> 
          </div>
          <p className="footer__logo-content">
          BuRent Car : Rent a Car Service, established in 2022, is a car rental company that has surpassed all of the leading car rental companies in the industry in a short time. We are working hard every day to give you a the best service and we are expanding our team!
          </p>
        </Col>

        <Col lg={2} md={4} sm={6}>
          <div className="mb-4">
            <h5 className="footer__link-title">Quick Links</h5>
            <ListGroup>
              {
                quickLinks.map((item,index)=>(
                  <ListGroupItem key={index} className='p-0 mt-3 quick__link'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </div>
        </Col>

        <Col lg={3} md={4} sm={12}>
              <div className='mb-4'>
                <h5 className='footer__link-title mb-4'>Head Office</h5>
                <p className="office__info">S Circular Road, Dublin 8, D08 V04N, Ireland </p>
                <p className="office__info">Phone : +353 353 3535</p>
                <p className="office__info">Email : iburaksag@gmail.com</p>
                <p className="office__info">Office Time : 10am - 7pm</p>
              </div>
        </Col>
        <Col lg={3} md={4}>
          <div className="mb-4">
            <h5 className="footer__link-title d-flex align-items-center justify-content-center gap-1">Social Media</h5>
            <div className='d-flex align-items-center justify-content-center gap-1'>
            <span className="social-media-icon"><i class="ri-facebook-line"></i></span>
            <span className="social-media-icon"><i class="ri-twitter-line"></i></span>
            <span className="social-media-icon"><i class="ri-instagram-line"></i></span>
            </div>
          </div>
        </Col>

        <Col lg={12}>
          <div className="footer__bottom">
            <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
              <i class="ri-copyright-line"></i> Copyright {year}, Developed by Ismail Burak Sag. All rights reserved.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
  );
};

export default Footer