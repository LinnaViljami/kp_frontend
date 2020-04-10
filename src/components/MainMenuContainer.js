import React from 'react'
import '../styles/MainMenu.css'
import { connect } from "react-redux";
import { startNewGame } from "../redux/actions";
import {getMainMenuButtonsState} from "../redux/selectors";

const MainMenuContainer = (props) => {
    const isGameStartedToText = (gameStatus) => {
        if (gameStatus){
            console.log("esa");
            return "Game is started"
        }
        else {
            return "Game not started"
        }
    }
    return (
        <div className="main-menu-container">
            <button type="button" className="btn btn-primary" onClick={props.startNewGame}>Start a new Game</button>
            <button type="button" className="btn btn-primary">{isGameStartedToText(props.isGameStarted)}</button>
        </div>
    );
};


const mapStateToProps = state =>  ({isGameStarted: state.mainMenuButtons.isGameStarted});


export default connect(mapStateToProps, {startNewGame})(MainMenuContainer);
