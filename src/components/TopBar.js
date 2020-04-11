import React from 'react'
import '../styles/MainMenu.scss'
import {connect} from "react-redux";
import {windowDescriptions} from "../redux/reducers/navigation"

const TopBar = (props) => {

    return (
        <div className="main-menu-top-bar">
            <div>
                {windowDescriptions[props.currentWindow]}
            </div>

        </div>
    );
};

const mapStateToProps = state => {
  return {currentWindow: state.navigation.currentWindow};
};
export default connect(mapStateToProps, {})(TopBar);

