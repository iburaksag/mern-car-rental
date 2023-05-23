import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { Container, Row, Col, Form, FormGroup, Input } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import Message from '../components/Message'

import '../styles/contact.css'

const socialLinks = [
    {
        url: "#",
        icon: "ri-facebook-line",
    },
    {
        url: "#",
        icon: "ri-instagram-line",
    },
    {
        url: "#",
        icon: "ri-linkedin-line",
    },
    {
        url: "#",
        icon: "ri-twitter-line",
    },
];



const Contact = () => {
    const [popupOpen, setPopupOpen] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })
    const Popup = () => (
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
            textAlign: "center",
            height: "100vh"
        }}
    >
      <div style={{ display: "flex", background: "whitesmoke", padding: 50, alignItems: "center", flexDirection: "column"}}>
        <h2>We have received your request and will get back to you soon.</h2>
        <div
        style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 65,
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
          <h3 style={{ marginTop: 50, background: "green", color: "white", padding: 8, borderRadius: 8, display: "flex"}} >
            Okey
          <i className='ri-checkbox-circle-fill' style={{ marginLeft: 6}}></i>
          </h3>
        </div>
      </div>
    </div>
)

  return <Helmet title='Contact'>
    <CommonSection title='Contact'/>
    <section>
        <Container>
            { popupOpen && <Popup />}
            <Row>
                <Col lg='7' md='7'>
                    <h3 className='fw-bold'>Get In Touch</h3>

                    <Form onSubmit={(e) => {
                        e.preventDefault()
                        setPopupOpen(true)
                        setFormData({ name: "", email: "", message: ""})
                    }}>
                        <FormGroup className='contact__form'>
                            <Input value={formData.name} onChange={(e) => {
                                setFormData({ ...formData, name: e.target.value})
                            }} placeholder="Your Name" type="text" required />
                        </FormGroup>
                        <FormGroup className='contact__form'>
                            <Input onChange={(e) => {
                                setFormData({ ...formData, email: e.target.value})
                            }} value={formData.email} placeholder="Email" type="email" required/>
                        </FormGroup>
                        <FormGroup className='contact__form'>
                            <textarea required onChange={(e) => {
                                setFormData({ ...formData, message: e.target.value})
                            }} value={formData.message} rows="5" placeholder='Message' className='textarea'></textarea>
                        </FormGroup>
                        
                        <button type="submit" className="btn contact__btn">Send Message</button>
                        
                    </Form>
                </Col>

                <Col lg='5' md='5'>
                    <div className="contact__info">
                        <h3 className='fw-bold'>Contact Information</h3>
                        <p className="section__description mb-0">S Circular Road, D08AW82, Dublin, Ireland</p>

                        <div className='d-flex align-items-center gap-2'>
                            <h6 className='fs-6 mb-0'>Phone:</h6>
                            <p className="section__description mb-0">+9412412231</p>
                        </div>

                        <div className='d-flex align-items-center gap-2'>
                            <h6 className='mb-0 fs-6'>Email:</h6>
                            <p className="section__description mb-0">info@example.com</p>
                        </div>

                        <h6 className='fw-bold' style={{marginTop:15}}>Follow Us</h6>

                        <div className='d-flex align-items-center gap-4 mt-3'>
                            {
                                socialLinks.map((item, index)=>(
                                    <Link to={item.url} key={index} className='social__link-icon'><i class={item.icon}></i></Link>
                                ))
                            }
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  </Helmet>
}

export default Contact