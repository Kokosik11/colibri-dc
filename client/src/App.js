import React, { Component } from 'react';
import { Auth } from './auth';
import {
    Route,
    Switch,
    withRouter
} from "react-router-dom"

function Test() {
    return (
        <div>Test</div>
    )
}

class App extends Component {
    render() {
        const { history } = this.props

        return (
            <div className="App">
                <Switch>
                    <Route exact history={history} path="/" component={Auth}/>
                    <Route exact history={history} path="/test" component={Test}/>
                    {/* <Redirect from='/' to='/test'/> */}
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);