import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { approveTransaction, getUnapprovedTransactions, me, rejectTransaction } from '../axios/index'
import Message from '../components/Message'

const Admin = () => {
    const [message, setMessage] = useState({ content: "", color: "" })
    const queryClient = useQueryClient()

    const { isFetching, data } = useQuery(["me"], () => me().then(res => res.data))
    const { data: transactions } = useQuery(["unapprovedTransactions"], () => getUnapprovedTransactions().then(res => res.data))

    const approveTransactionMutation = useMutation((transactionId) => approveTransaction(transactionId))
    const rejectTransactionMutation = useMutation((transactionId) => rejectTransaction(transactionId))
    
  if(isFetching) return <h1>Loading...</h1>
  else if (!data || !data.isAdmin) return <h1>Forbidden</h1>
  else return (
    <Container>
        {message?.content && <Message press={() => { setMessage({content: "", color: "" })}} color={message.color}>{message.content}</Message>}
        <Row style={{ padding: 20}}>
            { transactions?.map((transaction, index) => (
                <Col>
                    <div style={{ display: "flex", flexDirection: "column", border: "5px solid black", padding: 10, marginBottom: 15}}>
                        <h3 style={{ fontWeight: "bold"}}>Booking Information</h3>
                        <h5><span style={{ fontWeight: "bold"}}>Email:</span> {transaction.user.email}</h5>
                        <h5><span style={{ fontWeight: "bold"}}>Full Name:</span> {transaction.user.fullName}</h5>
                        <h5><span style={{ fontWeight: "bold"}}>Phone:</span> {transaction.phone}</h5>
                        <h5><span style={{ fontWeight: "bold"}}>Message:</span> {transaction.message}</h5>
                        <h5><span style={{ fontWeight: "bold"}}>Pickup Location:</span> {transaction.pickupLocation}</h5>
                        <h5><span style={{ fontWeight: "bold"}}>Dropoff Location:</span> {transaction.dropoffLocation}</h5>
                        <h5><span style={{ fontWeight: "bold"}}>Pickup Date:</span> {transaction.pickupDate}</h5>
                        <h5><span style={{ fontWeight: "bold"}}>Dropoff Date:</span> {transaction.dropoffDate}</h5>


                        <h3 style={{ fontWeight: "bold"}}>Car Information</h3>
                        <h5><span style={{ fontWeight: "bold"}}>Car Name:</span> {transaction.carName}</h5>

                        <div style={{ marginTop: 15, marginBottom: 15, display:"flex", justifyContent: "space-around"}}>
                            <button onClick={async (e) => {
                                await approveTransactionMutation.mutateAsync(transaction._id)
                                queryClient.invalidateQueries(["unapprovedTransactions"])
                                setMessage({ content: "Reservation approved successfully.", color: "success" })
                            }} className='btn' style={{ width: "100px", background: "green", color: "white"}}>Approve</button>
                            <button onClick={async (e) => {
                                await rejectTransactionMutation.mutateAsync(transaction._id)
                                queryClient.invalidateQueries(["unapprovedTransactions"])
                                setMessage({ content: "Reservation rejected successfully.", color: "success" })
                            }} className='btn' style={{ width: "100px", background: "red", color: "white"}}>Reject</button>
                        </div>
                    </div>
                </Col>
            )) }
        </Row>
    </Container>
  )
}

export default Admin