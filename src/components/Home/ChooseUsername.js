import React from 'react';
import KCard from '../UIC/KCard';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { CardContent, Typography, FormControl, InputLabel, Input, AppBar, Toolbar, Button, CardActions, Grid } from '@material-ui/core';
import KButton from '../UIC/KButton';
import OnboardMenu from './OnboardMenu';
import KBigButton from '../UIC/KBigButton';
import OnboardToolbar from './OnboardToolbar';
import Utility from '../../services/Utility';

const styles = theme => ({
    main: {
        backgroundColor: '#f9fffc',
    },
    wrapper: {
        width: '80%',
        margin: '100px auto 20px'
    },
    card: {
        width: 'auto',
        //margin: '100px auto 20px',
        padding: 16,
        flexDirection: 'column',
        marginTop: 20,
    },
    formControl: {
        width: '100%',
        marginTop: '1.8em',
    },
    bootstrapRoot: {
        'label + &': {
          marginTop: theme.spacing.unit * 3,
        },
        width: '60%',
        [theme.breakpoints.down('md')]: {
            width: '100%',
        }
      },
    bootstrapInput: {
        borderRadius: 20,
        position: 'relative',
        backgroundColor: '#f8f8f8',
        border: '1px solid transparent',
        fontSize: 14,
        color: '#a2a2a2',
        padding: '10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
          borderRadius: 20,
          borderColor: 'transparent',
          boxShadow: '0 0 0 0.2rem rgba(0,0,0,.01)',
        },
        '&::placeholder': {
            textOverflow: 'ellipsis !important',
            color: '#a2a2a2',
            fontSize: 14,
        }
      },
    bootstrapFormLabel: {
        fontSize: 16,
    },
    footer: {display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'},
    appBar: {
          backgroundColor: '#e19f47',
          border: 'none',
    },
    alertText: {
          color: 'white',
          fontSize: theme.typography.fontSize * 1.5,
          textTransform: 'none',
          fontWeight: 300,
          opacity: 0.8,
          
    },
    actions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    content: {
        marginBottom: 20,
    },
    next: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    span: {
        fontSize: theme.typography.fontSize,
        color: '#aaa',
    },
    rightContent: {
        paddingLeft: 80,
        [theme.breakpoints.down('md')]: {
            paddingLeft: 0,
        }
    }
});

const ChooseUsername = props => {
    const { classes, currentScreen } = props;
    console.log(props.username, props.userData.username)
    const active = (Utility.isset(props.username) && props.username === props.userData.username)? false: (props.username && props.usernameExists && props.username.length > 4? false: true);

    function handleStoreUsername() {
        props.storeUsername(props.username, props.authToken);
        props.setScreen('PersonalInformation');
    }
    return (
        <div className={classes.main}>
        
        <OnboardToolbar {...props} />
        <div className={classes.wrapper}>
        <Grid container spacing={0}>
            <Grid item md={3}>
                <OnboardMenu currentScreen={currentScreen} />
            </Grid>
            <Grid item md={9} xs={12} sm={12}  className={classes.rightContent}>
                <Typography variant="h3" style={{fontSize: '2em', opacity: 0.8, marginBottom: '.6em'}}>
                    Hi There,
                </Typography>
                <Typography variant="title" color="textSecondary">
                    Choose a unique username to get this ball rolling. <span className={classes.span}>Choose one</span>
                </Typography>
                <KCard className={classes.card}>
            <CardContent className={classes.content}>
                <Typography variant="h3" style={{fontSize: '2em', opacity: 0.8, marginBottom: '.6em'}}>
                    
                </Typography>
                <Typography variant="title" color="textSecondary">
                    
                </Typography>

                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="username" shrink className={classes.bootstrapFormLabel}>Enter Username</InputLabel>
                    <div style={{display: 'flex',flexDirection: 'row', alignItems: 'center', paddingTop: 30,}}>
                        <Input id="username" 
                            placeholder="yourname@domain.com" 
                            value={props.username} 
                            onChange={props.handleUsernameChange} 
                            //fullWidth={true}
                            disableUnderline={true}
                            classes={{
                                root: classes.bootstrapRoot,
                                input: classes.bootstrapInput,
                            }} 
                        />
                        {!props.usernameExists && !props.userData.username && <Typography color="error" style={{marginLeft: 20,}}>
                            Sorry, that username has been taken
                        </Typography>}
                    </div>
                </FormControl>
            </CardContent>
            
        </KCard>
                <div className={classes.next}>
                    <KBigButton disabled={active} onClick={handleStoreUsername} label="Next" size="small" />
                </div>
            </Grid>
        </Grid>
        </div>
        </div>
    )
};

ChooseUsername.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChooseUsername);