import React, { Component } from 'react'
import { Image, TouchableOpacity, StyleSheet, ScrollView, Alert} from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import { List, ListItem } from 'react-native-elements'

import { authActionCreators } from '../redux'

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser 
})

const mapDispatchToProps = (dispatch) => {
  return {
    changeUsername: () => {
      // todo
    },
    changePassword: () => {
      // todo
    },
    changeAvatar: () => {
      // todo
    },
    signOut: () => {
      Alert.alert(
        'Sign out',
        'Are you sure you want to sign out?',
        [
          {text: 'No', onPress: () => {}, style: 'cancel'},
          {text: 'Yes', onPress: () => {
            dispatch(authActionCreators.signOut())
          }},
        ],
      { cancelable: false }
      )
    }
  }
}


class ProfileSettings extends Component {

  renderItem = (item, i) => {
    return (
        <ListItem
          key={i}
          title={item.title}
          rightTitle={item.rightTitle}
          onPress={item.onPress}
          containerStyle={styles.row}
          rightTitleStyle={styles.rightTitleStyle}
          chevron
        />
    )
  }

  render() {
    const { changeUsername, changePassword, changeAvatar, signOut, currentUser } = this.props

    const rows = [
      {
        title: "Username",
        rightTitle: currentUser.username,
        onPress: changeUsername,
      },{
        title: "Password",
        rightTitle: "••••••••",
        onPress: changePassword,
      },{
        title: "Avatar",
        rightTitle: currentUser.avatar,
        onPress: changeAvatar,
      },{
        title: "Sign out",
        onPress: signOut,
      }
    ]

    return (
      <ScrollView>
        <List containerStyle={styles.container}>
          { rows.map(this.renderItem) }
        </List>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderColor: 'whitesmoke',
  },
  row: {
    backgroundColor: 'whitesmoke',
    borderBottomColor: 'rgb(232, 232, 232)',
  },
  rightTitleStyle: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 4,
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSettings)