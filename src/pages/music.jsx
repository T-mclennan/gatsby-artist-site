import React from "react"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
import PageWrapper from "../components/PageWrapper"
import ReactPlayer from "react-player"


const playerWrapper = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '60vw',
  height: '60vh'
}

const MusicPage = () => {
  return (
    <PageWrapper>
      <h2 style={{fontFamily: 'var(--ff-marker)', margin: '1rem 0'}}>Music Page</h2>
      <div style={playerWrapper}>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
          width='100%'
          height='100%'
        />
      </div>
    </PageWrapper>
  )
}

export default MusicPage

