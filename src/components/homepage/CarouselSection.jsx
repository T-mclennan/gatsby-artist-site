import React from 'react'
import { Carousel } from 'antd';


function CarouselSection() {

  console.log('carousel')

  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  const container ={
    height: '80vh',
    width: '100%',
    backgroundColor: 'pink',
  }

  return (
    <section style={container}>
      {/* <Carousel>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel> */}
    </section>
  )
}

export default CarouselSection
