import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import { Router, Stack, Scene, Modal, ActionConst } from 'react-native-router-flux'
import { Actions } from 'react-native-router-flux'

import Login from './Login'
import SignUp from './SignUp'
import Home from './Home'
import ProfileSettings from './ProfileSettings'

const mapStateToProps = (state) => ({
  currentUser:  state.auth.currentUser
})

const mapDispatchToProps = (dispatch) => {
  return {
    gotoProfileSettings: () => {
      Actions.profileSettings()
    },
  }
}

class App extends Component {

  render() {
    const { gotoProfileSettings, currentUser } = this.props

    return (
      <Router>
        <Stack key="root">
          <Scene key="login" component={Login} navTransparent={true} />
          <Scene key="signUp" component={SignUp} title="Sign Up" />
          <Scene 
            key="home" 
            component={Home} 
            title="Tic-Tac-Woah"
            onLeft={gotoProfileSettings}
            leftTitle={currentUser.avatar}
          />
          <Scene 
            key="profileSettings" 
            component={ProfileSettings} 
            title="Profile"
            backTitle=' '
          /> 
        </Stack>
      </Router>
    )
  }

}

const styles = StyleSheet.create({

})

export default connect(mapStateToProps, mapDispatchToProps)(App)