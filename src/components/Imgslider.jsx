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
    ul li button{
        &:before{
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }
li.slick-active button::before{
    color: white;
}
    .slick-list{
        overflow: visible;
    }

    button{
        z-index: 1  ;
    }

`
const Wrap = styled.div`
cursor: pointer;
img{
width: 100%;
height: 100%;
border-radius: 4px solid transparent;
box-shadow: rgb(0 0 0  / 69%) 0px 26px 30px -10px,
rgb(0 0 0 / 73%) 0px 16px 10px -10px; 

&:hover{
    border: 4px solid rgba(249, 249, 249, 0.8);

}
}
`