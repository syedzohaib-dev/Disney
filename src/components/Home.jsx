import React from 'react'
import styled from 'styled-components'
import Imgslider from './Imgslider'


function Home() {
  
  return (
    <>
      <Container>
        <Imgslider />

      </Container>


    </>
  )
}

export default Home


const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
&::before{
  background-image: url('/images/home-background.png');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;


}

`