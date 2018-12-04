import React, { Component } from 'react'
import './Login.css'

class Register extends Component {
    state = {
        username: '',
        password1: '',
        password2: '',
        error: ''
    }

    registerHandler = () => {
        if (this.state.password1.length >= 6 && this.state.password1 === this.state.password2) {
            this.props.history.push('/login')
        } else {
            this.setState({ error: (this.state.password1.length < 6) ? 'Password length should be 6 at least' : 'Paswword should be equal' })
        }
    }

    render() {
        return (
            <div className='Login'>
                <h1>Register</h1>
                <label>Username</label>
                <input type="text" onChange={(event) => this.setState({ username: event.target.value })} />
                <label>Password</label>
                <input type="password" onChange={(event) => this.setState({ password1: event.target.value })} />
                <label>Verify password</label>
                <input type="password" onChange={(event) => this.setState({ password2: event.target.value })} />
                <p style={{ color: 'red' }}>{this.state.error}</p>
                <button onClick={this.registerHandler}>Register</button>
            </div >
        )
    }
}
export default Register;