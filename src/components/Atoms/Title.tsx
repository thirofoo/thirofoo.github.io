import React from 'react'
import './Title.css'

type Props = {
  top: string
  discription: string
  discription2: string
}

const Title: React.FC<Props> = ({ top, discription, discription2 }) => {
  return (
    <React.Fragment>
      <div className="position">
        <div className="top">
          <h1 className="title">{top} </h1>
          <p className="content"> {discription}</p>
          <p className="content"> {discription2}</p>
          {/* <h2 className="little under"></h2> */}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Title
