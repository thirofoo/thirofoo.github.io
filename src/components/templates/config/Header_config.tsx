// import Avatar from '@material-ui/core/Avatar'
// import Button from '@material-ui/core/Button'
// import HelpIcon from '@material-ui/icons/Help'
// import Hidden from '@material-ui/core/Hidden'
// import Link from '@material-ui/core/Link'
// import Tab from '@material-ui/core/Tab'
// import Tabs from '@material-ui/core/Tabs'
import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid'
import MenuIcon from '@material-ui/icons/Menu'
import NotificationsIcon from '@material-ui/icons/Notifications'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'
import { createStyles, Theme, withStyles, WithStyles, createTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'

const lightColor = 'rgba(255, 255, 255, 0.7)'

const styles = (theme: Theme) =>
  createStyles({
    secondaryBar: {
      zIndex: 0,
    },
    menuButton: {
      marginLeft: -theme.spacing(1),
    },
    iconButtonAvatar: {
      padding: 4,
    },
    link: {
      textDecoration: 'none',
      color: lightColor,
      '&:hover': {
        color: theme.palette.common.white,
      },
    },
    button: {
      borderColor: lightColor,
    },
  })

const theme = createTheme({
  palette: {
    primary: {
      main: '#534a45b0',
    },
    secondary: {
      main: '#534a45b0',
    },
  },
})

interface HeaderProps extends WithStyles<typeof styles> {
  onDrawerToggle: () => void
  onDrawerToggle2: () => void
}

function Header_home(props: HeaderProps) {
  const { classes, onDrawerToggle, onDrawerToggle2 } = props

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <AppBar color="secondary" position="sticky" elevation={0}>
          <Toolbar>
            <Grid container spacing={1} alignItems="center">
              {/* <Hidden xlUp> */}
              {/* <Hidden smUp> ここはメニューバーが現れるタイミング*/}
              <Grid item>
                <Tooltip title="Menu">
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={onDrawerToggle}
                    className={classes.menuButton}
                  >
                    <MenuIcon />
                  </IconButton>
                </Tooltip>
              </Grid>
              {/* </Hidden> */}
              <Grid item xs />
              {/* <Grid item>
                <Button className={classes.button} variant="outlined" color="inherit" size="small">
                  Question
                </Button>
              </Grid> */}

              <Grid item>
                <Tooltip title="Alerts • No alerts">
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={onDrawerToggle2}
                    className={classes.menuButton}
                  >
                    <NotificationsIcon />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        {/* <AppBar component="div" className={classes.secondaryBar} color="primary" position="static" elevation={0}>
          <Toolbar>
            <Grid container alignItems="center" spacing={1}>
              <Grid item xs>
                <Typography
                  color="inherit"
                  variant="h5"
                  component="h1"
                  className="thirofoo_home"
                  style={{
                    overflow: 'hidden',
                    marginBottom: '30px',
                    backgroundColor: '##fafafa',
                    fontSize: '35px',
                    paddingBottom: '0px',
                    textShadow: '1px 1px 2px #1a1a1ac7',
                  }}
                >
                  thirofoo_Home
                </Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <AppBar
          component="div"
          className={classes.secondaryBar}
          color="primary"
          position="static"
          elevation={0}
          style={{ textShadow: '-moz-initial' }}
        >
          <Tabs value={isActivce} textColor="inherit">
            <Tab textColor="inherit" label="Top" onClick={() => setIsActive(0)} />
            <Tab textColor="inherit" label="News" onClick={() => setIsActive(1)} />
            <Tab textColor="inherit" label="others" onClick={() => setIsActive(2)} />
          </Tabs>
        </AppBar> */}
      </ThemeProvider>
    </React.Fragment>
  )
}

export default withStyles(styles)(Header_home)
