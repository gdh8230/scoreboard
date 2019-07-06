import React from 'react';
import PropTypes from "prop-types";
import {changeScore} from "../redux/actions";
import {connect} from "react-redux";
import classNames from "classnames";

import styles from '../pages/scoreboard/Scoreboard.module.css'

class Counter extends React.Component {
  // constructor(props) {
  //   super(props);
  //
  //   // this.incrementScore().bind(this);
  //   // this.decrementScore = this.decrementScore.bind(this);
  // }

  //Arrow펑션 안의 this는 lexical this로써 자기자신을 가리키게 된다.

  render() {
    return (
      <div className={styles.counter}>
        <button className={classNames(styles["counter-action"], styles.decrement)}
                onClick={()=> this.props.changeScore(this.props.id, -1)}> -</button>
        <span className={styles["counter-score"]}>{this.props.score}</span>
        <button className={classNames(styles["counter-action"], styles.increment)}
                onClick={()=> this.props.changeScore(this.props.id, 1)}> +</button>
      </div>
    )
  }
}

Counter.propTypes ={
  id: PropTypes.number,
  score: PropTypes.number,
  changeScore: PropTypes.func
}

const mapActionToProps = (dispatch) => ({
  changeScore: (id, delta)=> dispatch(changeScore(id, delta))
})


export default connect(null, mapActionToProps)(Counter);