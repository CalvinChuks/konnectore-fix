import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import TimelapseIcon from '@material-ui/icons/Timelapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { H4, Link } from '@material-ui/core/Typography';
import SvgIcon from '@material-ui/icons/MoreVert';


const styles = theme => ({
  card: {
    flex: 1,
    minHeight: 200,
  },
  content: {
    paddingTop: '50%',
    position: 'relative',
    color: '#fcfcfc',
  },
  actions: {
    display: 'flex',
    padding: `${theme.spacing.unit * 0.7}px ${theme.spacing.unit * 1.5}px`,
  },
  p: {
    color: '#fcfcfc',
    fontSize: theme.spacing.unit * 1.3,
    fontWeight: 200,
  },
  h4: {
    color: '#fcfcfc',
    fontSize: theme.spacing.unit * 1.5,
    fontWeight: 400,
  },
  stats: {
    color: '#fcfcfc',
    fontSize: theme.spacing.unit * 1.1,
    fontWeight: 200,
    display: 'inline'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
    borderColor: '#00927d',
    borderWidth: 2,
    borderStyle: 'solid'
  },
  typeIcon: {
      position: 'absolute',
      right: 20,
      top: 10,
  },
  more: {
      color: 'white',
      display: 'inline',
      marginLeft: 'auto',
  },
  footer: {
      display: 'flex',
      alignItems: 'center',
      marginTop: theme.spacing.unit * 2,
  },
  title: {
    marginLeft: theme.spacing.unit * 1.5,
  },
  titleStat: {
      color: '#ccc',
      fontSize: theme.spacing.unit * 1.1,
      fontWeight: 200,
  },
  rule: {borderTop: '1px solid #777', margin: `0 ${theme.spacing.unit * 2}px`, height: 1},
});

class ImageCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes, src } = this.props;
    const image = "/images/post-img.png";

    return (
      <Card className={classes.card} style={{backgroundImage: `url(${image})`, backgroundSize: 'cover'}}>

        <CardContent
          className={classes.content}
          action="icon"
        >
        <IconButton className={classes.typeIcon} color="primary">
            <img src="/images/video-icon.svg" />
        </IconButton>
        
        <p className={classes.p}>
            Decided to just do a little snipet of me performing an acoustic session after the shoot of my next release this
            <span className={classes.more}> Read more</span>  
        </p>
        <div className={classes.footer}>
            <Icon>
                <TimelapseIcon />
            </Icon>
            <Typography className={classes.stats}>{ this.props.index }</Typography>

            <Icon>
                <TimelapseIcon />
            </Icon>
            <Typography className={classes.stats}>
                580 comments
            </Typography>
        </div>
           
        </CardContent>
        <div className={classes.rule} />

        <CardActions className={classes.actions} disableActionSpacing >
            <Avatar alt="Jide Adeleke" src="/images/avatar.png" className={classes.avatar} />
            <div className={classes.title}>
                <Typography component="h4" className={classes.h4}>Ugo Mouka</Typography>
                <Typography className={classes.titleStat}>12 hours ago</Typography>
            </div>
          
          <IconButton
            className={classes.more}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <MoreHorizIcon />
          </IconButton>
        </CardActions>
        
        
      </Card>
    );
  }
}

ImageCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageCard);