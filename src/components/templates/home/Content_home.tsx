import React from 'react'
import Topic from '../../Organisms/Topic'
import Title from '../../Atoms/Title'
import SubContent from '../../Atoms/SubContent'

const Content_home: React.FC = () => {
  return (
    <React.Fragment>
      <Title
        top="Welecome to thirofoo_home!"
        discription="ここはthirofooのhomepageです！のんびりと発展させていきます。"
        discription2="適当に自分のことを掲載していく予定。"
      ></Title>
      {/* <Title
        top="Welecome to thirofoo_home!"
        discription="ここはthirofooのhomepage。これからのんびりと発展させていく予定。主に自分のprofileと今まで作ってきたproductをまとめていく予定です！(まとめると言う程productは無い)"
      ></Title> */}

      <div>
        <SubContent
          subtitle="About me"
          subcontent=" 栃木出身の埼玉大学工学部情報工学科1年。プログラミングを始めたのは大学生になってからでまだ初心者。 競技プログラミングにはまり中。現在(2/7)AtCorder茶。 Web系の活動は全く出来ていない。"
        ></SubContent>
        <SubContent subtitle="Main topic" subcontent=""></SubContent>
        <span className="next"></span>
        <div style={{ display: 'inline', float: 'left' }}>
          <Topic url="" smallTitle="There is no topic now!" content="Coming soon..."></Topic>
          <Topic url="" smallTitle="There is no topic now!" content="Coming soon..."></Topic>
          <Topic url="" smallTitle="There is no topic now!" content="Coming soon..."></Topic>
          <Topic url="" smallTitle="There is no topic now!" content="Coming soon..."></Topic>
          <Topic url="" smallTitle="There is no topic now!" content="Coming soon..."></Topic>
          <Topic url="" smallTitle="There is no topic now!" content="Coming soon..."></Topic>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Content_home
