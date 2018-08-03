import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import { gameListActionCreators } from '../redux'

import FormButton from '../components/FormButton'
import FormTextField from '../components/FormTextField'

const mapStateToProps = (state) => ({
    createGameErrorMessage: state.gameList.createGameErrorMessage
})

const mapDispatchToProps = (dispatch) => {
  return {
    createGame: (opponent) => {
    	dispatch(gameListActionCreators.createGame(opponent))
    }
  }
}

class CreateGame extends Component {

  state = {
  	opponent: ''
  }

  createGame = () => {
    const { createGame } = this.props
    const { opponent } = this.state

    createGame(opponent)
  }

  onChangeOpponent = (text) => this.setState({...this.state, opponent: text})

  render() {
  	const { createGameErrorMessage } = this.props
  	const { opponent } = this.state

    return (
	    <ScrollView>
	      <View style={styles.container}>
	        <Text style={styles.error}> {createGameErrorMessage} </Text>
	        <FormTextField 
	          placeholder='Opponent username'
	          value={opponent}
	          onChangeText={this.onChangeOpponent}
	          onSubmitEditing={this.createGame}
	        />
	        <FormButton onPress={this.createGame}>
	          Create game 
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
  error: {
    color: 'firebrick',
    padding: 24,
    textAlign: 'center',
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateGame)