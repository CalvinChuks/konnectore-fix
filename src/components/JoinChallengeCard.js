import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 240,
  },
};

function JoinChallengeCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card} style={{marginTop: 20}}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="images/join-the-competition.jpg"
          title="Join the challenge"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Socca Dazzle Competition
          </Typography>
          <Typography component="p">
            Time to put your fancy soccer skills to the test. 
            Join the muffling challenge and stand the chance to win amazing prizes!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

JoinChallengeCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(JoinChallengeCard);