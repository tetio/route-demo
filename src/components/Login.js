import React, { Component } from 'react'
import './Login.css'

class Login extends Component {
    state = {
        username: '',
        password: '',
        error: ''
    }

    loginHandler = () => {
        if (this.state.username === 'demo' && this.state.password === 'demo') {
            this.props.myHandler()
            this.props.history.push('/')
        } else {
            this.setState({ error: 'Invalid user.' })
        }
    }
    registerHandler = () => {
        this.props.history.push('/register')
    }
    render() {
        return (
            <div className='Login'>
                <h1>Login</h1>
                <label>Username</label>
                <input type="text" onChange={(event) => this.setState({ username: event.target.value })} />
                <label>Password</label>
                <input type="password" onChange={(event) => this.setState({ password: event.target.value })} />
                <p style={{ color: 'red' }}>{this.state.error}</p>
                <button onClick={() => this.loginHandler()}>Login</button>
                <button onClick={() => this.registerHandler()}>Register</button>
            </div >
        )
    }
}
export default Login;