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
}

const Topic: React.FC<Props> = ({ smallTitle, content }) => {
  return (
    <div className="container">
      <Typography align="center" className="smallTitle">
        {smallTitle}
      </Typography>
      <Typography align="center" className="topic">
        {content}
      </Typography>
    </div>
  )
}

export default Topic
