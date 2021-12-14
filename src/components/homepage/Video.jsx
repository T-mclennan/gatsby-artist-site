import React from 'react'
import ReactPlayer from "react-player"


const playerWrapper = {
  position: 'relative',
  paddingTop: '56.25%'
}

const reactPlayer = {
  position: 'absolute',
  top: 0,
  left: 0,
}

function Video() {
  return (
    <div style={playerWrapper}>
      <ReactPlayer
        style={reactPlayer}
        url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
        width='100%'
        height='100%'
      />
    </div>
  )
}

export default Video
