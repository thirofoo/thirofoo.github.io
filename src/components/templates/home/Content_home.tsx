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

      <div style={{ display: 'inline', float: 'left' }}>
        <Topic smallTitle="トイソルジャーと申します！" content="ようこそ！夢と希望の町へ！あいたた！"></Topic>
        <Topic smallTitle="トイソルジャーと申します！" content="ようこそ！夢と希望の町へ！あいたた！"></Topic>
        <Topic smallTitle="トイソルジャーと申します！" content="ようこそ！夢と希望の町へ！あいたた！"></Topic>
        <Topic smallTitle="トイソルジャーと申します！" content="ようこそ！夢と希望の町へ！あいたた！"></Topic>
        <Topic smallTitle="トイソルジャーと申します！" content="ようこそ！夢と希望の町へ！あいたた！"></Topic>
        <Topic smallTitle="トイソルジャーと申します！" content="ようこそ！夢と希望の町へ！あいたた！"></Topic>
        <Topic smallTitle="トイソルジャーと申します！" content="ようこそ！夢と希望の町へ！あいたた！"></Topic>
        <Topic smallTitle="トイソルジャーと申します！" content="ようこそ！夢と希望の町へ！あいたた！"></Topic>
      </div>
    </React.Fragment>
  )
}

export default Content_home
