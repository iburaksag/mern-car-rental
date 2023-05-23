
import React from 'react'
import Slider from 'react-slick'

import '../../styles/testimonial.css'

import ava01 from '../../assets/all-images/ava-1.jpeg'
import ava02 from '../../assets/all-images/ava-2.jpeg'
import ava03 from '../../assets/all-images/ava-3.jpeg'
import ava04 from '../../assets/all-images/ava-4.jpeg'

const Testimonial = () => {

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          //initialSlide: 2
        },
      },
    ],
  };

  return (
  <Slider {...settings}>
    <div className='testimonial py-4 px-3'>
        <p className="section__description">
          I rented a car from the airport to reach his home after a long journey. Service and attention was very high quality. The process was completed within minutes. What a great service!
        </p>
      <div className='mt-3 d-flex align-items-center gap-4'>
        <img src={ava01} alt="" className='w-25 h-25 rounded-2' />
        <div>
          <h6 className="mb-0 mt-3">Jack Grealish</h6>
          <p className='section__description'>Customer</p>
        </div>
      </div>
    </div>

    <div className='testimonial py-4 px-3'>
        <p className="section__description">
        I had to go on a business trip for a week. I used this service first time and it was very successful, also the price was very reasonable. Thank you BuRent Car!
        </p>
      <div className='mt-3 d-flex align-items-center gap-4'>
        <img src={ava02} alt="" className='w-25 h-25 rounded-2' />
        <div>
          <h6 className="mb-0 mt-3">Pep Guardiola</h6>
          <p className='section__description'>Customer</p>
        </div>
      </div>
    </div>


    <div className='testimonial py-4 px-3'>
        <p className="section__description">
        I recommend this service to everyone. In particular, you should definitely take a look at their extra packages. I paid only 250 euro for 1 week. You guys are fabolous!
        </p>
      <div className='mt-3 d-flex align-items-center gap-4'>
        <img src={ava03} alt="" className='w-25 h-25 rounded-2' />
        <div>
          <h6 className="mb-0 mt-3">Phil Foden</h6>
          <p className='section__description'>Customer</p>
        </div>
      </div>
    </div>

    <div className='testimonial py-4 px-3'>
        <p className="section__description">
        Since my house is far from the pickup point, they brought the car to my house. I have never encountered such a service before. You deserve all the money!
        </p>
      <div className='mt-3 d-flex align-items-center gap-4'>
        <img src={ava04} alt="" className='w-25 h-25 rounded-2' />
        <div>
          <h6 className="mb-0 mt-3">Harry Maguire</h6>
          <p className='section__description'>Customer</p>
        </div>
      </div>
    </div>

  </Slider>
)}

export default Testimonial