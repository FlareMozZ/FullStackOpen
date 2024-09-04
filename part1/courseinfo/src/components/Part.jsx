import React from 'react'

const ContentPart = (props) => {
  return (
    <>
      <p>
        {props.part} {props.exercises}
      </p>
    </>
  )
}

export default ContentPart