import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'

import { authActionCreators } from '../redux'

import FormButton from '../components/FormButton'
import FormTextField from '../components/FormTextField'

const mapStateToProps = (state) => ({
  errorMessage: state.auth.errorMessage
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

  state = {
    username: '',
    password: '',
  }

  onChangeUsername = (text) => this.setState({...this.state, username: text})
  onChangePassword = (text) => this.setState({...this.state, password: text})

  tryLogin = () => {
    const { tryLogin } = this.props
    const { username, password } = this.state

    tryLogin(username, password)
  }

  render() {
    const { tryLogin, signUpPressed, errorMessage } = this.props
    const { username, password } = this.state

    return (
      <ScrollView>
      <View style={styles.container}>
        <Text style={styles.error}> {errorMessage} </Text>
        <FormTextField 
          placeholder='Username' 
          value={username} 
          onChangeText={this.onChangeUsername}
        />
        <FormTextField 
          placeholder='Password'
          value={password}
          onChangeText={this.onChangePassword}
          secureTextEntry={true}
          onSubmitEditing={this.tryLogin}
        />
        <FormButton onPress={this.tryLogin}>
          Login 
        </FormButton>
        <FormButton backgroundColor='lightgray' onPress={signUpPressed}>
          Sign Up
        </FormButton>
      </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  block: {
    width: 100,
    height: 100,
  },
  error: {
    color: 'firebrick',
    padding: 24,
    textAlign: 'center',
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)