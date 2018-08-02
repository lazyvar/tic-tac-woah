import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'

import { authActionCreators } from '../redux'

import FormButton from '../components/FormButton'
import FormTextField from '../components/FormTextField'

const mapStateToProps = (state) => ({
  token: state.auth.token,
})

const mapDispatchToProps = (dispatch) => {
  return {
    tryLogin: (username, password) => {
      dispatch(authActionCreators.login(username, password))
    },
    signUpPressed: () => {
      Actions.signUp()
    },
  }
}

class Login extends Component {

  render() {
    const { tryLogin, signUpPressed } = this.props

    return (
      <ScrollView>
        <FormTextField placeholder='Username'/>
        <FormTextField placeholder='Password'/>
        <FormButton onPress={tryLogin}>
          Login 
        </FormButton>
        <FormButton backgroundColor='lightgray' onPress={signUpPressed}>
          Sign Up
        </FormButton>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({

})

export default connect(mapStateToProps, mapDispatchToProps)(Login)