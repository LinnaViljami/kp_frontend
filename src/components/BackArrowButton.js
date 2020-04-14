import React from 'react'
import '../styles/Common.scss'
import { connect } from "react-redux";


const BackArrowButton = (props) => {

    return (
        <button className="back-arrow" onClick={props.toSettings}>
            Asetukset
        </button>
    );
};

const mapStateToProps = state => (
    {
        currentWindow: state.navigation.currentWindow

    }
);
