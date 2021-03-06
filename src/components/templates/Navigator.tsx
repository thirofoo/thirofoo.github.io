import React from 'react'
// import { children } from 'react';
import clsx from 'clsx'
import Divider from '@material-ui/core/Divider'
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles'
import Drawer, { DrawerProps } from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeIcon from '@material-ui/icons/Home'
import DnsRoundedIcon from '@material-ui/icons/DnsRounded'
import SettingsIcon from '@material-ui/icons/Settings'
import { Omit } from '@material-ui/types'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram'
import GitHubIcon from '@material-ui/icons/GitHub'
import { useState } from 'react'
import { Link } from 'react-router-dom'
// import { Category } from '@material-ui/icons';
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import SchoolIcon from '@material-ui/icons/School'
import { IconButton } from '@material-ui/core'
import { Avatar } from '@material-ui/core'
import { Tooltip } from '@material-ui/core'
import HelpIcon from '@material-ui/icons/Help'
import Grid from '@material-ui/core/Grid'

const styles = (theme: Theme) =>
  createStyles({
    categoryHeader: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    categoryHeaderPrimary: {
      color: theme.palette.common.white,
    },
    item: {
      paddingTop: 1,
      paddingBottom: 1,
      color: 'rgba(255, 255, 255, 0.7)',
      '&:hover,&:focus': {
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
      },
    },
    itemCategory: {
      backgroundColor: '#29232300',
      boxShadow: '0 -1px 0 #000000 inset',
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    firebase: {
      fontSize: 20,
      color: theme.palette.common.white,
    },
    iconButtonAvatar: {
      padding: 4,
      right: '5px',
    },
    itemActiveItem: {
      fontSize: 23,
      color: '#c0c0ff',
    },
    itemPrimary: {
      fontSize: 'inherit',
    },
    itemIcon: {
      minWidth: 'auto',
      marginRight: theme.spacing(2),
    },
    divider: {
      marginTop: theme.spacing(2),
    },
  })

export interface NavigatorProps extends Omit<DrawerProps, 'classes'>, WithStyles<typeof styles> {
  onDrawerToggle: () => void
}

function Navigator(props: NavigatorProps) {
  const { classes, onDrawerToggle, ...other } = props

  const [homeActive, setHomeActive] = useState(true)
  const [profileActive, setProfileActive] = useState(false)
  const [productActive, setProductActive] = useState(false)
  const [configActive, setConfigActive] = useState(false)

  function setActive(childId: string) {
    setHomeActive(false)
    setProfileActive(false)
    setProductActive(false)
    setConfigActive(false)

    if (childId == 'Home') setHomeActive(true)
    if (childId == 'Profile') setProfileActive(true)
    if (childId == 'Product') setProductActive(true)
    if (childId == 'Config') setConfigActive(true)
    if (childId == 'Twitter') window.location.href = 'https://twitter.com/through__TH'
    if (childId == 'Instagram') window.location.href = 'https://www.instagram.com/thirofoo/'
    if (childId == 'Github') window.location.href = 'https://github.com/thirofoo'
  }

  const categories = [
    {
      id: 'Detail',
      children: [
        { id: 'Home', icon: <HomeIcon />, active: homeActive, path: '/' },
        { id: 'Profile', icon: <AccountCircleIcon />, active: profileActive, path: '/profile' },
        { id: 'Product', icon: <DnsRoundedIcon />, active: productActive, path: '/product' },
        { id: 'Config', icon: <SettingsIcon />, active: configActive, path: '/config' },
      ],
    },
    {
      id: 'Accounts',
      children: [
        { id: 'Twitter', icon: <TwitterIcon />, active: false, path: '' },
        { id: 'Instagram', icon: <InstagramIcon />, active: false, path: '' },
        { id: 'Github', icon: <GitHubIcon />, active: false, path: '' },
      ],
    },
  ]

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem className={clsx(classes.firebase, classes.item, classes.itemCategory)}>
          <Grid item>
            <IconButton color="inherit" className={classes.iconButtonAvatar}>
              <Avatar src="./img/night.jpg" alt="Takahashi Hiroto" />
            </IconButton>
          </Grid>
          thirofoo_home
          <Grid item>
            <Tooltip title="Help">
              <IconButton color="inherit">
                <HelpIcon />
              </IconButton>
            </Tooltip>
          </Grid>
        </ListItem>
        <ListItem className={clsx(classes.item, classes.itemCategory)}>
          <ListItemIcon className={classes.itemIcon}>
            <SchoolIcon />
          </ListItemIcon>
          <ListItemText
            classes={{
              primary: classes.itemPrimary,
            }}
          >
            <a href="http://www.saitama-u.ac.jp/" style={{ color: 'white', textDecoration: 'none', fontSize: '20px' }}>
              Saitama.univ
            </a>
          </ListItemText>
        </ListItem>

        {categories.map(({ id, children }) => (
          <React.Fragment key={id}>
            <ListItem className={classes.categoryHeader}>
              <ListItemText
                classes={{
                  primary: classes.categoryHeaderPrimary,
                }}
              >
                {id}
              </ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active, path }) => (
              <Link to={path} style={{ textDecoration: 'none' }}>
                <ListItem
                  key={childId}
                  button
                  className={clsx(classes.item, active && classes.itemActiveItem)}
                  onClick={() => {
                    setActive(childId)
                    onDrawerToggle()
                  }}
                >
                  <ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.itemPrimary,
                    }}
                  >
                    {childId}
                  </ListItemText>
                </ListItem>
              </Link>
            ))}
            <Divider className={classes.divider} />
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  )
}

export default withStyles(styles)(Navigator)
