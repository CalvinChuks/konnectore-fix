import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import MeController from '../UIC/Me/MeController';
import SidebarComponent from '../UIC/SidebarComponent';
import HomeComponent from '../Home/HomeComponent';
import DashboardComponent from '../Dashboard/DashboardComponent';
import OnboardComponent from '../Home/OnboardComponent';
import Utility from '../../services/Utility';

const ProtectedRoute = ({component: Component, render: Render, user, ...rest}) => {
    return (
        <Route
            {...rest}
            render={ props => {
                const notonboarded = Utility.isset(user.authToken) && user.authToken !== "" && ( !Utility.isset(user.data.firstname) || !Utility.isset(user.data.lastname) || !Utility.isset(user.data.id) );
                if(!Utility.isset(user.authToken) || user.authToken === "") {
                    return <HomeComponent />;
                }
                if(props.match.path === '/') {
                    if(user.authToken === "") {
                        return <HomeComponent />;
                    } else {
                        
                        if(notonboarded) {
                            console.log('Show Onboard');
                            return <OnboardComponent {...props} />;
                        } else {
                            console.log('Show Dashboard');
                            return <SidebarComponent component={DashboardComponent} user={user} {...props} />;
                        }
                    }
                   
                    
                } else {
                    console.log('Option two', props.match.path)
                    if(props.match.path === '/') {
                        return <Redirect
                        to={
                            {
                                pathname: "/me",
                                state: {
                                    from: props.location,
                                }
                            }
                        }
                    />
                    } else {
                        console.log(Component);
                        if(Component)
                            return <Component {...props} />;
                        else
                            return <Render {...props} />;
                    }
                }
                }
            }
        />

    )
};

const mapStateToProps = state => {
    return {
        user: state.user,
    }
}
export default connect(mapStateToProps)(ProtectedRoute);