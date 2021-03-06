import React from 'react'
import { createTheme, createStyles, ThemeProvider, withStyles, WithStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
// import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Navigator from '../templates/Navigator'
import Content_home from '../templates/home/Content_home'
import Content_profile from '../templates/profile/Content_profile'
import Content_product from '../templates/product/Content_product'
import Content_config from '../templates/config/Content_config'
import Header_home from '../templates/home/Header_home'
import Header_profile from '../templates/profile/Header_profile'
import Header_product from '../templates/product/Header_product'
import Header_config from '../templates/config/Header_config'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ScrollToTop from 'components/templates/ScrollToTop'
import Notification from 'components/templates/Notification'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        大翔(@through__TH)
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

let theme = createTheme({
  palette: {
    primary: {
      light: '#63ccff',
      main: '#009be1',
      dark: '#006db3',
    },
  },
  typography: {
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  props: {
    MuiTab: {
      disableRipple: true,
    },
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
})

theme = {
  ...theme,
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: '#00000070',
      },
    },
    MuiButton: {
      label: {
        textTransform: 'none',
      },
      contained: {
        boxShadow: 'none',
        '&:active': {
          boxShadow: 'none',
        },
      },
    },
    MuiTabs: {
      root: {
        marginLeft: theme.spacing(1),
      },
      indicator: {
        height: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        backgroundColor: theme.palette.common.white,
      },
    },
    MuiTab: {
      root: {
        textTransform: 'none',
        margin: '0 16px',
        minWidth: 0,
        padding: 0,
        [theme.breakpoints.up('md')]: {
          padding: 0,
          minWidth: 0,
        },
      },
    },
    MuiIconButton: {
      root: {
        padding: theme.spacing(1),
      },
    },
    MuiTooltip: {
      tooltip: {
        borderRadius: 4,
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: '#000000',
        height: '1.1px',
      },
    },
    MuiListItemText: {
      primary: {
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
    MuiListItemIcon: {
      root: {
        color: 'inherit',
        marginRight: 0,
        '& svg': {
          fontSize: 20,
        },
      },
    },
    MuiAvatar: {
      root: {
        width: 32,
        height: 32,
      },
    },
  },
}

const drawerWidth = 256

const styles = createStyles({
  root: {
    display: 'flex',
    minHeight: '100vh',
  },
  drawer: {
    // [theme.breakpoints.up('xl')]: {
    // // [theme.breakpoints.up('sm')]: {
    //   width: drawerWidth,
    //   flexShrink: 0,
    // },
  },
  app: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    flex: 1,
    // padding: theme.spacing(6, 4),
    //背景の透過度と色
    background: '#ffffffdd',
    paddingTop: 0,
  },
  footer: {
    padding: theme.spacing(2),
    background: '#eaeff1',
  },
})

export interface PaperbaseProps extends WithStyles<typeof styles> {
  root: string
}

function Paperbase(props: PaperbaseProps) {
  const { classes } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [mobileOpen2, setMobileOpen2] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleDrawerToggle2 = () => {
    setMobileOpen2(!mobileOpen2)
  }

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollToTop></ScrollToTop>
        <div className="root">
          <CssBaseline />
          <nav className={classes.drawer}>
            {/* <Hidden xlUp implementation="js"> */}
            {/* <Hidden smUp implementation="js"> ここはメニューボタンを押してメニューバーが開くかどうかを調節する部位 */}
            <Navigator
              PaperProps={{ style: { width: drawerWidth } }}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              onDrawerToggle={handleDrawerToggle}
            />
            <Notification
              PaperProps={{ style: { width: drawerWidth } }}
              variant="temporary"
              open={mobileOpen2}
              onClose={handleDrawerToggle2}
            />
            {/* </Hidden> */}
            {/* <Hidden xlDown implementation="css">
              <Navigator PaperProps={{ style: { width: drawerWidth } }} />
            </Hidden> */}
          </nav>

          <div className={classes.app}>
            <Route
              exact
              path="/"
              render={() => <Header_home onDrawerToggle={handleDrawerToggle} onDrawerToggle2={handleDrawerToggle2} />}
            ></Route>
            <Route
              path="/profile"
              render={() => (
                <Header_profile onDrawerToggle={handleDrawerToggle} onDrawerToggle2={handleDrawerToggle2} />
              )}
            ></Route>
            <Route
              path="/product"
              render={() => (
                <Header_product onDrawerToggle={handleDrawerToggle} onDrawerToggle2={handleDrawerToggle2} />
              )}
            ></Route>
            <Route
              path="/config"
              render={() => <Header_config onDrawerToggle={handleDrawerToggle} onDrawerToggle2={handleDrawerToggle2} />}
            ></Route>
            {/* <Header onDrawerToggle={handleDrawerToggle} /> */}
            <main
              className={classes.main}
              style={{
                boxShadow: '0px 0px 20px 0px black',
                overflow: 'hidden',
              }}
            >
              <Route path="/config" component={Content_config} />
              <Route path="/product" component={Content_product} />
              <Route path="/profile" component={Content_profile} />
              <Route exact path="/" component={Content_home} />
            </main>
            <footer className={classes.footer}>
              <Copyright />
            </footer>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default withStyles(styles)(Paperbase)
