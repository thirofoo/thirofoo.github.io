import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
// import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
// import Tooltip from '@material-ui/core/Tooltip'
// import IconButton from '@material-ui/core/IconButton'
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles'
// import SearchIcon from '@material-ui/icons/Search'
// import RefreshIcon from '@material-ui/icons/Refresh'

const styles = (theme: Theme) =>
  createStyles({
    paper: {
      maxWidth: 936,
      margin: '30px auto',
      overflow: 'hidden',
    },
    searchBar: {
      borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    },
    searchInput: {
      fontSize: theme.typography.fontSize,
    },
    block: {
      display: 'block',
    },
    addUser: {
      marginRight: theme.spacing(1),
    },
    contentWrapper: {
      margin: '40px 16px',
    },
  })

export interface ContentProps extends WithStyles<typeof styles> {
  paper: string
}

function Topic(props: ContentProps) {
  const { classes } = props

  return (
    <Paper className={classes.paper}>
      <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            {/* <Grid item>
              <SearchIcon className={classes.block} color="inherit" />
            </Grid> */}
            <Grid item xs>
              <TextField
                fullWidth
                placeholder="記事は特にありません！"
                InputProps={{
                  disableUnderline: true,
                  className: classes.searchInput,
                }}
              />
            </Grid>
            {/* <Grid item>
              <Button variant="contained" color="primary" className={classes.addUser}>
                Add user
              </Button>
              <Tooltip title="Reload">
                <IconButton>
                  <RefreshIcon className={classes.block} color="inherit" />
                </IconButton>
              </Tooltip>
            </Grid> */}
          </Grid>
        </Toolbar>
      </AppBar>
      <div className={classes.contentWrapper}>
        <Typography color="textSecondary" align="center">
          There are no topic now!
        </Typography>
      </div>
    </Paper>
  )
}

export default withStyles(styles)(Topic)