import React, { Component } from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

export default class FormButton extends Component {

  render() {
    const {children, onPress, backgroundColor, textColor} = this.props
    const styles = StyleSheet.create({
      viewStyle: {
        padding: 15,
        backgroundColor: backgroundColor || 'skyblue',
      },
      textStyle: {
        textAlign: 'center',
        color: textColor || 'white' 
      }
    })

    return (
      <TouchableOpacity style={styles.viewStyle} onPress={() => onPress()}>
        <Text style={styles.textStyle}> {children} </Text>
      </TouchableOpacity>
    )
  }
}
