import React, { Component } from 'react'
import './Home.css'

class Home extends Component {
    state = {
        auth: false
    }
    render() {
        return (
            <div className='Home'>
                <h1>Home</h1>
            </div>
        )
    }
}

export default Home;
