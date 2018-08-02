import React, { Component } from 'react'
import { View, RefreshControl, FlatList, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import { gameListActionCreators, gameActionCreators } from '../redux'
import { ListItem } from 'react-native-elements'

import PropTypes from 'prop-types';
import GameLogic from '../game/GameLogic'

const mapStateToProps = (state) => ({
  games: state.gameList.games,
  isFetching: state.gameList.isFetching,
})

const mapDispatchToProps = (dispatch) => {
  return {
    gamePressed: (game) => {
      dispatch(gameActionCreators.selectGame(game))
    },
    fetchGames: () => {
      dispatch(gameListActionCreators.fetchGames())
    }
  }
}

class Home extends Component {

  renderItem = ({ item }) => {
    const { gamePressed } = this.props
    const title = this.titleForGame(item)
    const titleStyle = this.styleForGame(item)

    return (
      <ListItem
          key={item.id}
          title={title}
          titleStyle={titleStyle}
          onPress={() => gamePressed(item)}
          containerStyle={styles.row}
          chevron
      />
    )
  }

  styleForGame = (game) => {
    const isMyTurn = new GameLogic(game).isMyTurn()

    if (isMyTurn) {
      return styles.bold
    } else {
      return null
    }
  }

  titleForGame = (game) => {
    if (game.myTurn) {
      return `${game.player.avatar} Your move against ${game.player.username}`
    } else {
      return `${game.player.avatar} ${game.player.username} is thinking...`
    }
  }

  componentDidMount() {
    const { fetchGames } = this.props

    fetchGames()
  }

  keyExtractor = (item, index) => index.toString()

  render() {
    const {games, isFetching, fetchGames} = this.props

    return (
        <FlatList
          containerStyle={styles.container}
          keyExtractor={this.keyExtractor}
          data={games}
          renderItem={this.renderItem}
          refreshControl={
            <RefreshControl
              refreshing={isFetching}
              onRefresh={fetchGames}
            />
          }
        />
    )
  }

}

const styles = StyleSheet.create({
  container: {
    borderColor: 'whitesmoke',
  },
  row: {
    borderBottomColor: 'rgb(232, 232, 232)',
    backgroundColor: 'whitesmoke'
  },
  bold: {
    fontWeight: 'bold'
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)