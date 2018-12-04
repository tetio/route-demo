import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from '../components/Login'
import Home from '../components/Home'
import Register from '../components/Register'
import './Main.css'

class Main extends Component {
    state = {
        auth: false
    }

    loginHandler = (event) => {
        this.setState({ auth: !this.state.auth })
    }
    render() {
        return (
            <div className='Main'>
                <Switch>
                    {this.state.auth ? <Route path="/" exact render={(props)=><Home {...props} myHandler={this.loginHandler}/>}/> : null}
                    {!this.state.auth ? <Route path="/" exact  render={(props)=><Login {...props} myHandler={this.loginHandler}/>}/> : null}
                    <Route path="/register" component={Register} />
                    <Route path="/login" render={(props)=><Login {...props} myHandler={this.loginHandler}/>}/>
                </Switch>
            </div>
        )
    }
}

export default Main;