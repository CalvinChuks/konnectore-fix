import React from 'react';
import PropTypes from 'prop-types';
import { List, ListSubheader, ListItem, ListItemText, Avatar, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import KPaper from '../UIC/KPaper';
import ReactTimeAgo from 'react-time-ago/commonjs/ReactTimeAgo';
import Utility from '../../services/Utility';

const styles = theme => ({
    subheader: {
        textTransform: 'normal',
    },
    message: {
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
    date: {
        textAlign: 'right',
    },
    item: {
        borderTop: '1px solid #efefef',
    },
    nothread: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    }
});

function InboxSenderList(props) {
    const { classes, threads, user } = props;
    //console.log(threads)
    return (
        <KPaper>
            {threads.length > 0 ?
            <List subheader={<ListSubheader>Sort by</ListSubheader>} style={{textAlign: 'right'}} className={classes.subheader}>
            {
            threads.map( (thread, i) =>
            <ListItem button className={classes.item} key={i} onClick={() => props.handleSelectedThread(thread)}>
                <Avatar alt={user.data.id == thread.sender_id? `${thread.receiver_fname} ${thread.receiver_lname}`:`${thread.sender_fname} ${thread.sender_lname}`} src={user.data.id == thread.sender_id? Utility.getAvatar(thread.receiver_avatar): Utility.getAvatar(thread.sender_avatar)} />
                <ListItemText primary={user.data.id == thread.sender_id? `${thread.receiver_fname} ${thread.receiver_lname}`:`${thread.sender_fname} ${thread.sender_lname}`}
                    secondary={
                        <div>
                            <Typography color="textSecondary" className={classes.message}>
                                {Utility.isset(thread.most_recent_msg)? thread.most_recent_msg.message: ''}
                            </Typography>
                            <Typography color="textSecondary" component="div" className={classes.date}>
                                <ReactTimeAgo date={new Date(thread.timestamp? thread.timestamp: (new Date()).getTime())} />
                            </Typography>
                        </div>
                    } 
                />
            </ListItem>
            )
            }
            
            <ListItem>
                <Typography color="textSecondary" component="a" style={{flex: 1, textAlign: 'center'}}>SEE ALL</Typography>
            </ListItem>
            </List>: <div className={classes.nothread}>
                <Typography color="textSecondary">No recent messages. Click the plus button above to find friends.</Typography>
            </div>}
        </KPaper>
)
    }

InboxSenderList.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(InboxSenderList);