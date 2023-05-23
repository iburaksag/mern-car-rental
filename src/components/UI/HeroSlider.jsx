import React from 'react'
import Slider from 'react-slick'
import { Container } from 'reactstrap'
import { Link } from 'react-router-dom'

import '../../styles/hero-slider.css'

const HeroSlider = () => {
    const settings = {
        fade:true,
        speed:2500,
        autoplaySpeed:2000,
        infinite: true,
        autoplay: true,
        slideToShow : 1,
        slidesToScroll : 1,
        pauseOnHover : false,
    }
  return <Slider {...settings} className='hero__slider'>
    <div className="slider__item slider__item-01 mt-0">
        <Container>
            <div className="slider__content">
                <h4 className="text-light mb-3">Rent 50€ per day</h4>
                <h1 className="text-light mb-4">Choose Us Enjoy the Road</h1>

          
            </div>
        </Container>
    </div>

    <div className="slider__item slider__item-02 mt-0">
        <Container>
            <div className="slider__content">
                <h4 className="text-light mb-3">Rent 50€ per day</h4>
                <h1 className="text-light mb-4">Cheap and Quality Service</h1>
            </div>
        </Container>
    </div>

    <div className="slider__item slider__item-03 mt-0">
        <Container>
            <div className="slider__content">
                <h4 className="text-light mb-3">Rent 50€ per day</h4>
                <h1 className="text-light mb-4">Book in minutes</h1>
            </div>
        </Container>
    </div>
  </Slider>
}

export default HeroSlider