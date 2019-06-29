import React from 'react';

export class AddPlayerForm extends React.Component {
  textInput = React.createRef();

  handleSubmit = (e) =>{
    //기본이벤트 막기
    e.preventDefault();
    this.props.addPlayer(this.textInput.current.value);
  }

  render() {
      return (
        <form className="form" onSubmit={this.handleSubmit}>
          <input className="input" type="text" placeholder="enter a player's name"
                 ref={this.textInput}></input>
          <input className="input" type="submit" value="Add Players"></input>
        </form>
      );
  }
}