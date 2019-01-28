import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <div>
            {/* <span>Test</span> */}
            <Route {...rest} render={props => (
                localStorage.getItem('user')
                    ? <Component {...props} />
                    : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            )} />
        </div>
    );
}