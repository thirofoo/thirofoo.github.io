import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import HelpIcon from '@material-ui/icons/Help'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import Link from '@material-ui/core/Link'
import MenuIcon from '@material-ui/icons/Menu'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import Toolbar from '@material-ui/core/Toolbar'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'
import { createStyles, Theme, withStyles, WithStyles, createTheme } from '@material-ui/core/styles'
import { useState } from 'react'
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
      main: '#c5cae9',
    },
    secondary: {
      main: '#121858',
    },
  },
})

interface HeaderProps extends WithStyles<typeof styles> {
  onDrawerToggle: () => void
}

function Header(props: HeaderProps) {
  const { classes, onDrawerToggle } = props

  const [isActivce, setIsActive] = useState(0)

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <AppBar color="secondary" position="sticky" elevation={0}>
          <Toolbar>
            <Grid container spacing={1} alignItems="center">
              <Hidden smUp>
                <Grid item>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={onDrawerToggle}
                    className={classes.menuButton}
                  >
                    <MenuIcon />
                  </IconButton>
                </Grid>
              </Hidden>
              <Grid item xs />
              <Grid item>
                <Link className={classes.link} href="#" variant="body2">
                  Recent Change
                </Link>
              </Grid>
              <Grid item>
                <Tooltip title="Alerts • No alerts">
                  <IconButton color="inherit">
                    <NotificationsIcon />
                  </IconButton>
                </Tooltip>
              </Grid>
              <Grid item>
                <IconButton color="inherit" className={classes.iconButtonAvatar}>
                  <Avatar src="./build/images/avatar/night.jpg" alt="Takahashi Hiroto" />
                </IconButton>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <AppBar component="div" className={classes.secondaryBar} color="primary" position="static" elevation={0}>
          <Toolbar>
            <Grid container alignItems="center" spacing={1}>
              <Grid item xs>
                <Typography color="inherit" variant="h5" component="h1">
                  thirofoo_Home
                </Typography>
              </Grid>
              <Grid item>
                <Button className={classes.button} variant="outlined" color="inherit" size="small">
                  Question
                </Button>
              </Grid>
              <Grid item>
                <Tooltip title="Help">
                  <IconButton color="inherit">
                    <HelpIcon />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <AppBar component="div" className={classes.secondaryBar} color="primary" position="static" elevation={0}>
          <Tabs value={isActivce} textColor="inherit">
            <Tab textColor="inherit" label="Basic" onClick={() => setIsActive(0)} />
            <Tab textColor="inherit" label="Carrer" onClick={() => setIsActive(1)} />
            <Tab textColor="inherit" label="Templates" onClick={() => setIsActive(2)} />
            <Tab textColor="inherit" label="Usage" onClick={() => setIsActive(3)} />
          </Tabs>
        </AppBar>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default withStyles(styles)(Header)
