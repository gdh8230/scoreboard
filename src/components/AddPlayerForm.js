import React from 'react';
import {addPlayer} from "../redux/actions";
import {connect} from "react-redux";

class AddPlayerForm extends React.Component {
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

const mapActionToProps = (dispatch) => ({
  addPlayer: (name)=> dispatch(addPlayer(name))
})


export default connect(null, mapActionToProps)(AddPlayerForm);