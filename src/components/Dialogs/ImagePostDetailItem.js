import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import { CardHeader, Avatar, CardActions, TextField, FormControl, Input, createMuiTheme } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import PostActivityWidget from '../../widgets/posts/PostActivityWidget';
import Utility from '../../services/Utility';

const theme = createMuiTheme({
  spacing: 10,
})
const styles = {
  card: {
    display: 'flex',
    height: '100%',
    borderRadius: 0,
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      position: 'relative',
    }
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: '50%',
    height: '100%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      height: 200,
    }

  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  subheader: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
  },
  header: {
      borderBottom: '1px solid #efefef'
  },
  alarmIcon: {
      margin: '0 0 5px 0',
      height: 15,
      height: 15,
  },
  formControl: {
      flex: 1,
      borderTop: '1px solid #efefef',
  },
  input: {
      padding: 10,
  },
  iconButton: {
    position: 'absolute',
    //display: 'none',
    right: 10,
    top: 10,
  }
};

function ImagePostDetailItem(props) {
  const { classes, theme, item } = props;
  return (
    <Card className={classes.card}>
        
        <CardMedia
            className={classes.cover}
            image={Utility.getPath(item.coverImage)}
            title={item.text}
        />
        <div className={classes.details}>
          <PostActivityWidget item={item} {...props} />
        </div>
    </Card>
  );
}

ImagePostDetailItem.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ImagePostDetailItem);
