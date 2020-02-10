import React, { Component } from 'react';
import {Router, Route, BrowserRouter, Switch} from 'react-router-dom';
import history from '../history';
import Home from './Home';
import Everything from './Everything';
import Article from './Article';

class App extends Component {
    render() {
        return (
            <div>
                <Router history={history}>
                    <BrowserRouter>
                        <div>
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/everything" component={Everything} />
                            <Route path="/article" component={Article} />
                        </Switch>
                        </div>
                    </BrowserRouter>
                </Router>
            </div>
        )
    }
}

export default App;