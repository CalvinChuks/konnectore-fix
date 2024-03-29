import React from 'react';
import { Typography, withStyles, Avatar, createMuiTheme } from '@material-ui/core';
import KButtonSmall from '../KButtonSmall';
import { Link } from 'react-router-dom';
import Utility from '../../../services/Utility';

const theme = createMuiTheme({
    spacing: 10,
})

const styles = {
    item: {
        width: '25%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        [theme.breakpoints.down('md')]: {
            width: '50%',
        }
    },
    link1: {
        textDecoration: 'none',
        fontStyle: 'normal',
        color: 'black',
        cursor: 'pointer',
        textAlign: 'center',
    }
};

const FriendConnectCard = props => {
    const { classes, person, handleFollow, handleUnfollow, user } = props;
    //console.log(props);
    if(!person.profile) {
        return null;
    }
    const fullName = person.profile.firstname + " " + person.profile.lastname;
    const src = Utility.getAvatar(person.profile.avatar);
    const active = person.type === 1? false: true; 
    return (
        <div className={classes.item}>
            <Link to={`/people/${person.id}`}><Avatar alt={fullName} src={src} /></Link>
            <Link to={`/people/${person.id}`} className={classes.link1}><Typography style={{margin: '.6em auto'}}>{fullName}</Typography></Link>
            {person.following < 1 ? <KButtonSmall label="Follow" 
                size="small" onClick={() => handleFollow(person.id)} />: 
                <KButtonSmall label="Unfollow" collor="secondary"
                size="small" onClick={() => handleUnfollow(person.id)} />}
        </div>
    )
}

export default withStyles(styles)(FriendConnectCard);