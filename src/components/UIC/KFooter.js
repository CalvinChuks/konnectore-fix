import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Paper, withStyles, createMuiTheme } from '@material-ui/core';
import KLink from './KLink';
import { Link } from 'react-router-dom';

const theme = createMuiTheme();

const styles = {
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
    paper: {
        padding: theme.spacing.unit * 4
    },
    link: {
        fontSize: theme.spacing.unit * 1.5
    },
    footer: {
        color: '#808080',
        marginTop: theme.spacing.unit * 4,
    }
}

function KFooter(props) {
    const { classes } = props;
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <Paper className={classes.paper}>
            <Typography component="p" className={classes.link}>
                <KLink filter="/about">About Us</KLink>{bull}
                <KLink filter="/support">Support</KLink>{bull}
                <KLink filter="/press">Press</KLink>{bull}
                <KLink filter="/api">API</KLink>{bull}
                <KLink filter="/jobs">Jobs</KLink>{bull}
                <KLink filter="/privacy">Privacy</KLink>{bull}
                <KLink filter="/terms">Terms</KLink>{bull}
                <KLink filter="/directory">Directory</KLink>{bull}
                <KLink filter="/profiles">Profiles</KLink>{bull}
                <KLink filter="/hashtags">Hashtags</KLink>{bull}
                <KLink filter="/language">Language</KLink>{bull}
            </Typography>

            <Typography component="h4" className={classes.footer}>
                <span>{insertEntity('&copy;')}</span> 2019 KONNECTORE
            </Typography>
        </Paper>
    )
}

KFooter.propTypes = {
    classes: PropTypes.object.isRequired,
}
export default withStyles(styles)(KFooter);

const insertEntity = (val) => {
    return (<span dangerouslySetInnerHTML={{__html: val}}></span>);
}