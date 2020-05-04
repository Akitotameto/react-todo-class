import React, { Component } from 'react';

class Set extends Component {
    pageList = () => {
        this.props.history.push('/')
    }

    render() {
        return(
            <div>
                <h1>登録画面</h1>
                <button onClick={this.pageList}> List </button>
            </div>
        )
    }
}

export default Set;