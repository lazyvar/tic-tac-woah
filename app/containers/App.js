import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import { Router, Stack, Scene, Modal, ActionConst } from 'react-native-router-flux'

import Login from './Login'
import SignUp from './SignUp'
import Home from './Home'

const mapStateToProps = (state) => ({
  currentUser:  state.auth.currentUser
})

const mapDispatchToProps = (dispatch) => {
  return {
    gotoProfileSettings: () => {
      // todo
    },
  }
}

class App extends Component {

  render() {
    const { gotoProfileSettings, currentUser } = this.props

    return (
      <Router>
        <Stack key="root">
          <Scene key="login" component={Login} title="Welcome" />
          <Scene key="signUp" component={SignUp} title="Sign Up" />
          <Scene 
            key="home" 
            component={Home} 
            title="Tic-Tac-Woah"
            onLeft={gotoProfileSettings}
            leftButtonImage={{uri: currentUser.profilePictureUrl}}
            leftButtonIconStyle={styles.barButtonItem}
          />
        </Stack>
      </Router>
    )
  }

}

const styles = StyleSheet.create({
  barButtonItem: {
    width: 24,
    height: 24,
    borderRadius: 12,
    resizeMode: 'center',
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)