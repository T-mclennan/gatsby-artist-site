import React from "react"

const Title = ({title, mb = '4rem'}) => {
  return (
    <div className="section-title" style={{marginBottom: mb }}>
      <h2>{title || 'default text'}</h2>
      <div className="underline"/>
    </div>
  )
}

export default Title
