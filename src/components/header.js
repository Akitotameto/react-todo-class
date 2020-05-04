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
                <button onClick={this.pageList}> List </button>
                <button onClick={this.pageSet}> Set </button>
            </div>
        )
    }
}

export default Header;