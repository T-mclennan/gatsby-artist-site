import React from 'react'

function Testimonial() {

  const sampleStyle = {
    height: '40vh',
    width: '100%', 
    backgroundColor: 'lightgray',
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center'
  }

  return (
    <div style={sampleStyle}>
      <h3 style={{color: 'white'}}>Testimonial Section</h3>
    </div>
  )
}

export default Testimonial;
