import React, {Component} from 'react';
import {HashRouter, Router, Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Login from 'components/login';
import {createHashHistory} from 'history';
import NotFound from "components/404";
import Info from "components/login/info";


class App extends Component {

    render() {
        const isLoggedIn = this.props.isLoggedIn;
        return (

            <HashRouter>
                <Router history={createHashHistory()}>
                    <Switch>

                        {
                           /* !isLoggedIn && <Route exact component={Login}/>*/
                        }

                        <Route path="/" exact component={Login}/>
                        <Route path="/login" exact component={Login}/>
                        <Route path="/info" exact component={Info}/>
                        <Route path="*" exact component={NotFound}/>

                    </Switch>
                </Router>
            </HashRouter>
        );
    }
}

const mapStateToProps = (store) => {
    return ({

    })
}

export default connect(mapStateToProps)(App);
