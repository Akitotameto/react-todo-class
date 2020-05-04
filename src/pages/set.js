import React, { Component } from 'react';
import Header from  '../components/header'
import TodoDateLow from  '../components/todo-date-low'

class Set extends Component {
    render() {
        return(
            <div>
                <Header history={this.props.history} index={2} />
                <h1>登録画面</h1>
            </div>
        )
    }
}

export default Set;