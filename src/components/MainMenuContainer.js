import React from 'react'
import '../styles/MainMenu.scss'
import TopBar from './TopBar'
import MainMenuMainContent from "./MainMenuMainContent";
import BackArrowButton from "./BackArrowButton";

const MainMenuContainer = (props) => {

    return (
        <div className="main-menu-container">
            <TopBar/>
            <MainMenuMainContent/>
            <BackArrowButton/>
        </div>
    );
};

export default MainMenuContainer;


