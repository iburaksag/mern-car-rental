import React, {  useState } from 'react'
import { Container, Row, Col, Form, FormGroup, Input } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { useDispatch, useSelector } from 'react-redux'
import { authFailed, register } from '../redux/userSlice'
import Message from '../components/Message'
import { useNavigate } from 'react-router-dom'
import '../styles/register.css'

const Register = () => {
    const navigate = useNavigate()

    const userState = useSelector(state => state.user)
    const { error } = userState

    const dispatch = useDispatch()

    const initialFormData = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      }

      const [form, setForm] = useState(initialFormData)

    return <Helmet title='Register'>
    <CommonSection title='Create an account'/>
    <section>
        <Container className='form__container p-5'>
            <Row style={{ justifyContent: "center"}}>
                <Col lg='7' md='7'>
                    <h3 className='fw-bold text-center mb-5' style={{color:'#fff'}}>Register Form</h3>
                    {error && <Message color="danger">{error}</Message>}
                    <Form onSubmit={(e) => {
                      e.preventDefault()

                      if(form.password !== form.confirmPassword) {
                        dispatch(authFailed("Passwords do not match."))
                      } else {
                          dispatch(register(form, navigate))
                      }
                      
                    }}>
                        <FormGroup className='contact__form'>
                            <Input placeholder="First Name" type="text" onChange={(e) =>
                      setForm({ ...form, firstName: e.target.value })
                    } />
                        </FormGroup>
                        <FormGroup className='contact__form'>
                            <Input placeholder="Last Name" type="text" onChange={(e) =>
                      setForm({ ...form, lastName: e.target.value })
                    } />
                        </FormGroup>
                        <FormGroup className='contact__form'>
                            <Input placeholder="Email" type="email" onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    } />
                        </FormGroup>
                        <FormGroup className='contact__form'>
                            <Input placeholder="Password" type="password" onChange={(e) =>
                      setForm({ ...form, password: e.target.value })
                    } />
                        </FormGroup>
                        <FormGroup className='contact__form'>
                            <Input placeholder="Confirm password" type="password" onChange={(e) =>
                      setForm({ ...form, confirmPassword: e.target.value })
                    } />
                        </FormGroup>

                        <button className='btn btn__register' type='submit'>Register</button>
                    </Form>
                </Col>

            </Row>
        </Container>
    </section>
  </Helmet>
}

export default Register