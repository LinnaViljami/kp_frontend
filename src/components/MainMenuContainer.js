import React from 'react'
import '../styles/MainMenu.scss'
import TopBar from './TopBar'
import MainMenuMainContent from "./MainMenuMainContent";

const MainMenuContainer = (props) => {

    return (
        <div className="main-menu-container">
            <TopBar/>
            <MainMenuMainContent/>
        </div>
    );
};

export default MainMenuContainer;


