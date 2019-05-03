import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import KPaper from '../../components/UIC/KPaper';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const styles = theme => ({
    banner: {
        backgroundImage: `url(/contests/banner-bg2.jpg)`,
        backgroundSize: 'cover',
        padding: 20,
        borderRadius: 5,
    },
    tagText: {
        color: '#ffffff',
        opacity: .5,
        fontSize: theme.typography.fontSize * 1.3,
        fontWeight: 500,
    },
    link: {
        textDecoration: 'none',
        fontStyle: 'normal',
        outline: 'none',
    },
    titleText: {
        color: '#ffffff',
        fontSize: theme.typography.fontSize * 2,
        fontWeight: 800,
    },
    contentText: {
        color: '#ffffff',
        fontSize: theme.typography.fontSize * 1,
    },
    dateText: {
        color: '#ffffff',
        fontSize: theme.typography.fontSize * 1.1,
        fontWeight: 600,
    },
    img: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    join: {
        borderRadius: 20,
        backgroundColor: '#fff',
        padding: `7px 15px`,
        color: '#00a294',
        lineHeight: '20px',
        marginTop: 20,
        '&:hover': {
            backgroundColor: '#fff',
            opacity: 0.9,
        }
    }
});

class ContestInfoBanners extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        const { classes } = this.props;
        return (
            <Link to="/contest/sctage" className={classes.link}>
                <KPaper className={classes.banner}>
                    <Grid container>
                        <Grid item md="8">
                            <Typography className={classes.tagText}>POPULAR</Typography>
                            <Typography className={classes.titleText}>The Stage 2019</Typography>
                            <Typography color="textSecondary" className={classes.contentText}>
                            The 2019 edition of The Sctage Competition saw many of its users last till the final 
                            rounds.
                            </Typography>
                            <Typography className={classes.dateText}>Starts 11 Sept 2019</Typography>
                            <Button className={classes.join}>Join the contest</Button>
                        </Grid>
                        <Grid item md="4" className={classes.img}>
                            <img src="/contests/banner-img.png" />
                        </Grid>
                    </Grid>
                </KPaper>
            </Link>
        )
    }
}

export default withStyles(styles)(ContestInfoBanners);