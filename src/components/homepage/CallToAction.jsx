import React from 'react'

function CallToAction() {

  const sampleStyle = {
    height: '40vh',
    width: '100%', 
    backgroundColor: 'gray',
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center'
  }

  return (
    <div style={sampleStyle}>
      <h3 style={{color: 'white'}}>This is some content</h3>
    </div>
  )
}

export default CallToAction
