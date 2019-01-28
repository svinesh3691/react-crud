import React, { Component } from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import UserList from '../../containers/user/user-list/user-list';
import Home from '../../containers/home/home';
import { PrivateRoute } from '../../PrivateRoute';

class AuthLayout extends Component {
    constructor(props) {
        super(props);
        console.log(props);

    }
    logout() {
        console.log(this.props);
        console.log('log out');
        localStorage.removeItem('user');
        this.props.history.push('/login')

    }
    render() {
        return (
            <div className="app">
                <header className="app-header">
                    <div className="menu">
                        <ul>
                            <li style={{ display: 'inline', margin: '6px' }}><Link to='/'>Home</Link></li>
                            <li style={{ display: 'inline', margin: '6px' }}><Link to='/users'>Users</Link></li>
                            <li style={{ display: 'inline', margin: '6px' }}><button onClick={this.logout.bind(this)}>Logout</button></li>
                        </ul>
                    </div>
                </header>
                <div className="app-body">

                    <Switch>
                        <Route path="/home" name="Homw" component={Home} />
                        <PrivateRoute dob="265" path="/users" name="Userm List" component={UserList} />
                        <Redirect from="/" to="/home" />
                    </Switch>

                </div>
                <div className="app-footer">
                    Developed by S Vinesh
                </div>
            </div >
        );
    }
}
export default AuthLayout;