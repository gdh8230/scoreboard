import React from 'react';
import {Counter} from "./Counter";

export class Player extends React.PureComponent {
  render() {
    console.log(this.props.name, 'rendered');
    const {removePlayer, id, name, score, changeScore} = this.props;
    return (
      <div className="player">
    <span className="player-name">
    <button className="remove-player" onClick={() => this.props.removePlayer(id)}>X</button>
      {name}
    </span>
        {/*<Counter score={this.props.score}/>*/}
        <Counter score={score} id={id} changeScore={changeScore} />
      </div>
    );
  }

  componentWillReceiveProps(nextProps, nextContext) {

  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log(nextProps, nextState);
    return nextProps.score !== this.props.score;
  }

}