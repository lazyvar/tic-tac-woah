import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

import PropTypes from 'prop-types'

export default class Square extends Component {

  static propTypes = {
    enabled: PropTypes.bool.isRequired,
    onPress: PropTypes.func,
    selectionStyle: PropTypes.any.isRequired,
  }

  render() {
    const { enabled, onPress, selectionStyle } = this.props

    return (
      <TouchableOpacity disabled={!enabled} onPress={onPress} style={[styles.baseStyle, selectionStyle]}>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  baseStyle: {
    borderRadius: 4,
    borderWidth: 0.5,
    height: '90.5%',
    width: '90.5%',
  },
})
