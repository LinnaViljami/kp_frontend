import React from 'react'
import '../styles/MainMenu.scss'
import { connect } from "react-redux";
import { startNewGame } from "../redux/actions";


const MainMenuMainContent = (props) => {
    const isGameStartedToText = (gameStatus) => {
        if (gameStatus){
            return "Game is started"
        }
        else {
            return "Game not started"
        }
    };

    return (
        <div className="main-menu-main-content">
            <button className="btn btn-lg btn-primary" onClick={props.startNewGame}>
                Start a new game
            </button>
            <div>
                {isGameStartedToText(props.isGameStarted)}
            </div>
        </div>
    );

};

const mapStateToProps = state =>  ({isGameStarted: state.mainMenuButtons.isGameStarted});


export default connect(mapStateToProps, {startNewGame})(MainMenuMainContent);
