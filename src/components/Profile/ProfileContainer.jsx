import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {userProfile} from "../../api/api";



class ProfileContainer extends React.Component {
    componentDidMount() {

      let userId = this.props.match.params.userId
        if (!userId) userId = 2
        userProfile(userId)
            .then(data => {
                this.props.setUserProfile(data)
            })
    }


    render () {
       return <Profile {...this.props}  profile={this.props.profile}  />
    }

}

let mapStateToProps = (state) => {
    return {
     profile:state.profilePage.profile
    }
}

let urlDataContainer = withRouter(ProfileContainer)

export default connect (mapStateToProps,{setUserProfile}) (urlDataContainer);