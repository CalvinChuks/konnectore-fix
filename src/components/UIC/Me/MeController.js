import React from 'react';
import { NavLink as Link, Route } from 'react-router-dom';
import MeHeader from './MeHeader';
import { Grid, Paper } from '@material-ui/core';
import CompetitionSummaryCard from '../../Contest/CompetitionSummaryCard';
import { searchResults } from './../../assets/searchResults';
import MeTimeline from './MeTimeline';
import GrowYourNetwork from './GrowYourNetwork';
import AwardsAndBadges from './AwardsAndBadges';
import AccountInfoWidget from './AccountInfoWidget';
import EditPersonalInfoWidget from './EditPersonalInfoWidget';
import ManageYourAccountWidget from './ManageYourAccountWidget';
import PlaceComponents from '../PlaceComponents';
import EditProfile from './Profile/EditProfile';
import ManageAccount from './Profile/ManageAccount';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropsRoute from '../../Nav/PropsRoute';
import dialogActions from '../../../reducers/dialog/actions';
import userActions from '../../../reducers/user/actions';
import PostDetailWidget from '../../../widgets/posts/PostDetailWidget';
import Utility from '../../../services/Utility';

class MeController extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            filter: 'feed',
            posts: [],
            item: {},
            open: false,
        }
    }

    componentDidMount() {
        console.log('call the get user info function');
    }

    static getDerivedStateFromProps(state) {
        return state.feed? {feed: state.feed}: {feed: 'feed'};
    }

    toggleDialog = item => {
        console.log('toggle 1')
        this.setState({item: item, open: !this.state.open})
    }

    handleAvatarUpload(event) {
        // Grap the file event and query it for the files selected
        const file = event.target.files[0];
        console.log(file);
        //Create a form field to send to the server
        let formData = new FormData();
        //Append the file an assign a name
        formData.append('avatar', file);
        // Get the user_id and token
        formData.append('user_id', this.props.user.data.id);
        // Submit the form through an action on redux under user reducer
        this.props.editAvatar(formData, this.props.user.authToken);
    }

    filterPosts(posts) {
        const filter = this.state.filter;
        if(['image', 'text', 'video'].includes(filter)) {
            let p = [];
            for(let i in posts) {
                let post = posts[i];
                if(post.type === filter)
                    p.push(post);
            }
            return p;
        } else
            return posts;
    }
    render() {
        const {match, user, allPosts, me} = this.props;
        let recentPosts = [];
        const fullName = user.data.firstname + ' ' + user.data.lastname;

        let count = 1;
        
        const keys = Utility.isset(me) && Utility.isset(me.postIds)? me.postIds.sort( (a, b) => b -a): [];

        if(keys.length > 0) {
            for(let i of keys) {
                let item = allPosts[i];
                recentPosts.push(item);
                if(count >= 20) 
                    break;
                count++;
            }
        }

        recentPosts = recentPosts.sort((a, b) => b.id > a.id);

        return (
            <div style={{marginTop: 30, marginLeft: 20, marginRight: 20}}>
                <Grid container spacing={0}>
                    <Grid item xs={8}>
                    <Paper style={{boxShadow: 'none', textAlign: "left", paddingLeft: 10, paddingRight: 10}}>
                        <MeHeader path={match.path} {...this.props} setFilter={this.setFilter.bind(this)} 
                            handleAvatarUpload={this.handleAvatarUpload.bind(this)} />
                        <Switch>
                            <PropsRoute exact path={`${match.path}/account/edit`} component={EditProfile} {...this.props} />
                            <Route exact path={`${match.path}/account/manage`} component={ManageAccount} />
                            <PropsRoute path={`${match.path}`} component={MeTimeline} {...this.props} fullName={fullName} toggleDialog={this.toggleDialog} posts={recentPosts} />} />
                        </Switch>
                    </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <div style={{marginLeft: 10}}>
                            <PlaceComponents spacer={20}>
                                <Route exact path={`${match.path}/`} component={AwardsAndBadges} />
                                <Route exact path={`${match.path}/`} component={AccountInfoWidget} />
                                <Route exact path={`${match.path}/account/edit`} component={EditPersonalInfoWidget} />
                                <Route exact path={`${match.path}/account/manage`} component={ManageYourAccountWidget} />
                            </PlaceComponents>
                        </div>
                    </Grid>
                </Grid>
                
            </div>
        )
    }

    setFilter = filter => {
        this.setState({filter: filter});
        console.log(filter)
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        allPosts: state.post.byId,
        me: state.me,
    }
}

const mapDispatchToProps = dispatch => {
    return {
      showDialog: open => {
        dispatch(dialogActions.showDialog(open));
      },
      editAvatar: (form, token) => {
          dispatch(userActions.editAvatar(form, token));
      },
      getUserInfo: (id, token) => {
          dispatch(userActions.getUser(id, token));
      }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MeController);



