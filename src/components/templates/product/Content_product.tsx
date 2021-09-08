import React from 'react'
import Title from 'components/Atoms/Title'
import Topic from 'components/Organisms/Topic'

const Content_profile: React.FC = () => {
  return (
    <React.Fragment>
      <Title top="Product" discription="ここでは今までで作ってきたweb系のものをを書き連ねていく予定です！"></Title>
      <Topic smallTitle="Tetris" content="初めて立ち上げたwebサイトです！"></Topic>
      <Topic smallTitle="There is no topic now!" content="Coming soon..."></Topic>
      <Topic smallTitle="There is no topic now!" content="Coming soon..."></Topic>
      <Topic smallTitle="There is no topic now!" content="Coming soon..."></Topic>
    </React.Fragment>
  )
}

export default Content_profile
