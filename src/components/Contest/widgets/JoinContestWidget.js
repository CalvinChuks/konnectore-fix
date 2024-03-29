import React from 'react';
import SmallCircularLoader from '../../../widgets/loaders/SmallCircularLoader';
import SimpleTextAlert from '../../../widgets/alerts/SimpleTextAlert';
import { withStyles, Typography } from '@material-ui/core';
import KFormSelect from '../../../widgets/form/KFormSelect';
import KBigButton from '../../UIC/KBigButton';
import Utility from './../../../services/Utility';
import { withRouter } from 'react-router-dom';
import JoinContestButton from './JoinContestButton';
import KFormInput from '../../../widgets/form/KFormInput';
import JoinAsContestantButton from './JoinAsContestantButton';
import JoinAsWorkforceButton from './JoinAsWorkforceButton';
import WithdrawButton from './WithdrawButton';

const styles = theme => ({
    categoryList: {
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-start',
        width: '100%'
    },
    mentioned: {
        fontSize: theme.typography.fontSize * 1.1,
        margin: 20,
        textAlign: 'center',
    },
    agree: {
        fontSize: theme.typography.fontSize * .9,
        margin: 20,
        textAlign: 'center',
    },
    viewLink: {
        textAlign: 'center',
        textDecoration: 'none',
        fontStyle: 'normal',
        fontSize: 15,
        cursor: 'pointer',
    },
    infoText: {
        fontSize: theme.typography.fontSize * 1.3,
        margin: 20,
        textAlign: 'center',
        //color: '#0000008a',
    },
    joinInfo: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectStyle: {
        backgroundColor: 'white',
        border: '1px solid #E5E5E5',
        marginTop: '20px !important',
        marginBottom: 20,
    }
});

class JoinContestWidget extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            category: '',
        }
    }

    handleChange = (name, value) => {
        this.setState({[name]: value});
        //this.props.addEntryCategory(value);
    }

    render() {
        const { user, classes, history, url, contest, userRole, categories } = this.props;
        const currentEdition = Utility.isset(contest) && Utility.isset(contest.currentEdition)? contest.currentEdition: {};
console.log(categories)
        const options = categories.map( item => ({label: item.category_name, value: item.id}) );
        if(!Utility.isset(user) || !Utility.isset(user.usertype)) {
            return <SmallCircularLoader />;
        }

        switch(+userRole) {
            case 3:
                return <SimpleTextAlert message="You're a workforce." />;
            case 0:
                const narration = `To join ${currentEdition.slogan}, you must refer 20 users or more. Your referral ID is: ${user.referralID}`;
                return <div className={classes.joinInfo}>
                    <KFormSelect className={classes.selectStyle} value={this.state.category} options={options} handleChange={this.handleChange} value1={this.props.entryCategory} label="Category" name="category" />
                    {false && <Typography className={classes.mentioned}>
                        Select one of the above categories
                    </Typography>}
                    <KFormInput style={{marginTop: 20,}} label="Referrer (Optional)" name="referrer" value={this.state.referrer} handleChange={this.handleChange} />
                    {false && <KBigButton label="Join the contest" upper={true} />}
                    <JoinAsContestantButton category={this.state.category} referrer={this.state.referrer} {...this.props} narration={narration} referralsCount={user.referralsCount} 
                        referralID={user.referralID} 
                        contestEdition={currentEdition.slogan}
                        contest_edition_id={currentEdition.id}
                        contestProgress={this.props.contestProgress}
                        joinAsContestant={this.props.joinAsContestant}
                         />
                    <Typography className={classes.agree}>
                        By joining, you agree that you understand the contest guidelines
                    </Typography>

                    <JoinAsWorkforceButton category={this.state.category} referrer={this.state.referrer} {...this.props} narration={narration} referralsCount={user.referralsCount} 
                        referralID={user.referralID} 
                        contestEdition={currentEdition.slogan}
                        contest_edition_id={currentEdition.id}
                        contestProgress={this.props.contestProgress}
                        joinAsContestant={this.props.joinAsContestant} />
                </div>
            case 2:
                    return <div className={classes.joinInfo}>
                    
                    <Typography className={classes.mentioned}>
                    You currently participating in this contest 
                    </Typography>
                    <WithdrawButton category={this.state.category} referrer={this.state.referrer} {...this.props} narration={narration} referralsCount={user.referralsCount} 
                        referralID={user.referralID} 
                        contestEdition={currentEdition.slogan}
                        contest_edition_id={currentEdition.id}
                        contestProgress={this.props.contestProgress}
                        joinAsWorkforce={this.props.joinAsWorkforce}
                        withdrawFromContest={this.props.withdrawFromContest}
                         />
                    <Typography className={classes.agree}>
                        By withdrawing, you agree that you understand the contest guidelines
                    </Typography>
                </div>
            default:
                return <>
                    {false && <SmallCircularLoader />}
                    <SimpleTextAlert message="Not logged in" />
                    </>
                
        }
    }
}

export default withRouter(withStyles(styles)(JoinContestWidget));