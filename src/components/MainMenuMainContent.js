import React from 'react'
import '../styles/MainMenu.scss'
import { connect } from "react-redux";
import { startNewGame, toCurrentGames, toSettings } from "../redux/actions";


const MainMenuMainContent = (props) => {


    return (
        <div className="main-menu-main-content">
            <button className="main-menu-button" onClick={props.startNewGame}>
                Uusi peli
            </button>
            <button className="main-menu-button" onClick={props.toCurrentGames}>
                Jatka peliä
            </button>
            <button className="main-menu-button" onClick={props.toSettings}>
                Asetukset
            </button>
            <div>
                {props.currentWindow}
            </div>
        </div>
    );

};

const mapStateToProps = state =>  ({currentWindow: state.navigation.currentWindow});


export default connect(mapStateToProps, {startNewGame, toCurrentGames, toSettings})(MainMenuMainContent);
