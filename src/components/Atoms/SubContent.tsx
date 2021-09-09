import './Title.css'
import { useState } from 'react'

type Props = {
  subtitle: string
  subcontent: string
}

const SubContent: React.FC<Props> = ({ subtitle, subcontent }) => {
  const [isAnimation, setIsAnimation] = useState(false)
  const [isAnimation2, setIsAnimation2] = useState(false)
  const subtitle_class = document.getElementsByClassName('subtitle')
  const subtitle_class_change = 100
  const subtitle2_class_change = 600

  window.addEventListener(
    'scroll',
    function (e) {
      if (!isAnimation) {
        window.requestAnimationFrame(function () {
          if (subtitle_class_change < window.scrollY) {
            subtitle_class[0].classList.replace('ready', 'title')
          }
        })
        setIsAnimation(true)
      }
    },
    { passive: true }
  )

  window.addEventListener(
    'scroll',
    function (e) {
      if (!isAnimation2) {
        window.requestAnimationFrame(function () {
          if (subtitle2_class_change < window.scrollY) {
            subtitle_class[1].classList.replace('ready', 'title')
          }
        })
        setIsAnimation2(true)
      }
    },
    { passive: true }
  )

  return (
    <div>
      <h2 className="subtitle ready">{subtitle}</h2>
      <p className="subcontent" style={{ marginLeft: '15%', marginRight: '15%', display: 'block', fontSize: '20px' }}>
        {subcontent}
      </p>
    </div>
  )
}

export default SubContent
