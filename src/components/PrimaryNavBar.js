import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Avatar from '@material-ui/core/Avatar';
import { Grid, Paper, List, ListItem, ListItemIcon, ListItemText, Link } from '@material-ui/core';
import DraftsIcon from '@material-ui/icons/Drafts';
import HomeIcon from '@material-ui/icons/Home';
import InboxIcon from '@material-ui/icons/Inbox';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import GroupIcon from '@material-ui/icons/Group';

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  avatar: {
    borderRadius: 3
  },
  uAvatar: {
    borderRadius: 15
  },
  link: {
    margin: theme.spacing.unit,
  },
  search: {
    position: 'relative',
    borderRadius: 18,
    backgroundColor: fade(theme.palette.common.black, 0.06),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.08),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

class PrimaryNavBar extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const dudUrl = 'javascript:;';

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        <MenuItem>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem>
          <IconButton color="inherit">
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static" color="white">
          <Toolbar style={{flexGrow: 1, backgroundColor: 'white'}}>
            <Grid container spacing={12}>
              <Grid item xs={3} style={{display: 'flex', alignItems: 'center'}}>
                <div style={{display: 'flex', justifyContent: 'start', alignItems: 'center'}}>
                  <Avatar className={classes.avatar} alt="Konnectore Logo" src="images/konnectore-logo.png" />
                </div>
              </Grid>
              <Grid item xs={6} style={{display: 'flex', justifyContent: 'start', alignItems: 'center'}}>
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                  />
                </div>
              </Grid>
              <Grid item xs={3} style={{display: 'flex', flexDirection: 'row-reverse', justifyContent: 'end', alignItems: 'center'}}>
            <div className={classes.sectionDesktop} style={{display: 'flex', alignItems: 'center'}}>
              
            <Typography variant="subtitle2" gutterBottom>
              Jide Adeleke
            </Typography>
            <IconButton>
                <Avatar alt="Remy Sharp" src="/images/avatar.png" className={classes.uAvatar} />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <MoreIcon />
              </IconButton>
            </div>
              </Grid>
            </Grid>
         
          </Toolbar>
        </AppBar>
        {renderMenu}
        {renderMobileMenu}

        <div style={{marginTop: 30, marginLeft: 20, marginRight: 20}}>
          <Grid container xs={12}>
            <Grid item xs={3}>
              <Paper style={{boxShadow: 'none'}}>
              <List component="nav" style={{paddingTop: 0}}>
                <ListItem button selected={true} style={{backgroundColor: '#00927d', color: 'white', borderRadius: 5}}>
                  <ListItemIcon>
                    <HomeIcon style={{color: 'white'}} />
                  </ListItemIcon>
                  <ListItemText primary={
                    <React.Fragment>
                      <Typography style={{color: 'white'}}>
                        Home
                      </Typography>
                    </React.Fragment>
                  } />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <GroupIcon />
                  </ListItemIcon>
                  <ListItemText primary="Friends" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <NotificationsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Activity" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Inbox" />
                </ListItem>
              </List>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper style={{boxShadow: 'none', textAlign: "left", paddingLeft: 10, paddingRight: 10}}>
                <Typography>
                  <span>Showing results for</span>
                  <span style={{color: '#00927d'}}> #100yearchallenge</span>
                </Typography>
                
                <div>
                  <Typography>
                    <Link href={dudUrl} color="#00927d" className={classes.link}>
                      All
                    </Link>
                    <Link href={dudUrl} className={classes.link}>
                      Posts
                    </Link>
                    <Link href={dudUrl} className={classes.link}>
                      Images
                    </Link>
                    <Link href={dudUrl} className={classes.link}>
                      Videos
                    </Link>
                    <Link href={dudUrl} className={classes.link}>
                      People
                    </Link>
                  </Typography>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={3}>
            
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

PrimaryNavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PrimaryNavBar);