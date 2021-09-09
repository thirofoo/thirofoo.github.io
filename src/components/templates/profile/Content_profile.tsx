import React from 'react'
import Title from 'components/Atoms/Title'
import Topic from 'components/Organisms/Topic'

const Content_product: React.FC = () => {
  return (
    <React.Fragment>
      <div className="subtitle" style={{ padding: 0, margin: 0 }}></div>
      <div className="subtitle" style={{ padding: 0, margin: 0 }}></div>
      <Title top="Profile" discription="ここでは自己紹介的なことを書き連ねていく予定です！" discription2=""></Title>
      <Topic smallTitle="There is no topic now!" content="Coming soon..."></Topic>
      <Topic smallTitle="There is no topic now!" content="Coming soon..."></Topic>
      <Topic smallTitle="There is no topic now!" content="Coming soon..."></Topic>
      <Topic smallTitle="There is no topic now!" content="Coming soon..."></Topic>
    </React.Fragment>
  )
}

export default Content_product
