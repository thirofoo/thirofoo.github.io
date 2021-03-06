// import AppBar from '@material-ui/core/AppBar'
// import Toolbar from '@material-ui/core/Toolbar'
// import Paper from '@material-ui/core/Paper'
// import Grid from '@material-ui/core/Grid'
// import Button from '@material-ui/core/Button'
// import TextField from '@material-ui/core/TextField'
// import Tooltip from '@material-ui/core/Tooltip'
// import IconButton from '@material-ui/core/IconButton'
// import { withWidth } from '@material-ui/core'
// import SearchIcon from '@material-ui/icons/Search'
// import RefreshIcon from '@material-ui/icons/Refresh'
// import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import './Topic.css'

type Props = {
  smallTitle: string
  content: string
  url: string
}

const Topic: React.FC<Props> = ({ smallTitle, content, url }) => {
  return (
    <div className="container">
      <div>
        <Typography align="center">
          <a href={url} className="smallTitle">
            {' '}
            ・{smallTitle}{' '}
          </a>
        </Typography>
        <Typography align="center" className="topic">
          <div className="explain">{content}</div>
        </Typography>
      </div>
    </div>
  )
}

export default Topic
