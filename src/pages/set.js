import React, { Component } from 'react';
import Header from  '../components/header'

class Set extends Component {
    render() {
        return(
            <div>
                <Header history={this.props.history} />
                <h1>登録画面</h1>
            </div>
        )
    }
}

export default Set;