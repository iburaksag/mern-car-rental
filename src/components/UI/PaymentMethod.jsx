import { useMutation, useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { createTransaction, me } from '../../axios'
import { useNavigate } from 'react-router-dom'
import { createSession } from '../../axios'
import { useStripe } from "@stripe/react-stripe-js";
import '../../styles/payment-method.css'
import Message from '../Message'

const PaymentMethod = ({ bookingInformation, carInformation }) => {
    const stripe = useStripe()
    const { data: meData } = useQuery(["me"], () => me().then(res => res.data))

    const navigate = useNavigate()
    const [popupOpen, setPopupOpen] = useState(false)
    const CashPaymentSuccessPopup = () => (
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
                <i style={{ fontSize: 30, marginRight: 15}} class='ri-bank-card-fill'></i>
                <div style={{ display: "flex", flexDirection: "column"}}>
                    <h3>Reservation request has been sent!</h3>
                    <h5>Your reservation will be approved when payment is received.</h5>
                    <h5>You can view the status of your transaction on the transactions pending approval page.</h5>
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
                navigate("/home")
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
    const [isCardPayment, setIsCardPayment] = useState(true)
    const [warning, setWarning] = useState()

    const { pickupLocation, dropoffLocation, pickupDate, dropoffDate, carName, carImageUrl, price } = carInformation

    const transactionMutation = useMutation(() => createTransaction({ phone: bookingInformation.phone, message: bookingInformation.message,
         pickupLocation, dropoffLocation, pickupDate: pickupDate.split("-").reverse().join("-"),
          dropoffDate: dropoffDate.split("-").reverse().join("-"), carName, carImageUrl, price: parseInt(price.substring(1))
    }))

    const createSessionMutation = useMutation((data) => createSession(data))
  return <>
  { popupOpen && <CashPaymentSuccessPopup /> }
  { warning && <Message color="warning">{warning}</Message>}
  <form onSubmit={ async (e) => {
    e.preventDefault()
    if(bookingInformation.phone === "") { setWarning("Phone number can not be empty.") } 
    else {
      const transactionResult = await transactionMutation.mutateAsync()
        if(!isCardPayment) {
            try {
                if(transactionResult?.data?.transaction) { 
                    setPopupOpen(true)
                 }
            }catch(err) {
                setWarning(err.message)
            }
        } else {
          try {
          // 2 - Create checkout session
          if(transactionResult?.data?.transaction) {
            console.log(transactionResult.data.transaction)
            
            const { data } = await createSessionMutation.mutateAsync({ 
              amount: parseFloat(price.substring(1)), 
              currency: "eur", 
              transactionId: transactionResult.data.transaction._id, 
              email: meData?.email })

              if(data?.session) {
                stripe.redirectToCheckout({ sessionId: data.session.id })
              }
          }
          } catch(err) {
            console.log(err)
            setWarning(err.message)
          }
        }
    }
  }}>
    <div className='payment'>
        <label htmlFor="" className='d-flex align-items-center gap-2'>
            <input checked={isCardPayment} name="card" type='radio' onClick={(e) => { if(!isCardPayment) { setIsCardPayment(true) } }} /> Card Payment 
        </label>
    </div>

    <div className='payment'>
        <label htmlFor="" className='d-flex align-items-center gap-2'>
            <input name="card" type='radio' onClick={(e) => { if(isCardPayment) { setIsCardPayment(false) } }} /> Cash Payment 
        </label>
    </div>
    <div className='payment text-start mt-5'>
        <button type="submit">Book Now</button>
    </div>
  </form>

    {
        !isCardPayment && (
            <div style={{ marginTop: 20}}>
                <h4>Rent a Car Service IBAN: GB33BUKB20201555555555</h4>	
                <h5 style={{ marginTop: 5, color: "royalblue"}}>Your reservation will be approved after payment is received.</h5>
            </div>
        )
    }

  </>
} 

export default PaymentMethod