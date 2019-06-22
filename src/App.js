import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Player} from "./components/Player";
import {AddPlayerForm} from "./components/AddPlayerForm";

class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', id: 1, score: 0},
      {name: 'HONG', id: 2, score: 0},
      {name: 'KIM', id: 3, score: 0},
      {name: 'PARK', id: 4, score: 0},
    ]
  }

  handleRemovePlayer = (id) =>{
    console.log('remove player:', id);

    this.setState(prevStatus=>({
      players: prevStatus.players.filter(item=> item.id !== id)
    }))
  }

  handleAddPlayer = (name) =>{
    console.log('add player name: ', name);

    this.setState(prevState=>{
      prevState.players.push({
        name,
        id: prevState.players.length+1,
        score: 0
      })
      return{
        players: [...prevState.players]
      }
    })
  }

  /**
   * 스코어 변경시키는 함수
   * @param id 플레이어
   * @param delta 증감
   */
  handleChangeScore = (id, delta) =>{
    console.log('change score', id, delta);

    this.setState(prevStatus=> {
      prevStatus.players.forEach(player => {
        if (player.id === id) {
          player.score += delta;
        }
      })

      return {players: [...prevStatus.players] }
    })
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="My scoreboard" players={this.state.players}/>
        {
          this.state.players.map(player => (
            <Player name={player.name} id={player.id} score = {player.score} key={player.id}
                    removePlayer={this.handleRemovePlayer}
                    changeScore={this.handleChangeScore}/>
          ))
        }
        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    )
  }
}

export default App;
