import React, { useState } from 'react'
import { Container, Row, Col, Form, FormGroup, Input } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { useDispatch, useSelector } from 'react-redux'
import {  login } from '../redux/userSlice'
import Message from '../components/Message'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../styles/login.css'
import { notifyManager } from '@tanstack/react-query'


const Login = () => {
    const navigate = useNavigate()

    const userState = useSelector(state => state.user)
    const { error } = userState

    const dispatch = useDispatch()

    const initialFormData = {
        email: '',
        password: '',
      }

      const [form, setForm] = useState(initialFormData)

    return <Helmet title='Login'>
    <CommonSection title='Login'/>
    <section>
        <Container className='form__container p-5'>
            <Row style={{ justifyContent: "center"}}>
                <Col lg='7' md='7'>
                    <h3 className='fw-bold text-center mb-5' style={{color:'#fff'}}>Login Form</h3>
                    {error && <Message color="danger">{error}</Message>}
                    <Form onSubmit={(e) => {
                      e.preventDefault()
                        
                      dispatch(login(form, navigate))                      
                    }}>
                        <FormGroup className='contact__form pb-3'>
                            <Input placeholder="Email" type="email" onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    } />
                        </FormGroup>
                        <FormGroup className='contact__form pb-2'>
                            <Input placeholder="Password" type="password" onChange={(e) =>
                      setForm({ ...form, password: e.target.value })
                    } />
                        </FormGroup>
                        <button className='btn btn__login' type='submit'>Login</button>
                        <div className='mt-3'>
                           <Link to='/register' style={{color:"#fff;",textDecoration:'none'}}>Not a member?</Link>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    </section>
  </Helmet>
}

export default Login