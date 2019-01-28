import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    login(e) {
        e.preventDefault();
        console.log(this, this.state.username, this.state.password);
        if (this.state.username === 'svinesh3691' && this.state.password === 'secret') {
            localStorage.setItem('user', this.state.username);
            this.props.history.push('/user')
        } else {
            alert('Wrong username/password');
        }
    }

    render() {
        return (

            <form onSubmit={(event) => this.login(event)}>
                <h1>Login</h1>
                <p className="text-muted">Sign In to your account</p>
                <p>
                    <label>Username</label>
                    <br></br>
                    <input type="text" onChange={(e) => this.setState({ username: e.target.value })} type="text" placeholder="Username" autoComplete="username" />
                </p>
                <p>
                    <label>Password</label>
                    <br></br>
                    <input onChange={(e) => this.setState({ password: e.target.value })} type="password" placeholder="Password" autoComplete="current-password" />

                </p>

                <button onClick={(event) => this.login(event)} color="primary" className="px-4">Login</button>

            </form>

        );
    }
}

export default Login;
