import React from 'react'
import ContentPart from './Part'

const Content = (props) => {
  return (
    <>
      <ContentPart part={props.parts[0]} />
      <ContentPart part={props.parts[1]} />
      <ContentPart part={props.parts[2]} />
    </>
  )
}

export default Content