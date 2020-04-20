import React from 'react'
import { connect } from "react-redux";
import {selectPlayer} from '../redux/actions'
import "./../styles/PlayerSelection.scss"
const PlayerSelectionList = (props) => {
    const getListItemClass = (isSelected) => {
        if (isSelected) {
            return "list-group-item active"
        }
        else {}
            return "list-group-item"
    };
    const listItems = Object.keys(props.players).map(playerId =>
        (
            <li
                key={playerId}
                className={getListItemClass(props.players[playerId].isSelected)}
                onClick={() => props.selectPlayer(playerId)}
            >
                {props.players[playerId].name}
            </li>));
  return (
      <ul>
          {listItems}
      </ul>
  );
};

const mapStateToProps = state =>
    ({players: state.gameCreation.players});

export default connect(mapStateToProps, {selectPlayer})(PlayerSelectionList);
