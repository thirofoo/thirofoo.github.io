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
        discription="ここでは今までで作ってきたものを掲載していく予定です！ "
        discription2=""
      ></Title>
      <Topic
        url="https://tetris-application.herokuapp.com/"
        smallTitle="Tetris"
        content="　初めて作ったwebサイト。キーボード操作の為スマホでは操作できない＆スマホでやる用に作っていない為スマホだと作画崩壊を起こす。またパソコンでやっても軽く作画崩壊。さらにはTスピンも出来ない糞仕様。とにかく何から何まで初めての状態で作った為ボロボロだが、思い出のサイト。"
      ></Topic>
      <Topic url="" smallTitle="There is no topic now!" content="Coming soon... "></Topic>
      <Topic url="" smallTitle="There is no topic now!" content="Coming soon..."></Topic>
      <Topic url="" smallTitle="There is no topic now!" content="Coming soon..."></Topic>
    </React.Fragment>
  )
}

export default Content_profile
