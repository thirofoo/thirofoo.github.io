import React from 'react'

type Props = {
  top: string
  discription: string
}

const Title: React.FC<Props> = ({ top, discription }) => {
  return (
    <React.Fragment>
      <h1 style={{ fontSize: '50px' }}>{top}</h1>
      <p>{discription}</p>
      <h2>近日公開...</h2>
    </React.Fragment>
  )
}

export default Title
