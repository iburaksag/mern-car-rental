import { useQuery, useQueryClient } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Alert, Container, Row } from 'reactstrap'
import { getMyTransactions, getPaymentInformation } from '../axios'
import Transaction from '../components/UI/Transaction'
import queryString from 'query-string'
import Message from '../components/Message'

const Transactions = () => {
  const { isFetching, data } = useQuery(["myTransactions"], () => getMyTransactions().then(res => res.data))

const { search } = useLocation()
const { session_id, transaction_id, cancel } = queryString.parse(search)

const [message, setMessage] = useState({ 
    content: "",
    color: ""
})

const queryClient = useQueryClient()

const paymentInformation = async (session_id) => {
    try {
        const result = await getPaymentInformation(session_id, transaction_id)
        if(result?.data?.updatedTransaction && result?.data?.customer) {
            setMessage({ 
            content: "Payment successfull, your reservation has been approved.",
            color: "success"
        })
        queryClient.invalidateQueries(["myTransactions"])
        }
    } catch(err) {
        console.log(err);
        setMessage({ 
            content: err.message,
            color: "danger"
        })
    }
}

  useEffect(() => {
      if(session_id) {
        paymentInformation(session_id)
      } else if(cancel) {
        setMessage({ 
          content: "Payment cancelled.",
          color: "danger"
      })
      }
  }, [])


  if(isFetching) return <h1>Loading...</h1>
  else if (!data) return <div style={{ padding: 10}}>
    <Alert>You don't have any reservation requests at the moment.</Alert>
  </div>
  else return (
  <Container>
    { message.color && message.content && <Message color={message.color} >{message.content}</Message>}
        <Row style={{ padding: 20}}>
        { data?.map((transaction, index) => (
                <Transaction key={index} item={transaction} />
        )) }
        </Row>
    </Container>
)}

export default Transactions