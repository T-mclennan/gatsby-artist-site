import React from "react"
import { graphql } from "gatsby"
import PageWrapper from "../components/layout/PageWrapper"
import Video from "../components/music/Video";


const playerWrapper = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  padding: '2rem',
}

const MusicPage = () => {
  
  return (
    <PageWrapper pageName="Music">
      <h2 style={{fontFamily: 'var(--ff-marker)', margin: '1rem 0'}}>Music Page</h2>
      <div style={playerWrapper}>
        <Video
          videoSrcURL="https://www.youtube.com/embed/dQw4w9WgXcQ"
          videoTitle="Official Music Video on YouTube"
        />
        <Video
          videoSrcURL="https://www.youtube.com/embed/dQw4w9WgXcQ"
          videoTitle="Official Music Video on YouTube"
        />
      </div>
    </PageWrapper>
  )
}

export default MusicPage

