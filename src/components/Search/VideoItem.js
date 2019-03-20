import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import { loadCSS } from 'fg-loadcss/src/loadCSS';
import { Avatar, CardHeader, Icon } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
  card: {
    display: 'flex',
    margin: theme.spacing.unit * 1,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '60%',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: '40%',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  title: {
      fontSize: '1.1em',
  },
  icon: {
    margin: theme.spacing.unit * 0.1,
    fontSize: '0.9em',
  },
  small: {
      fontSize: '0.8em'
  }

});

class VideoItem extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        loadCSS(
          'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
          document.querySelector('#insertion-point-jss'),
        );
      }

    render() {
  const { classes, theme, item, } = this.props;

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cover}
        image="/images/post-img.png"
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardHeader
          avatar={
            <Avatar alt="Jide Adeleke" src="/images/avatar.png" className={classes.avatar} />
          }
          title={
            <Typography component="h5" variant="h5" className={classes.title}>
                Victor Omemu
            </Typography>
          }
          subheader="30 min ago"
        />
        <CardContent className={classes.content}>
          <Typography variant="body1" color="textSecondary">
            {item.text}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton>
            <Icon className={classNames(classes.icon, 'far fa-heart')} />
          </IconButton>
          <Typography variant="subheading" color="textSecondary" className={classes.small}>1,178 likes</Typography>
          <IconButton style={{marginLeft: 50}}>
            <Icon className={classNames(classes.icon, 'far fa-comment-dots')} />
          </IconButton>
          <Typography variant="subheading" color="textSecondary" className={classes.small}>178 comments</Typography>
        </div>
      </div>
    </Card>
  );
        }
}

VideoItem.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(VideoItem);