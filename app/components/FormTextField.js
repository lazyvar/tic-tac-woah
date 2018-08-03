import React, { Component } from 'react'
import { TextInput, StyleSheet } from 'react-native'

export default class FormTextField extends Component {

  render() {
    const { placeholder, onChangeText, value, secureTextEntry, onSubmitEditing } = this.props

    return (
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        secureTextEntry={secureTextEntry}
        autoCapitalize={'none'}
      />
    )
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    height: 50,
    backgroundColor: 'white',
  },
})