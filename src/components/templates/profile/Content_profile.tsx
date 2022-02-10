import React, { useEffect } from 'react'
import Title from 'components/Atoms/Title'
import Topic from 'components/Organisms/Topic'

const Content_product: React.FC = () => {
  return (
    <React.Fragment>
      <div className="subtitle" style={{ padding: 0, margin: 0 }}></div>
      <div className="subtitle" style={{ padding: 0, margin: 0 }}></div>
      <Title top="Profile" discription="ここでは自分のやっていることを書き連ねる予定です！" discription2=""></Title>
      {/* <Topic smallTitle='自己紹介' url='#' content='Homeにも合った通りのプログラミング初心者。スポーツはバスケ・卓球、ゲームはポケモンぷよぷよが好き。' ></Topic>
      <Topic smallTitle='所属大学' url='' content='小山高等学校→埼玉大学工学部情報工学科。' ></Topic>
      <Topic smallTitle='所持資格' url='' content='英検二級。数検準一級。' ></Topic> */}
      <Topic
        smallTitle="競技プログラミング(AtCoder)"
        url="https://atcoder.jp/users/through"
        content="・11/27~ AtCorder開始。 ・1/29 入茶。 ・その他の競技プログラミングサイトではまだ活動していない。"
      ></Topic>
      <Topic smallTitle="There is no topic now!" url="" content="Coming soon ..."></Topic>
      <Topic smallTitle="There is no topic now!" url="" content="Coming soon ..."></Topic>
      <Topic smallTitle="There is no topic now!" url="" content="Coming soon ..."></Topic>
    </React.Fragment>
  )
}

export default Content_product
