import React, { Component } from 'react'
import Header from  '../components/header'
import TodoDateLow from  '../components/todo-date-low'

let todoData = [
    {
        id: 1,
        title: 'タイトル1',
        content: '内容1内容1内容1内容1内容1内容1内容1',
        createdAt: '2020-05-04',
        category: 1,
        isFavorite: false,
        index: 0
    },
    {
        id: 2,
        title: 'タイトル2',
        content: '内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2',
        createdAt: '2020-05-04',
        category: 2,
        isFavorite: true,
        index: 1
    },
    {
        id: 3,
        title: 'タイトル3',
        content: '内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3',
        createdAt: '2020-05-04',
        category: 1,
        isFavorite: false,
        index: 2
    },
]

class List extends Component {
    render() {
        return(
            <div>
                <Header history={this.props.history} index={1}/>
                <div className='contents-1'>
                    <h1>Todo List</h1>
                </div>
                <table border='1' className='table-1'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>タイトル</th>
                            <th>内容</th>
                            <th>日時</th>
                            <th>カテゴリ</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TodoDateLow todoData={todoData}/>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default List;