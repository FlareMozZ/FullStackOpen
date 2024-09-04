import React from 'react'
import ContentPart from './Part'

const Content = (props) => {
  return (
    <>
      <ContentPart part={props.part1} exercises={props.exercises1} />
      <ContentPart part={props.part2} exercises={props.exercises2} />
      <ContentPart part={props.part3} exercises={props.exercises3} />
    </>
  )
}

export default Content