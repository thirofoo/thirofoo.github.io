import React from 'react'
import Title from 'components/Atoms/Title'
import Topic from 'components/Organisms/Topic'

const Content_profile: React.FC = () => {
  return (
    <React.Fragment>
      <div className="subtitle" style={{ padding: 0, margin: 0 }}></div>
      <div className="subtitle" style={{ padding: 0, margin: 0 }}></div>
      <Title
        top="Product"
        discription="ここでは今までで作ってきたweb系のものをを書き連ねていく予定です！ "
        discription2=""
      ></Title>
      <Topic
        url="https://tetris-application.herokuapp.com/"
        smallTitle="Tetris"
        content="初めて立ち上げたwebサイトです！　クロスプラットホームでないため、smartphoneではプレイできない仕様。出来ればノートPCのフルスクリーンでのプレイを推奨。"
      ></Topic>
      <Topic url="" smallTitle="There is no topic now!" content="Coming soon... "></Topic>
      <Topic url="" smallTitle="There is no topic now!" content="Coming soon..."></Topic>
      <Topic url="" smallTitle="There is no topic now!" content="Coming soon..."></Topic>
    </React.Fragment>
  )
}

export default Content_profile
