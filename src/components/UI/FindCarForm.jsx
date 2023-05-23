import React, { useEffect, useState } from 'react'
import "../../styles/find-car-form.css";
import { Form, FormGroup } from 'reactstrap'
import { useNavigate } from 'react-router-dom';

/* `${String(new Date().getDate()).padStart(2, '0')}/${String(new Date().getMonth() + 1).padStart(2, '0')}/${new Date().getFullYear()}` */

const FindCarForm = () => {
    const navigate = useNavigate()

    const initialValues = {
        pick_up_dateLocation_input: "Dublin City Centre, Spencer Dock",
        pick_up_dateLocation: 53,
        drop_off_dateLocation_input: "Dublin City Centre, Spencer Dock",
        drop_off_dateLocation: 53,
        trans: "manual|automatic",
        pu_date: "",
        pick_up_dateDay: "",
        pick_up_dateYear_Month: "",
        pick_up_dateTime: "",
        do_date: "",
        drop_off_dateDay: "",
        drop_off_dateYear_Month: "",
        drop_off_dateTime: "",
        promo_code: ""
    }
    const [carForm, setCarForm] = useState(initialValues)
    /* addressID is required for fetching cars and comes from irishcarrentals.com */
    const addresses = [
        {
            address: "Dublin City Centre, Spencer Dock",
            addressId: 53
        },
        {
            address: "Galway City",
            addressId: 31
        },
        {
            address: "Cork City",
            addressId: 4
        },
    ]


  return <Form onSubmit={(e) => {
    e.preventDefault()
    navigate("/cars", { state: { params: carForm }})
    }} className='form'>
    <div className='d-flex align-items-center justify-content-between flex-wrap'>
        <FormGroup  className="select__group">
            <h6>Pickup Address</h6>
            <select value={carForm.pick_up_dateLocation_input} onChange={(e) => {
                const selectedIndex = e.target.options.selectedIndex
                setCarForm({...carForm, pick_up_dateLocation_input: e.target.value, pick_up_dateLocation: e.target.options[selectedIndex].getAttribute("addressid")})
            }} >
                {
                    addresses.map((address, index) => <option key={index} addressid={address.addressId}>{address.address}</option>)
                }
            </select>
        </FormGroup>
        <FormGroup  className="select__group">
            <h6>Dropoff Address</h6>
            <select value={carForm.drop_off_dateLocation_input} onChange={(e) => {
                const selectedIndex = e.target.options.selectedIndex
                setCarForm({...carForm, drop_off_dateLocation_input: e.target.value, drop_off_dateLocation: e.target.options[selectedIndex].getAttribute("addressid")})
            }} >
                {
                    addresses.map((address, index) => <option key={index} addressid={address.addressId}>{address.address}</option>)
                }
            </select>
        </FormGroup>
        <FormGroup  className="select__group">
            <h6>Transmission</h6>
            <select value={carForm.trans} onChange={(e) => {
                const selectedIndex = e.target.options.selectedIndex
                setCarForm({...carForm, trans: e.target.value})
            }} >
                    <option value="manual|automatic">Manual or Automatic</option>
                    <option value="manual">Manual</option>
                    <option value="automatic">Automatic</option>
            </select>
        </FormGroup>
        <FormGroup className="form__group">
            <h6>Pickup Date</h6>
            <input type="date" onChange={(e) => {
                const splitDate = e.target.value.split("-")
                setCarForm({...carForm, 
                pu_date: splitDate.reverse().join("-"),
                pick_up_dateDay: parseInt(splitDate[0], 10),
                pick_up_dateYear_Month: `${splitDate[2]}-${splitDate[1]}`
            })}} value={carForm.pu_date.split("-").reverse().join("-")} required />
        </FormGroup>
        <FormGroup className="form__group">
            <h6>Pickup Time</h6>
            <input type="time" onChange={(e) => {
                setCarForm({...carForm, pick_up_dateTime: e.target.value})
            }} required />
        </FormGroup>
        <FormGroup className="form__group">
            <h6>Dropoff Date</h6>
            <input type="date" onChange={(e) => {
                const splitDate = e.target.value.split("-")
                setCarForm({...carForm, 
                do_date: splitDate.reverse().join("-"),
                drop_off_dateDay: parseInt(splitDate[0], 10),
                drop_off_dateYear_Month: `${splitDate[2]}-${splitDate[1]}`
            })}} value={carForm.do_date.split("-").reverse().join("-")} required />
        </FormGroup>
        <FormGroup className="form__group">
            <h6>Dropoff Time</h6>
            <input type="time" onChange={(e) => {
            console.log(e.target.value)
                setCarForm({...carForm, drop_off_dateTime: e.target.value})
            }} required />
        </FormGroup>
        <FormGroup className="form__group">
            <h6>Promotion Code</h6>
            <input type="text" />
        </FormGroup>
        <FormGroup className="form__group">
            <br/>
            <button type="submit" className='btn find__car-btn'>Find Car</button>
        </FormGroup>
    </div>
  </Form>
}

export default FindCarForm