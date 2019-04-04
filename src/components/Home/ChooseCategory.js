import React from 'react';
import KCard from '../UIC/KCard';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { CardContent, Typography, FormControl, InputLabel, Input, AppBar, Toolbar, Button, CardActions, Grid } from '@material-ui/core';
import KButton from '../UIC/KButton';
import OnboardMenu from './OnboardMenu';
import KBigButton from '../UIC/KBigButton';
import CategoryButton from './CategoryButton';
import KBigButtonOutlined from '../UIC/KBigButtonOutlined';

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
    }
});

class ChooseCategory extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedCategories: [],
            categories:['Singing', 'Dancing', 'Playing Instruments', 'Comedy', 'Ball Juggling', 'Photography'],
        }
    }

    toggleCategory = (category) => {
        if(!this.state.selectedCategories.includes(category)) {
            this.setState({
                selectedCategories: [...this.state.selectedCategories, category]
            })
        } else {
            let selectedCat = this.state.selectedCategories;
            selectedCat.splice(selectedCat.indexOf(category));
            this.setState({
                selectedCategories: selectedCat,
            })
        }

    }

    render() {
    const { classes, currentScreen } = this.props;

    return (
        <div className={classes.main}>
        
        <Toolbar className={classes.appBar} style={{justifyContent: 'center'}}>
            <Typography className={classes.alertText}>
                Your account has not yet been activated. <Button className={classes.alertText} style={{textDecoration: 'underline'}}>Resend activation link</Button>
            </Typography>
        </Toolbar>
        <div className={classes.wrapper}>
        <Grid container spacing={0}>
            <Grid item md={3}>
                <OnboardMenu currentScreen={currentScreen} />
            </Grid>
            <Grid item md={9} style={{paddingLeft: 80,}}>
                <Typography variant="h3" style={{fontSize: '2em', opacity: 0.8, marginBottom: '.6em'}}>
                    Let’s get you to stardom!
                </Typography>
                <Typography variant="title" color="textSecondary">
                    Build up your profile so your friends can connect with you. <span className={classes.span}>Choose as many as applicable</span>
                </Typography>
                <KCard className={classes.card}>
                    <CardContent className={classes.content}>
                        {this.state.categories.map( (cat, i) => <CategoryButton key={i} index={i} category={cat} selected={this.state.selectedCategories.includes(cat)} toggleCategory={this.toggleCategory} />)}
                    </CardContent>
                    <CardActions className={classes.actions}>
                        <div className={classes.next}>
                            <KBigButtonOutlined variant="outlined" onClick={() => this.props.setScreen('ConnectWithPeople')} label="Maybe later" size="small" />
                            <KBigButton onClick={() => this.props.setScreen('ConnectWithPeople')} label="Next" size="small" />
                        </div>
                    </CardActions>
                </KCard>
                
            </Grid>
        </Grid>
        </div>
        </div>
    )
                                        }
};

ChooseCategory.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChooseCategory);