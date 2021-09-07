import React from 'react'
import './Title.css'

type Props = {
  top: string
  discription: string
}

const Title: React.FC<Props> = ({ top, discription }) => {
  return (
    <React.Fragment>
      <div className="fade">
        <h1 className="title">{top} </h1>
        <p className="little"> {discription}</p>
        <h2 className="little">近日公開...</h2>
        <span className="next"></span>
      </div>
    </React.Fragment>
  )
}

export default Title
