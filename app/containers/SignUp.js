import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import { List, ListItem } from 'react-native-elements'

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
        <ListItem
          title={"Avatar"}
          rightTitle={"😡"}
          style={styles.row}
          rightTitleStyle={styles.rightTitleStyle}
          
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
    backgroundColor: 'white',
    borderBottomColor: 'rgb(232, 232, 232)',
  },
  rightTitleStyle: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 4,
  }

})

export default connect(mapStateToProps)(SignUp)