import React from "react"
import { graphql } from "gatsby"
import PageWrapper from "~layout/PageWrapper"
import Video from "~components/music/Video";
import Title from "~components/Title"


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
      <Title title="Music" mb="1rem"/>
      <div style={playerWrapper}>
        <Video
          videoSrcURL="https://www.youtube.com/embed/dQw4w9WgXcQ"
          videoTitle="Official Music Video on YouTube"
        />
      </div>
    </PageWrapper>
  )
}

export default MusicPage

