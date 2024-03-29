import React from 'react';
import KCard from '../UIC/KCard';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { CardContent, Typography, FormControl, InputLabel, Input, AppBar, Toolbar, Button, CardActions, Grid, LinearProgress } from '@material-ui/core';
import KButton from '../UIC/KButton';
import OnboardMenu from './OnboardMenu';
import KBigButton from '../UIC/KBigButton';
import CategoryButton from './CategoryButton';
import PersonConnectCard from './PersonConnectCard';
import KBigButtonOutlined from '../UIC/KBigButtonOutlined';
import OnboardToolbar from './OnboardToolbar';
import Utility from '../../services/Utility';
import SimpleTextAlert from '../../widgets/alerts/SimpleTextAlert';
import FriendConnectCard from '../UIC/Friend/FriendConnectCard';

const styles = theme => ({
    main: {
        backgroundColor: '#f9fffc',
    },
    wrapper1: {
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
    contentU: {
        marginBottom: 20,
        display: 'flex',
        flexWrap: 'wrap',
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

class ConnectWithPeople extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedCategories: [],
            categories:['Singing', 'Dancing', 'Playing Instruments', 'Comedy', 'Ball Juggling', 'Photography',
            'Singing', 'Dancing', 'Playing Instruments', 'Comedy', 'Ball Juggling', 'Photography'
            ],
        }
    }

    componentDidMount() {
        this.props.getFriendSuggestion(this.props.authToken);
    }

    follow = (uid) => {

    }

    render() {
    const { classes, currentScreen, newAccount, people } = this.props;
    const props = this.props;
    //console.log(newAccount)
    const suggestion = Utility.isset(newAccount) && Utility.isset(newAccount.suggestion)? newAccount.suggestion: [];
    const friends = [];
    //console.log(suggestion)
    for(let i in people) {
        let person = people[i];
        if(suggestion.includes(+i) && Utility.isset(person)) {
            friends.push(person);
        }
    } 

    return (
        <div className={classes.main}>
        
        <OnboardToolbar {...this.props}/>
        <div className={classes.wrapper1}>
        <Grid container spacing={0}>
            <Grid item md={3}>
                <OnboardMenu currentScreen={currentScreen} />
            </Grid>
            <Grid item md={9}  xs={12} sm={12}  className={classes.rightContent}>
            
                <Typography variant="h3" style={{fontSize: '2em', opacity: 0.8, marginBottom: '.6em'}}>
                    Let’s get you to stardom!
                </Typography>
                <Typography variant="title" color="textSecondary">
                    Build up your profile so your friends can connect with you. <span className={classes.span}>Choose as many as applicable</span>
                </Typography>
                
                <KCard className={classes.card}>
                    {Utility.isset(props.authProgress) && (props.authProgress.loading === true || props.authProgress.error === true) && <Typography color="error" className={classes.errorMsg}>
                        {props.authProgress.message}
                    </Typography>}
                    {friends.length > 0?
                    <CardContent className={classes.contentU}>
                        {friends.map( (person, i) => <FriendConnectCard key={i} index={i} person={person} follow={this.follow} {...this.props} />)}
                    </CardContent>: 
                    <SimpleTextAlert message="No friends suggestion yet" />
                    }
                    
                    {false && <CardContent className={classes.contentU}>
                        {this.props.talentCategories.map( (cat, i) => <CategoryButton key={i} index={cat.id} id={cat.id} category={cat} selected={this.state.selectedCategories.findIndex(c => c.id === cat.id) !== -1} toggleCategory={this.toggleCategory} />)}
                    </CardContent>}

                    <CardActions className={classes.actions}>
                        <div className={classes.next}>
                            {false && <KBigButtonOutlined variant="outlined" onClick={() => this.props.setScreen('ChooseCategory')} label="Maybe later" size="small" />}
                            <KBigButton onClick={this.props.submit} label="Done!" size="small" />
                        </div>
                    </CardActions>
                    
                    {false && <CardActions className={classes.actions}>
                        <div className={classes.next}>
                            <KBigButtonOutlined variant="outlined" onClick={() => this.props.setScreen('ChooseCategory')} label="Skip" size="small" />
                            <KBigButton onClick={() => this.props.setScreen('ChooseCategory')} label="Next" size="small" />
                        </div>
                    </CardActions>}

                </KCard>
                { this.props.authLoading && <div className={classes.loaderHolder}>
                    <LinearProgress
                        classes={{
                        colorPrimary: classes.linearColorPrimary,
                        barColorPrimary: classes.linearBarColorPrimary,
                        }}
                    />
                    </div>
                }
            </Grid>
        </Grid>
        </div>
        </div>
    )
                                        }
};

ConnectWithPeople.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ConnectWithPeople);