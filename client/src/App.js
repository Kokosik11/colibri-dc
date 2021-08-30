import React from 'react';
import Auth from './auth';
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

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/" component={Auth}/>
                <Route path="/test" component={Test}/>
                {/* <Redirect from='/' to='/test'/> */}
            </Switch>
        </div>
    );
}

export default withRouter(App);