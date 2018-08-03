import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import { List, ListItem } from 'react-native-elements'

import { authActionCreators } from '../redux'

import FormButton from '../components/FormButton'
import FormTextField from '../components/FormTextField'

const mapStateToProps = (state) => ({
  signUpErrorMessage: state.auth.signUpErrorMessage
})

const mapDispatchToProps = (dispatch) => {
  return {
    trySignUp: (username, password, confirmPassword, avatar) => {
      dispatch(authActionCreators.signUp(username, password, confirmPassword, avatar))
    },
  }
}

class SignUp extends Component {

  getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  randomEmoji = () => {
    switch(this.getRandomInt(5)) {
      case 0:
        return "😉"
      case 1:
        return "😍"
      case 2:
        return "😏"
      case 3:
        return "😜"
      case 4:
        return "🤔"
      default:
        return "😎"
    }
  }

  state = {
    username: '',
    password: '',
    confirmPassword: '',
    avatar: this.randomEmoji()
  }

  onChangeUsername = (text) => this.setState({...this.state, username: text})
  onChangePassword = (text) => this.setState({...this.state, password: text})
  onChangeConfirmPassword = (text) => this.setState({...this.state, confirmPassword: text})

  onEmojiSelected = (emoji) => {
    this.setState({...this.state, avatar: emoji.char})
    Actions.pop()
  }

  changeAvatar = () => {
    Actions.push("selectAvatar", {onEmojiSelected: this.onEmojiSelected})
  }

  signUpPressed = () => {
    const { trySignUp } = this.props
    const { username, password, confirmPassword, avatar} = this.state

    trySignUp(username, password, confirmPassword, avatar)
  }

  render() {
    const { signUpErrorMessage } = this.props
    const { username, password, confirmPassword, avatar } = this.state

    return (
      <ScrollView>
        <Text style={styles.error}> {signUpErrorMessage} </Text>
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
        />
        <FormTextField 
          placeholder='Confirm password'
          value={confirmPassword}
          onChangeText={this.onChangeConfirmPassword}
          secureTextEntry={true}
          onSubmitEditing={this.signUpPressed}
        />
        <ListItem
          title={"Avatar"}
          rightTitle={avatar}
          containerStyle={styles.row}
          rightTitleStyle={styles.rightTitleStyle}
          onPress={this.changeAvatar}
          chevron
        />
        <FormButton backgroundColor='green' onPress={this.signUpPressed}>
          Sign Up
        </FormButton>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    backgroundColor: 'rgb(240, 240, 240)',
    borderBottomColor: 'rgb(232, 232, 232)',
  },
  error: {
    color: 'firebrick',
    padding: 24,
    textAlign: 'center',
  },
  rightTitleStyle: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 4,
  }

})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)