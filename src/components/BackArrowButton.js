import React from 'react'
import '../styles/Common.scss'
import {goBack} from '../redux/actions'
import { connect } from "react-redux";


const BackArrowButton = (props) => {

    return (
        <button className="back-arrow" onClick={() => props.goBack(props.to)}>
            {"<-Takaisin"}
        </button>
    );
};

const mapStateToProps = state => (
    {}
);

export default connect(mapStateToProps, {goBack})(BackArrowButton)
