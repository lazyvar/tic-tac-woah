import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import { gameListActionCreators } from '../redux'
import PropTypes from 'prop-types';

const mapStateToProps = (state) => ({
  games: state.gameList.games,
})

const mapDispatchToProps = (dispatch) => {
  return {
    gamePressed: (game) => {

    },
    fetchGames: () => {
      dispatch(gameListActionCreators.fetchGames())
    }
  }
}

class Home extends Component {

  renderGame = (game) => {
    const { gamePressed } = this.props
    let text
    if (game.myTurn) {
      text = "Your move against " + game.player.username
    } else {
      text = game.player.username + "'s turn"
    }

    return (
      <TouchableOpacity style={styles.game} onPress={() => gamePressed(game)}>
        <Text>{text}</Text>
      </TouchableOpacity>
    )
  }

  componentDidMount() {
    const { fetchGames } = this.props

    fetchGames()
  }

  render() {
    const {games} = this.props

    return (
      <ScrollView>
        {games.map(this.renderGame)}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  game: {
    backgroundColor: 'whitesmoke',
    marginBottom: 1,
    padding: 15,
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)