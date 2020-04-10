import React from 'react'
import '../styles/MainMenu.scss'
import MainMenuTopBar from './MainMenuTopBar'
import MainMenuMainContent from "./MainMenuMainContent";

const MainMenuContainer = (props) => {

    return (
        <div className="main-menu-container">
            <MainMenuTopBar/>
            <MainMenuMainContent/>
        </div>
    );
};

export default MainMenuContainer;


