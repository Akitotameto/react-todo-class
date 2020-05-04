import React, {Component} from 'react';

class Header extends Component {
    pageList = () => {
        this.props.history.push('/')
    }

    pageSet = () => {
        this.props.history.push('/set')
    }

    render() {
        return(
            <div>
                <button onClick={this.pageList}> List {this.props.index === 1 && `(avtive)`} </button>
                <button onClick={this.pageSet}> Set {this.props.index === 2 && `(avtive)`} </button>
            </div>
        )
    }
}

export default Header;