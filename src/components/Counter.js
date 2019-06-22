import React from 'react';

export class Counter extends React.Component {
  // constructor(props) {
  //   super(props);
  //
  //   // this.incrementScore().bind(this);
  //   // this.decrementScore = this.decrementScore.bind(this);
  // }

  //Arrow펑션 안의 this는 lexical this로써 자기자신을 가리키게 된다.

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement"
                onClick={()=> this.props.changeScore(this.props.id, -1)}> -</button>
        <span className="counter-score">{this.props.score}</span>
        <button className="counter-action increment"
                onClick={()=> this.props.changeScore(this.props.id, 1)}> +</button>
      </div>
    )
  }
}