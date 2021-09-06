import React from 'react'
import Topic from '../../Organisms/Topic'
import Title from '../../Atoms/Title'

const Content_home: React.FC = () => {
  return (
    <React.Fragment>
      <Title
        top="Welecome to thirofoo_home!"
        discription="ここはT.hirotoのhomepageです！更新は遅いと思いますが、これからのんびりと発展させていきます！(at 9/5)"
      ></Title>
      <Topic paper=""></Topic>
      <Topic paper=""></Topic>
      <Topic paper=""></Topic>
    </React.Fragment>
  )
}

export default Content_home
