import EmojiInput from 'react-native-emoji-input'
import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux'

import FormButton from '../components/FormButton'
import FormTextField from '../components/FormTextField'

export default class SignUp extends Component {

  render() {
  	const { onEmojiSelected } = this.props

    return (
	    <EmojiInput
	      onEmojiSelected={onEmojiSelected}
	    />
    )
  }
}
