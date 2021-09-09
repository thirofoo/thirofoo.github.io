import React from 'react'
import Topic from '../../Organisms/Topic'
import Title from '../../Atoms/Title'
import SubContent from '../../Atoms/SubContent'

const Content_home: React.FC = () => {
  return (
    <React.Fragment>
      <Title
        top="Welecome to thirofoo_home!"
        discription="ここはt.hirotoのhomepageです！のんびり発展させていきます！(9/5 開設)"
        discription2=""
      ></Title>
      {/* <Title
        top="Welecome to thirofoo_home!"
        discription="ここはT.hirotoのhomepageです！これからのんびりと発展させていきます！(at 9/5) 主に自分のprofileと今まで作ってきたproductをまとめていく予定です！(まだまとめる程のproductは無いけど...)"
      ></Title> */}

      <div>
        <SubContent
          subtitle="About me"
          subcontent=" 栃木生まれ・栃木育ちの埼玉大学工学部情報工学科1年。プログラミングを始めたのは大学生になってからでまだ初心者。どちらかというとバックエンドに興味を持っている。thirofooという名前の由来は自分でもわからないが、小学生のころから使っている名前の1つ。"
        ></SubContent>
        <SubContent subtitle="Main topic" subcontent=""></SubContent>
        <span className="next"></span>
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
