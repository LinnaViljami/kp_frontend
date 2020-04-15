import React, { Component } from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import history from './history';
import MainMenuContainer from './components/MainMenuContainer'
import BackArrowButton from "./components/BackArrowButton";
import PlayerSelectionList from "./components/PlayerSelectionList"

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/mainMenu">
                        <MainMenuContainer/>
                    </Route>
                    <Route path="/esa">
                        <div>
                            <PlayerSelectionList/>
                        </div>
                        <div>
                            <BackArrowButton to="/"/>
                        </div>
                    </Route>

                    <Route path="/">
                        <Redirect to="/mainMenu" />
                    </Route>
                </Switch>
            </Router>
        )
    }
}
