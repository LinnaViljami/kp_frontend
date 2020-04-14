import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import MainMenuContainer from './components/MainMenuContainer'
class App extends Component {
    render() {

        return (
            <Router>
                <Switch>
                    <Route path="/home">
                    <MainMenuContainer/>
                    </Route>
                    <Route path="/">
                        <Redirect to="/home" />
                    </Route>
                </Switch>
            </Router>

        )
    }
}

export default App
