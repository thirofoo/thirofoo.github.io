import React from 'react'

type Props = {
  date: string
  news: string
}

const News: React.FC<Props> = ({ date, news }) => {
  return (
    <div style={{ borderBottom: '5px black', marginBottom: '20px', fontSize: '20px' }}>
      <div>{date}</div>
      <div>{news}</div>
    </div>
  )
}

export default News
