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
import TextWidget from '../TextWidget';
import KPaper from '../../KPaper';
import Utility from '../../../../services/Utility';


const styles = theme => ({
  card: {
    flex: 1,
    minHeight: 200,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    '&$$ ::before':  {
      content:"",
      display: 'block',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      backgroundColor: 'rgba(255, 255, 255, .8)',
    }
  },
  content: {
    paddingTop: '60%',
    position: 'relative',
    color: '#fcfcfc',
  },
  actions: {
    display: 'flex',
    padding: `${theme.spacing.unit * 0.7}px ${theme.spacing.unit * 1.5}px`,
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
    backgroundColor: 'transparent',
    borderColor: '#00927d',
    borderWidth: 2,
    borderStyle: 'solid'
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
    const { classes, src, item, fullName } = this.props;
    const cover = Utility.getPath(item.src);
    const image = cover? cover: "/images/post-img.png";

    return (
      <KPaper square={false} className={classes.card} style={{backgroundImage: `url(${image})`}}>

        <TextWidget
          type="image"
          text={item.text}
          user={{avatar: item.user && item.user.avatar? Utility.getAvatar(item.user.avatar): Utility.getAvatar("")}}
          comments={item.comments_count}
          endorsements={item.likes_count}
          backgroundColor={item.backgroundColor}
          textColor={item.textColor}
          fullName={fullName}
          contentStyle={{paddingTop: '70%',}}
          {...this.props}
        />
        
      </KPaper>
    );
  }
}

ImageCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageCard);
