// import HomeIcon from '@material-ui/icons/Home'
// import DnsRoundedIcon from '@material-ui/icons/DnsRounded'
// import SettingsIcon from '@material-ui/icons/Settings'
// import TwitterIcon from '@material-ui/icons/Twitter'
// import InstagramIcon from '@material-ui/icons/Instagram'
// import GitHubIcon from '@material-ui/icons/GitHub'
// import { useState } from 'react'
// import AccountCircleIcon from '@material-ui/icons/AccountCircle'
// import { Grid } from '@material-ui/core'
// import clsx from 'clsx'
import News from 'components/Atoms/News'
import List from '@material-ui/core/List'
import { Omit } from '@material-ui/types'
import { ListItem } from '@material-ui/core'
import Drawer, { DrawerProps } from '@material-ui/core/Drawer'
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles'
import ListItemText from '@material-ui/core/ListItemText'
import 'App.css'

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
      fontSize: 24,
      color: theme.palette.common.white,
    },
    iconButtonAvatar: {
      padding: 4,
      right: '5px',
    },
    itemActiveItem: {
      color: '#322121f1',
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

export interface NavigatorProps extends Omit<DrawerProps, 'classes'>, WithStyles<typeof styles> {}

function Notification(props: NavigatorProps) {
  const { classes, ...other } = props

  const children = [
    { date: '9/5', news: 'homepageを開設しました！' },
    { date: '9/5', news: 'homepageを開設しました！' },
    { date: '9/5', news: 'homepageを開設しました？' },
  ]

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding className="item">
        <ListItemText>
          <p className="notif">Notifications</p>
        </ListItemText>
        {children.map(({ date, news }) => (
          <ListItem>
            <ListItemText>
              <News date={date} news={news}></News>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

export default withStyles(styles)(Notification)
