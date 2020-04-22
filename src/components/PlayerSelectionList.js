import React from 'react'
import { connect } from "react-redux";
import {selectPlayer, fetchUsers} from '../redux/actions'
import "./../styles/PlayerSelection.scss"
const PlayerSelectionList = (props) => {




  return (
      <div>
      <ul>
          {listItems(props.players, props.selectPlayer)}
      </ul>
      </div>
  );
};

const mapStateToProps = state =>
    (state.gameCreation);

export default connect(mapStateToProps, {selectPlayer, fetchUsers})(PlayerSelectionList);


const renderContent = (props) => {

};

const getListItemClass = (isSelected) => {
    if (isSelected) {
        return "list-group-item active"
    }
    else {}
    return "list-group-item"
};

const listItems = (players, playerSelectionAction) => (players.map(player =>
{


    return (
        <li
            key={player.id}
            className={getListItemClass(player.selected)}
            onClick={() => playerSelectionAction(player.id)}
        >
            {player.firstName}
        </li>);
}));
