import React, {Component} from 'react'

class TodoDateLow extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todoData: this.props.todoData
        }
    }

    clickFavorite = id => {
        const { todoData } = this.state;
        console.log("test", id)
        todoData.map((v, index) => {
            console.log('todo index', index)
            console.log('todo value', v)
            if (v.id === id){
                console.log('favorite!')
                // todoDataのjsonを書き換える
                todoData[index].isFavorite = true
                this.setState({ todoData })
                console.log('todoData', todoData)
                // if (v.isFavorite){
                //     v.isFavorite = false

                // } else if (!v.isFavorite){
                //     v.isFavorite = true
                //     console.log(v.isFavorite)
                // }
            }
        })
    };

    clickUnFavorite = id => {
        const { todoData } = this.state;
        console.log("test", id)
        todoData.map((v, index) => {
            console.log('todo index', index)
            console.log('todo value', v)
            if (v.id === id){
                console.log('favorite!')
                // todoDataのjsonを書き換える
                todoData[index].isFavorite = false
                this.setState({ todoData })
                console.log('todoData', todoData)
                // if (v.isFavorite){
                //     v.isFavorite = false

                // } else if (!v.isFavorite){
                //     v.isFavorite = true
                //     console.log(v.isFavorite)
                // }
            }
        })
    };

    clickDelete = id => {
        const { todoData } = this.state;
        console.log("test", id)
        todoData.map((v, index) => {
            console.log('==================')
            console.log('todo value', v)
            if (v.id === id){
                todoData.splice(v.index, v.id)
                this.setState({ todoData })
                console.log('todoData', todoData)
            }
        })
    };

    render() {
        const { todoData } = this.state;
        return(
            <>
            {this.props.todoData.map((item) =>
            {
                console.log('props',this.props)
                console.log('todoDate', todoData)
                return (<tr key={item.id}>
                    <td>{item.isFavorite && "★"} {item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.content}</td>
                    <td>{item.createdAt}</td>
                    <td>{item.category}</td>
                    <td>
                        <button onClick={() => this.clickFavorite(item.id)}> お気に入り </button><br />
                        <button onClick={() => this.clickUnFavorite(item.id)}> お気に入り </button><br />
                        <button onClick={() => this.clickDelete(item.id)}> 削除 </button><br />
                    </td>
                    {console.log('id',item.id)}
                </tr>)
            }
            )}
            </>
        )
    }
}

export default TodoDateLow;