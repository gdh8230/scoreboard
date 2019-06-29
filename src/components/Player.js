import React from 'react';
import Counter from "./Counter";
import {removePlayer} from "../redux/actions";
import {connect} from "react-redux";

class Player extends React.PureComponent {
  render() {
    console.log(this.props.name, 'rendered');
    const {id, name, score, removePlayer} = this.props;
    return (
      <div className="player">
    <span className="player-name">
      <button className="remove-player" onClick={() => removePlayer(id)}>X</button>
      {name}
    </span>
        {/*<Counter score={this.props.score}/>*/}
        <Counter score={score} id={id} />
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

const mapActionToProps = (dispatch) => ({
  removePlayer: (id)=> dispatch(removePlayer(id))
})

export default connect(null, mapActionToProps)(Player);