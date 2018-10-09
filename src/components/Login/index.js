import React, { Component } from 'react';
import fire from '../../Fire';
import './styles.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loading: false,
            errors: ''
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    login = event => {
        this.setState({ loading: true });
        event.preventDefault();
        fire.auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(success => {
                this.setState({ loading: false })
            })
            .catch(error => {
                console.log(error.message);
                this.setState({
                    errors: error.message
                })
            })
    }

    signup = event => {
        this.setState({ loading: true });
        event.preventDefault();
        fire.auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(success => {
                this.setState({ loading: false })
            })
            .catch(error => {
                console.log(error.message);
                this.setState({ errors: error.message })
            })
    }

    render() {
        return (
            <div className="Login">
                <input type="text" onChange={this.handleChange} placeholder="Email" name="email" autoComplete="username" />
                <input type="password" onChange={this.handleChange} placeholder="Password" name="password" autoComplete="current-password" />

                {this.state.loading && !this.state.errors ? <p className="preloader">Loading ...</p> : null}

                <button onClick={this.login}>login</button>
                <button onClick={this.signup}>signup</button>
                
                {this.state.errors ? <p className="error_message">{this.state.errors}</p> : null}
            </div>
        );
    }
}

export default Login;