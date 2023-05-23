import React, { useEffect, useState } from 'react'

import { Container, Row, Col, Form, FormGroup, Input } from 'reactstrap'

import { useParams } from 'react-router-dom'
import blogData from '../assets/data/blogData.js'
import Helmet from '../components/Helmet/Helmet'
import { Link } from 'react-router-dom'

import commentImg from '../assets/all-images/ava-1.jpeg'

import '../styles/blog-details.css'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { createComment, getComments, me } from '../axios/index.js'
import Message from '../components/Message'
import moment from 'moment'

const BlogDetails = () => {

  const queryClient = useQueryClient()

  const { data } = useQuery(["me"], () => me().then(res => res.data))

  const {slug} = useParams()
  const blog = blogData.find(blog => blog.title === slug)

  const { data: comments } = useQuery(["comments"], () => getComments(slug).then(res => res.data))

  const [comment, setComment] = useState("")
  const [error, setError] = useState()

  const createCommentMutation = useMutation(() => createComment({ postName: slug, 
    fullName: data.fullName, 
    email: data.email, 
    content: comment 
  }))

  useEffect(() => {
    window.scrollTo(0,0);
  }, [blog]);

  return <Helmet title={blog.title}>
    <section>
    <Container>
      <Row>
        <Col lg='8' md='8'>
          <div className="blog__details">
            <img src={blog.imgUrl} alt="" className='w-100' />
            <h2 className="section__title mt-4">{blog.title}</h2>

            <div className="blog__publisher d-flex align-items-center gap-4 mb-4">
              <span className="blog__author">
                  <i class="ri-user-line"></i>{blog.author}
              </span>

              <span className="d-flex align-items-center gap-1 section__description">
                  <i class="ri-calendar-line"></i>{blog.date}
              </span>

              <span className="d-flex align-items-center gap-1 section__description">
                  <i class="ri-time-line"></i>{blog.time}
              </span>
            </div>

            <p className="secion__description">{blog.description}</p>
            <h6 className='ps-5 fw-normal'>
              <blockquote className='fs-4'>{blog.quote}</blockquote>
            </h6>
          </div>

          <div className="comment__list mt-5">
            <h4 className='mb-5'>{comments?.length} comment(s)</h4>

          {
            comments?.map((comment, index) => (
              <div key={index} className="single__comment d-flex gap-3">
              <div className="comment__content"> 
                 <h6 className='fw-bold'>{comment.creator.fullName}</h6>
                 <p className='section__description mb-0'>{moment(comment.createdAt).format("MMMM Do YYYY")}</p>
                 <p className='section__description'>{comment.content}</p>
               </div>
            </div>
            ))
          }


            {/* ======= comment form ====*/}
            <div>
              { !data ?
              <>
                <h4>Leave a Comment</h4>
                <p className='section__description'>You must <Link to="/login">sign-in</Link> to make or comment a post</p>
              </>
              :
              <div className='leave__comment-form mt-5'>
                {error && <Message color="danger">{error}</Message>}
                <h4>Leave a Comment</h4>
                <Form onSubmit={ async (e) => {
                  try {
                    e.preventDefault()
                    await createCommentMutation.mutateAsync()
                    setComment("")
                    queryClient.invalidateQueries(["comments"])
                    setError()
                  } catch(err) {
                    console.log(err);
                    setError(err.message)
                  }
                }}>
                  <FormGroup className='d-flex gap-3'>
                    <Input type="text" value={data.fullName} placeholder='Full Name' disabled />
                    <Input type="email" value={data.email} placeholder='Email' disabled />
                  </FormGroup>

                  <FormGroup>
                    <textarea required value={comment} onChange={(e) => { setComment(e.target.value) }} rows="5" className='w-100 py-2 px-3' placeholder='Comment...'></textarea>
                  </FormGroup>

                  <button type="submit" className='btn comment__btn mt-3'>Post</button>
                </Form>
            </div>
            }
            </div>
          </div>
        </Col>

        <Col lg='4' md='4'>
          <div className="recent__post mb-4">
            <h5 className='fw-bold'>Recent Posts</h5>
          </div>
          {
            blogData.map(item => (
              <div className="recent__blog-post mb-4" key={item.id}>
                <div className="recent__blog-item d-flex gap-3">
                  <img src={item.imgUrl} alt="" className='w-25 rounded-2' />
                  <h6><Link to={`/blogs/${item.title}`}>{item.title}</Link></h6>
                </div>
              </div>
            ))
          }
        </Col>
      </Row>
    </Container>
    </section>
  </Helmet>
}

export default BlogDetails