import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'

import FormButton from '../components/FormButton'
import FormTextField from '../components/FormTextField'

const mapStateToProps = (state) => ({

})

class SignUp extends Component {

  signUpPressed = () => {

  }

  render() {
    return (
      <ScrollView>
        <FormTextField placeholder='Username'/>
        <FormTextField placeholder='Password'/>
        <FormTextField placeholder='Confirm Password'/>
        <FormButton backgroundColor='lightgray' onPress={this.signUpPressed}>
          Sign Up
        </FormButton>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({

})

export default connect(mapStateToProps)(SignUp)