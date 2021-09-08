import React from 'react'
import Topic from '../../Organisms/Topic'
import Title from '../../Atoms/Title'

const Content_home: React.FC = () => {
  return (
    <React.Fragment>
      <Title
        top="Welecome to thirofoo_home!"
        discription="ここはT.hirotoのhomepageです！これからのんびりと発展させていきます！(at 9/5)"
      ></Title>

      <div>
        <h2 style={{ fontSize: '40px', marginTop: '38vh' }} className="title">
          main topic
        </h2>
        <div style={{ display: 'inline', float: 'left' }}>
          <Topic smallTitle="There is no topic now!" content="Coming soon..."></Topic>
          <Topic smallTitle="There is no topic now!" content="Coming soon..."></Topic>
          <Topic smallTitle="There is no topic now!" content="Coming soon..."></Topic>
          <Topic smallTitle="There is no topic now!" content="Coming soon..."></Topic>
          <Topic smallTitle="There is no topic now!" content="Coming soon..."></Topic>
          <Topic smallTitle="There is no topic now!" content="Coming soon..."></Topic>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Content_home
