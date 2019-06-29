import React from 'react';
import './App.css';
import Header from "./components/Header";
import Player from "./components/Player";
import AddPlayerForm from "./components/AddPlayerForm";
import {connect} from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div className="scoreboard">
        <Header title="My scoreboard" players={this.props.players}/>
        {
          this.props.players.map(player => (
            <Player name={player.name} id={player.id} score = {player.score} key={player.id}/>
          ))
        }
        <AddPlayerForm />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  players: state.playerReducer.players,
})

export default connect(mapStateToProps, null)(App);