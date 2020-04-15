import React from 'react'
import { connect } from "react-redux";
import {selectPlayer} from '../redux/actions'
const PlayerSelectionList = (props) => {
    const listItems = Object.keys(props.players).map(playerId => (<li key={playerId}>{props.players[playerId].name}</li>));
  return (
      <ul>
          {listItems}
      </ul>
  );
};

const mapStateToProps = state =>
    ({players: state.gameCreation.players});

export default connect(mapStateToProps, {selectPlayer})(PlayerSelectionList);
