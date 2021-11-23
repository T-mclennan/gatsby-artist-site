import React from 'react';
import {Button} from 'antd';

const TaglineStyle = {
  width: '100%', 
  height: '30vh',
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '1rem 1rem',
  maxWidth: '50rem'
}

function Tagline() {
  return (
    <div style={TaglineStyle}>
      {/* <h1>Professional Street Art and Murals</h1>
      <p>Based in Santa Cruz California, we're an artist group with a variety of styles and mediums.  
        Let us help with your next dream project. Feel free to contact us for more details. 
      </p>
      <Button>Contact Us</Button> */}
    </div>
  )
}

export default Tagline
