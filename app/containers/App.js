import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'
import { Router, Stack, Scene, Modal, ActionConst } from 'react-native-router-flux'
import { Actions } from 'react-native-router-flux'

import { gameListActionCreators, gameActionCreators, authActionCreators } from '../redux'

import Login from './Login'
import SignUp from './SignUp'
import Home from './Home'
import Game from './Game'
import SelectAvatar from '../components/SelectAvatar'
import ProfileSettings from './ProfileSettings'

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
  isFetchingToken: state.auth.isFetchingToken,
  token: state.auth.token,
  isLoggingIn: state.auth.isLoggingIn,
})

const mapDispatchToProps = (dispatch) => {
  return {
    gotoProfileSettings: () => {
      Actions.profileSettings()
    },
    fetchToken: () => {
      dispatch(authActionCreators.fetchToken())
    }
  }
}

class App extends Component {

  componentDidMount() {
    const { fetchToken } = this.props

    fetchToken()
  }

  render() {
    const { token, isLoggingIn, isFetchingToken, gotoProfileSettings, currentUser } = this.props

    if (isFetchingToken) {
      return <View></View>;
    }

    const userIsAuthenticated = token !== null && token !== undefined
    const homeLeftTitle = currentUser ? currentUser.avatar : ' '

    return (
      <Router>
        <Stack key="root" >
          <Scene key="login" component={Login} title="Welcome" initial={userIsAuthenticated}/>
          <Scene key="signUp" component={SignUp} title="Sign Up" />
          <Scene 
            key="home" 
            component={Home} 
            title="Tic-Tac-Woah"
            onLeft={gotoProfileSettings}
            initial={userIsAuthenticated}
            leftTitle={homeLeftTitle}
          />
          <Scene 
            key="profileSettings" 
            component={ProfileSettings} 
            title="Profile"
            backTitle=' '
          />
          <Scene 
            key="game" 
            component={Game} 
            backTitle=' '
          /> 
          <Modal key="selectAvatar" component={SelectAvatar} />
        </Stack>
      </Router>
    )
  }

}

const styles = StyleSheet.create({

})

export default connect(mapStateToProps, mapDispatchToProps)(App)