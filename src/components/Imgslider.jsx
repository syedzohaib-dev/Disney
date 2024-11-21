import React from 'react'
import styled from 'styled-components'
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'


function Imgslider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 1,
        autoplay: true
    }
    return (
        <Carousel {...settings}>
            <Wrap>
                <img src="/images/slider-badging.jpg" alt="" />
            </Wrap>
            <Wrap>
                <img src="/images/slider-badag.jpg" alt="" />
            </Wrap>
        </Carousel>
    )
}

export default Imgslider

const Carousel = styled(Slider)`
    margin-top: 20px;

`
const Wrap = styled.div`
width: 100%;
height: 100%;
border-radius: 4px;
box-shadow: rgb(0 0 0  / 69%);

`