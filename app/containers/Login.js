import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'

import FormButton from '../components/FormButton'

export default class Login extends Component {

  loginPressed = () => {

  }

  signUpPressed = () => {
    
  }

  render() {
    return (
      <ScrollView>
        <FormButton style={styles.formButton} onPress={this.loginPressed}>
          Login 
        </FormButton>
        <FormButton style={styles.formButton} backgroundColor='lightgray' onPress={this.signUpPressed}>
          Sign Up
        </FormButton>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  formButton: {
    marginBottom: 10,
  },
})