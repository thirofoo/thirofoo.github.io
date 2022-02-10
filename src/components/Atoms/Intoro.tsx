import React from 'react'

type Props = {
  topic: string
  result: string
}

const Intro: React.FC<Props> = ({ topic, result }) => {
  return (
    <div style={{ borderBottom: '5px black', marginBottom: '20px', fontSize: '20px' }}>
      <p>{topic}</p>
      <p>{result}</p>
    </div>
  )
}

export default Intro
