import React from 'react';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import PrimaryNavBar from '../PrimaryNavBar';
import LeftSidebar from '../LeftSidebar';
import withSidebar from './withSidebar';
import AppNavBar from '../../widgets/app/AppNavBar';

const theme = createMuiTheme({
  spacing: 10,
});

const styles = {
  wrapper: {
    margin: 0,
    padding: 0,
    display: 'block',
  },
  header: {
    position: 'fixed',
    minHeight: theme.spacing.unit * 4.0,
    width: '100%',
    backgroundColor: '#fff',
    zIndex: 200,
    margin: 0,
    padding: 0,
    top: 0,
    boxShadow: `0px 2px 4px -1px rgba(0,0,0,0), 0px 4px 5px 0px rgba(0,0,0,0), 0px 1px 10px 0px rgba(0,0,0,0.12)`,
  },
  contentWrapper: {
    marginTop: theme.spacing.unit * 9.4,
    marginRight: theme.spacing.unit * 10,
    [theme.breakpoints.down('md')]: {
      marginRight: 5,
      margin: 5,
      marginTop: theme.spacing.unit * 9.4,
    }
  },
  sidebar: {
    width: theme.spacing.unit * 26.5,
    position: 'fixed',
    top: theme.spacing.unit * 9.4,
    bottom: 0,
    left: 0,
    overflowY: 'scroll',
    marginLeft: theme.spacing.unit * 10,
    //paddingTop: theme.spacing.unit * 2,
    '&::-webkit-scrollbar': {
      width: '0.1em'
    },
    '&::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 1px rgba(0,0,0,0)'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,0)',
      outline: '1px solid slategrey'
    },
    [theme.breakpoints.down('md')]: {
      display: 'none',
    }
  },
  body: {
    marginLeft: theme.spacing.unit * 35.5,
    //paddingTop: theme.spacing.unit * 2,
    [theme.breakpoints.down('md')]: {
      marginLeft: 0,
    }
  }
};

function SidebarComponent({component: Component, ...props}) {
    
    const { classes, children } = props;
    return (
        <div className={classes.wrapper}>
            <div className={classes.header}>
                <AppNavBar {...props} loggedIn={props.loggedIn} handleLogin={props.handleLogin} handleLogout={props.handleLogout} handleSearch={q => props.handleSearch(q)} />
            </div>
            <div className={classes.contentWrapper}>
                <div className={classes.sidebar}>
                    <LeftSidebar
                    imageurl={props.imageurl} setImageUrl={props.setImageUrl} 
                    setFormdata={props.setFormdata} uploadprogress={props.uploadprogress} 
                    uploadMedia={props.uploadMedia} showpostform={props.showpostform}
                    loggedIn={props.loggedIn} handleLogin={data => props.handleLogin(data)} />
                </div>
                <div className={classes.body}>
                    <Component {...props} />
                </div>
            </div>
        </div>
    )
       
}

SidebarComponent.propTypes = {
    classes: PropTypes.object.isRequired,
}
  
export default withStyles(styles)(SidebarComponent);