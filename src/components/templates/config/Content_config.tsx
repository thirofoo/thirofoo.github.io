import React from 'react'
import Title from 'components/Atoms/Title'
import Topic from 'components/Organisms/Topic'

const Content_config: React.FC = () => {
  return (
    <React.Fragment>
      <div className="subtitle" style={{ padding: 0, margin: 0 }}></div>
      <div className="subtitle" style={{ padding: 0, margin: 0 }}></div>
      <Title
        top="Config"
        discription="ここでは様々な設定をすることが出来るようにする予定です！"
        discription2=""
      ></Title>
      <Topic
        url="https://tetris-application.herokuapp.com/"
        smallTitle="There is no topic now!"
        content="Coming soon..."
      ></Topic>
      <Topic url="" smallTitle="There is no topic now!" content="Coming soon..."></Topic>
      <Topic url="" smallTitle="There is no topic now!" content="Coming soon..."></Topic>
      <Topic url="" smallTitle="There is no topic now!" content="Coming soon..."></Topic>
    </React.Fragment>
  )
}

export default Content_config
