import React from 'react';
import {Stats} from "./Stats";
import {Stopwatch} from "./Stopwatch";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import styles from '../pages/scoreboard/Scoreboard.module.css'

const Header = (props) => {
  console.log(props);
  const {title, players} = props; //destruct assignment
  return (
    <header className={styles.header}>
      <Stats players={players}/>
      <h1 className={styles.h1}>{title}</h1>
      <Stopwatch/>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  players: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    score: PropTypes.number,
    name: PropTypes.string
  }))
}


const mapStateToProps = (state) => ({
  title: state.playerReducer.title,
})

export default connect(mapStateToProps, null)(Header);