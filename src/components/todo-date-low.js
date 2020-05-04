import React, {Component} from 'react'

class TodoDateLow extends Component {
    render() {
        return(
            <>
            {this.props.todoData.map((item) =>
                (<tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.content}</td>
                    <td>{item.createdAt}</td>
                    <td>{item.category}</td>
                </tr>)
            )}
            </>
        )
    }
}

export default TodoDateLow;